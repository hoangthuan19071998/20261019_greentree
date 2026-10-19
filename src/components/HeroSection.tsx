import React from 'react'
import { TreeRingsBackground } from './TreeRingsBackground'

interface HeroSectionProps {
  onScrollToStory?: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToStory }) => {
  const acronyms = [
    { letter: 'G', rest: 'round' },
    { letter: 'R', rest: 'oot' },
    { letter: 'E', rest: 'ngage' },
    { letter: 'E', rest: 'levate' },
    { letter: 'N', rest: 'urture' },
  ]

  return (
    <section id="top" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-[#091710]">
      {/* Background Rings */}
      <TreeRingsBackground />

      {/* Main Grid Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Side: G.R.E.E.N. Vertical Acronym */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-2 md:space-y-3 select-none">
          {acronyms.map((item, idx) => (
            <div
              key={idx}
              className="flex items-baseline group transition-all duration-300 hover:translate-x-2"
            >
              <span className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-[#F5F4EE] leading-none transition-colors duration-300 group-hover:text-white">
                {item.letter}
              </span>
              <span className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#9BB89E] ml-2 font-normal transition-colors duration-300 group-hover:text-[#BCE0BF]">
                {item.rest}
              </span>
            </div>
          ))}
        </div>

        {/* Right Side: Headline and Studio Copy */}
        <div className="lg:col-span-6 flex flex-col justify-center lg:pl-10 space-y-6">
          <div className="space-y-3">
            <span className="inline-block text-[11px] sm:text-xs tracking-[0.25em] font-sans font-semibold text-[#8FA98F] uppercase">
              DIGITAL GROWTH STUDIO
            </span>
            <h1 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-[#F5F4EE] font-normal leading-[1.12]">
              Brands aren't built overnight. They're grown.
            </h1>
          </div>

          <p className="text-base sm:text-lg text-[#CCDACC] leading-relaxed max-w-md font-sans font-light">
            Performance advertising, content and digital strategy — rooted in data, cultivated with care.
          </p>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-8 flex items-center justify-between border-t border-[#1F4733]/40">
        <a
          href="#about"
          onClick={(e) => {
            if (onScrollToStory) {
              e.preventDefault()
              onScrollToStory()
            }
          }}
          className="group inline-flex items-center gap-3 text-xs tracking-[0.2em] font-sans font-medium text-[#9BB89E] hover:text-[#F5F4EE] transition-colors"
        >
          <span>SCROLL</span>
          <span className="text-[#3E7356]">·</span>
          <span>THE STORY MOVES SIDEWAYS</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1.5 text-base">
            →
          </span>
        </a>

        <div className="hidden sm:flex items-center gap-2 text-xs font-sans text-[#708A74]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5FB88C] animate-pulse" />
          <span>Da Nang, Vietnam</span>
        </div>
      </div>
    </section>
  )
}
