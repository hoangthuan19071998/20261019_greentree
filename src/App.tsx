import { useState, useRef } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { WhoWeAreSection } from './components/WhoWeAreSection'
import { ServicesSection } from './components/ServicesSection'
import { GreenProcessSection } from './components/GreenProcessSection'
import { SelectedWorkSection } from './components/SelectedWorkSection'
import { QuoteSection } from './components/QuoteSection'
import { ContactSection } from './components/ContactSection'
import { ContactModal } from './components/ContactModal'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const storyTrackRef = useRef<HTMLDivElement>(null)

  const scrollToStory = () => {
    const el = document.getElementById('story-container')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollTrack = (direction: 'left' | 'right') => {
    if (storyTrackRef.current) {
      const scrollAmount = direction === 'left' ? -650 : 650
      storyTrackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#091710] text-[#F5F4EE] flex flex-col font-sans selection:bg-[#ADC2AD] selection:text-[#091710]">
      {/* Top Navigation */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Hero Section */}
      <HeroSection onScrollToStory={scrollToStory} />

      {/* Horizontal Story Section */}
      <section id="story-container" className="py-16 bg-[#07140E] border-t border-[#183927] relative overflow-hidden">
        {/* Subtle Ambient Background glow */}
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#143B27]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1920px] mx-auto px-6">
          {/* Section Track Header with Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#1A3F2B]/60">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5FB88C] animate-pulse" />
              <span className="font-mono text-xs tracking-[0.2em] text-[#8FA98F] uppercase">
                THE STORY STREAM · HORIZONTAL PANELS
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#66886E] hidden md:inline">
                Scroll horizontally or use controls
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollTrack('left')}
                  aria-label="Previous section"
                  className="cursor-pointer w-9 h-9 rounded-full bg-[#0D261A] border border-[#214D35] flex items-center justify-center text-[#CCDACC] hover:text-white hover:border-[#5FB88C] transition-all active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollTrack('right')}
                  aria-label="Next section"
                  className="cursor-pointer w-9 h-9 rounded-full bg-[#0D261A] border border-[#214D35] flex items-center justify-center text-[#CCDACC] hover:text-white hover:border-[#5FB88C] transition-all active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Scroll Track */}
          <div
            ref={storyTrackRef}
            className="flex items-stretch gap-6 overflow-x-auto pb-8 pt-2 scrollbar-thin snap-x snap-mandatory focus:outline-none"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') scrollTrack('right')
              if (e.key === 'ArrowLeft') scrollTrack('left')
            }}
          >
            {/* Panel 1: Who We Are */}
            <div className="snap-start shrink-0">
              <WhoWeAreSection onOpenContact={() => setIsContactOpen(true)} />
            </div>

            {/* Panel 2: Services */}
            <div className="snap-start shrink-0">
              <ServicesSection />
            </div>

            {/* Panel 3: How We Work (The G.R.E.E.N. Process) */}
            <div className="snap-start shrink-0">
              <GreenProcessSection />
            </div>

            {/* Panel 4: Selected Work */}
            <div className="snap-start shrink-0">
              <SelectedWorkSection />
            </div>

            {/* Panel 5: Quote Interlude */}
            <div className="snap-start shrink-0">
              <QuoteSection />
            </div>

            {/* Panel 6: Contact & Footer */}
            <div className="snap-start shrink-0">
              <ContactSection onOpenContact={() => setIsContactOpen(true)} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Discovery Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}

export default App
