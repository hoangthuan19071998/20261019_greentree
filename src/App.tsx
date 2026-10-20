import { useEffect, useRef, useState } from 'react'
import { TreeRingSymbol } from './components/TreeRingSymbol'
import { CustomCursor } from './components/CustomCursor'
import { TapRipple } from './components/TapRipple'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { HorizontalJourney } from './components/HorizontalJourney'
import { ProcessSection } from './components/ProcessSection'
import { SelectedWorkSection } from './components/SelectedWorkSection'
import { QuoteSection } from './components/QuoteSection'
import { ContactSection } from './components/ContactSection'

const REDUCE_QUERY = '(prefers-reduced-motion: reduce)'
const DESKTOP_QUERY = '(min-width: 1101px) and (min-height: 800px)'

const supportsHorizontalJourney = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return (
    !window.matchMedia(REDUCE_QUERY).matches &&
    window.matchMedia(DESKTOP_QUERY).matches
  )
}

export function App() {
  // Pin only when the viewport has enough room for every panel. Tablets and
  // shorter windows use the same content in a natural vertical flow.
  const [hz, setHz] = useState(supportsHorizontalJourney)
  const rootRef = useRef<HTMLDivElement>(null)
  const progRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<SVGSVGElement>(null)
  const hzRef = useRef<HTMLDivElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const hzProgRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!window.matchMedia) return
    const reduceMq = window.matchMedia(REDUCE_QUERY)
    const desktopMq = window.matchMedia(DESKTOP_QUERY)
    const onChange = () => setHz(!reduceMq.matches && desktopMq.matches)
    reduceMq.addEventListener('change', onChange)
    desktopMq.addEventListener('change', onChange)
    return () => {
      reduceMq.removeEventListener('change', onChange)
      desktopMq.removeEventListener('change', onChange)
    }
  }, [])

  useEffect(() => {
    const rootEl = rootRef.current
    if (!rootEl) return

    const reduce = !hz

    // IntersectionObserver for reveal animation (.rv -> .rv.in)
    let io: IntersectionObserver | null = null
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add('in')
              io?.unobserve(en.target)
            }
          })
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.05 }
      )
      const observeAll = () => {
        if (rootRef.current) {
          rootRef.current.querySelectorAll('.rv:not(.in)').forEach((el) => {
            io?.observe(el)
          })
        }
      }
      setTimeout(observeAll, 50)
    } else {
      rootEl.querySelectorAll('.rv').forEach((el) => el.classList.add('in'))
    }

    const clamp = (v: number) => Math.max(0, Math.min(1, v))
    let dist = 0
    let ticking = false
    let pars: NodeListOf<SVGElement> | null = null

    const layout = () => {
      if (reduce || !hzRef.current || !pinRef.current || !trackRef.current) return
      dist = Math.max(0, trackRef.current.scrollWidth - pinRef.current.clientWidth)
      hzRef.current.style.height = `${pinRef.current.offsetHeight + dist}px`
    }

    // Scroll the window so a track panel sits at the left edge of the pin.
    const scrollToPanel = (panel: HTMLElement, behavior: ScrollBehavior) => {
      const hzEl = hzRef.current
      const trackEl = trackRef.current
      if (reduce || !hzEl || !trackEl) return
      if (!dist) layout()
      if (!dist) return
      const pinTop = pinRef.current
        ? parseFloat(getComputedStyle(pinRef.current).top) || 80
        : 80
      const hzTop = hzEl.getBoundingClientRect().top + window.scrollY - pinTop
      const left =
        panel.getBoundingClientRect().left - trackEl.getBoundingClientRect().left
      const offset = Math.max(0, Math.min(dist, left))
      window.scrollTo({ top: hzTop + offset, behavior })
    }

    const onClick = (e: MouseEvent) => {
      if (reduce || e.defaultPrevented || e.button !== 0) return
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]'
      )
      if (!link) return
      const id = link.getAttribute('href')?.slice(1)
      if (!id) return
      const target = document.getElementById(id)
      if (!target || !trackRef.current?.contains(target)) return
      const panel = target.closest<HTMLElement>('.hz-panel') || target
      e.preventDefault()
      scrollToPanel(panel, 'smooth')
    }

    const onFocusIn = (e: FocusEvent) => {
      if (reduce || !trackRef.current || !pinRef.current) return
      const el = e.target as HTMLElement | null
      if (!el || !trackRef.current.contains(el)) return
      const panel = el.closest<HTMLElement>('.hz-panel')
      if (!panel) return
      // The browser starts its own (smooth) scroll to the focused element right
      // after focusin, aiming at the element's untransformed position. Wait a
      // frame, then replace it with an instant scroll to the panel's mapped
      // position ('instant' cancels the smooth scroll and ignores the html
      // smooth-scroll rule), so the track and the focused element line up.
      requestAnimationFrame(() => {
        if (document.activeElement !== el) return
        scrollToPanel(panel, 'instant')
        update()
      })
    }

    const update = () => {
      ticking = false
      if (pinRef.current && pinRef.current.scrollLeft !== 0) {
        pinRef.current.scrollLeft = 0
      }
      const vh = window.innerHeight || 800
      if (rootRef.current) {
        const r = rootRef.current.getBoundingClientRect()
        const pg = clamp(-r.top / Math.max(1, r.height - vh))
        if (progRef.current) {
          progRef.current.style.transform = `scaleX(${pg.toFixed(4)})`
        }
        if (ringRef.current && !reduce) {
          const hp = clamp(-r.top / 900)
          ringRef.current.style.transform = `rotate(${(hp * 140).toFixed(
            2
          )}deg) scale(${(1 + hp * 0.15).toFixed(3)})`
        }
      }

      if (!reduce && hzRef.current && trackRef.current && dist) {
        const hr = hzRef.current.getBoundingClientRect()
        const pinTop = pinRef.current
          ? parseFloat(getComputedStyle(pinRef.current).top) || 0
          : 0
        const p = clamp((pinTop - hr.top) / dist)
        trackRef.current.style.transform = `translate3d(${(-p * dist).toFixed(
          1
        )}px, 0, 0)`

        if (hzProgRef.current) {
          hzProgRef.current.style.transform = `scaleX(${p.toFixed(4)})`
        }

        if (!pars && hzRef.current) {
          pars = hzRef.current.querySelectorAll<SVGElement>('.hz-par')
        }
        if (pars) {
          const off = ((p - 0.5) * 120).toFixed(1)
          for (let i = 0; i < pars.length; i++) {
            pars[i].style.transform = `translateX(${off}px) scale(1.12)`
          }
        }
      }
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    const onResize = () => {
      pars = null
      layout()
      onScroll()
    }

    document.addEventListener('scroll', onScroll, { capture: true, passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    rootEl.addEventListener('click', onClick)
    rootEl.addEventListener('focusin', onFocusIn)

    const t1 = setTimeout(onResize, 80)
    const t2 = setTimeout(onResize, 600)
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(onResize)
    }

    return () => {
      document.removeEventListener('scroll', onScroll, { capture: true })
      window.removeEventListener('resize', onResize)
      rootEl.removeEventListener('click', onClick)
      rootEl.removeEventListener('focusin', onFocusIn)
      // Drop any inline layout the horizontal driver applied.
      if (hzRef.current) hzRef.current.style.height = ''
      if (trackRef.current) trackRef.current.style.transform = ''
      if (pars) pars.forEach((el) => (el.style.transform = ''))
      clearTimeout(t1)
      clearTimeout(t2)
      if (io) io.disconnect()
    }
  }, [hz])

  return (
    <div
      className={hz ? 'gt js js-hz' : 'gt js'}
      ref={rootRef}
      style={{
        width: '100%',
        fontFamily: "'Manrope', system-ui, sans-serif",
        color: '#1A1F1C',
        background: '#F2F1EA',
      }}
    >
      {/* Global SVG Symbol definitions */}
      <TreeRingSymbol />

      {/* Custom Lerp Cursor */}
      <CustomCursor />

      {/* Touch Screen Tap Ripple */}
      <TapRipple />

      {/* Sticky Header with Reading Progress */}
      <Navbar progressRef={progRef} />

      {/* Hero Section */}
      <HeroSection ringRef={ringRef} />

      {/* Horizontal Journey: Who We Are & Services */}
      <HorizontalJourney
        hzRef={hzRef}
        pinRef={pinRef}
        trackRef={trackRef}
        hzProgRef={hzProgRef}
      />

      {/* The G.R.E.E.N. Process (Vertical) */}
      <ProcessSection />

      {/* Selected Work (Vertical) */}
      <SelectedWorkSection />

      {/* Philosophy Quote (Vertical) */}
      <QuoteSection />

      {/* Contact & Footer (Vertical) */}
      <ContactSection />
    </div>
  )
}

export default App
