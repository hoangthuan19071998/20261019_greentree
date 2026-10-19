import type { FC } from 'react'
// import React
import { ArrowUpRight } from 'lucide-react'

interface WhoWeAreSectionProps {
  onOpenContact: () => void
}

export const WhoWeAreSection: FC<WhoWeAreSectionProps> = ({ onOpenContact }) => {
  return (
    <div
      id="about"
      className="w-full lg:w-[680px] shrink-0 min-h-[580px] flex flex-col justify-between p-8 sm:p-12 rounded-3xl bg-[#0D2218]/90 border border-[#1E4530]/60 backdrop-blur-md shadow-2xl relative overflow-hidden group"
    >
      {/* Subtle organic light accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#1B4B32]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Tag */}
      <div>
        <div className="flex items-center gap-2.5 mb-6"><span className="w-6 h-6 rounded-full bg-[#C9D8B0] p-0.5 inline-flex items-center justify-center shrink-0"><img src="/logo_image/gta-symbol-xanh-64.png" alt="GTA" width={16} height={16} className="w-full h-full object-contain" /></span><span className="text-xs tracking-[0.25em] font-sans font-semibold text-[#8FA98F] uppercase block">
          01 â€” WHO WE ARE
        </span>
        </div>

        {/* Lead Quote */}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F5F4EE] font-normal leading-[1.25] mb-6">
          We're a performance-led digital agency in Da Nang that grows brands the way trees grow â€”{' '}
          <span className="italic text-[#A7C7AC] font-light">
            patiently, from the roots up.
          </span>
        </h2>

        {/* Body Paragraphs */}
        <div className="space-y-4 text-sm sm:text-base text-[#CCDACC] leading-relaxed font-sans font-light">
          <p>
            Every campaign starts below the surface: understanding your audience, your market and what growth actually means for your business. Then we plant the right channels and tend them until they bear fruit.
          </p>
          <p className="text-[#8FA98F] font-medium pt-2">
            Clear process. Measurable results. Honest reporting. Always curious.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="pt-8 mt-auto border-t border-[#1C412C]/60 flex items-center justify-between">
        <button
          onClick={onOpenContact}
          className="cursor-pointer group/btn inline-flex items-center gap-3 text-sm font-sans font-semibold text-[#F5F4EE] hover:text-[#A7C7AC] transition-colors"
        >
          <span>Start a project</span>
          <div className="w-8 h-8 rounded-full border border-[#2B573D] bg-[#102D1F] flex items-center justify-center transition-all duration-300 group-hover/btn:bg-[#F5F4EE] group-hover/btn:text-[#091710] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </button>

        <span className="text-xs font-mono text-[#5C7D64]">
          EST. 2026
        </span>
      </div>
    </div>
  )
}

