import type { FC } from 'react'
import { useEffect, useRef, useState } from 'react'
// import React

interface NavbarProps {
  progressRef?: React.RefObject<HTMLDivElement | null>
}

export const Navbar: FC<NavbarProps> = ({ progressRef }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const mq = window.matchMedia('(min-width: 1101px)')
    const onMq = () => {
      if (mq.matches) setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      window.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-20 bg-[#14261E]">
      <div
        className="pad mx-auto flex items-center justify-between gap-6"
        style={{
          maxWidth: '1440px',
          padding: '0 56px',
          height: '80px',
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#top"
          className="group flex shrink-0 items-center gap-3 whitespace-nowrap no-underline text-[#F2F1EA]"
          onClick={closeMenu}
        >
          <span className="w-9 h-9 rounded-full bg-[#C9D8B0] flex items-center justify-center p-1 shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105">
            <img
              src="/logo_image/gta-symbol-xanh-128.png"
              alt="Green Tree Agency Logo"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </span>
          <span className="serif text-[26px] tracking-[0.01em]">Green Tree</span>
          <span className="brand-tag text-[11px] tracking-[0.22em] uppercase text-[#C9D8B0] mt-1">
            Agency
          </span>
        </a>

        {/* Navigation links */}
        <nav
          className="navlinks items-center"
          aria-label="Main"
          style={{ gap: '36px' }}
        >
          <a className="navlink" href="#about">
            About
          </a>
          <a className="navlink" href="#services">
            Services
          </a>
          <a className="navlink" href="#process">
            Process
          </a>
          <a className="navlink" href="#work">
            Work
          </a>
          <a
            className="navlink"
            href="/greentree-company-profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the Green Tree Agency company profile PDF in a new tab"
          >
            Company Profile
          </a>
        </nav>

        {/* Compact section menu */}
        <button
          ref={menuButtonRef}
          type="button"
          className="m-menu-btn"
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        {/* Compact booking link */}
        <a className="m-book" href="#contact" aria-label="Book a call" onClick={closeMenu}>
          Book a call
        </a>

        {/* CTA Button */}
        <a className="btn btn-light hdr-btn" href="#contact">
          <span className="btn-fill" />
          <span>Book a call</span>
          <span className="btn-ring">
            <svg
              className="ring-ico"
              viewBox="0 0 100 100"
              width="26"
              height="26"
              aria-hidden="true"
              style={{ strokeWidth: 4.5 }}
            >
              <use href="#gt-ring" />
            </svg>
          </span>
        </a>
      </div>

      {/* Mobile section menu */}
      {menuOpen && (
        <nav id="mobile-menu" className="m-menu" aria-label="Sections">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#process" onClick={closeMenu}>Process</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a
            href="/greentree-company-profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the Green Tree Agency company profile PDF in a new tab"
            onClick={closeMenu}
          >
            Company Profile
          </a>
        </nav>
      )}

      {/* Reading Progress Line */}
      <div
        className="progress"
        ref={progressRef}
        style={{ height: '2px', background: '#C9D8B0' }}
      />
    </header>
  )
}

