import React from 'react'

export const QuoteSection: React.FC = () => {
  return (
    <div className="w-full lg:w-[650px] shrink-0 min-h-[580px] flex flex-col justify-center items-center p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#0F2D1F] to-[#0A1D13] border border-[#214D35] backdrop-blur-md shadow-2xl relative overflow-hidden text-center">
      {/* Decorative concentric watermark in quote box */}
      <svg
        className="absolute -bottom-20 -right-20 w-80 h-80 opacity-20 pointer-events-none"
        viewBox="0 0 200 200"
        fill="none"
        stroke="#8FA98F"
        strokeWidth="1"
      >
        <circle cx="100" cy="100" r="90" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="65" />
        <circle cx="100" cy="100" r="40" />
        <circle cx="100" cy="100" r="15" fill="#8FA98F" />
      </svg>

      <span className="text-4xl text-[#5FB88C] font-serif leading-none select-none mb-4">
        “
      </span>

      <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F5F4EE] leading-[1.25] font-light max-w-md">
        Good brands, like good trees, are{' '}
        <span className="italic font-normal text-[#A7C7AC]">grown</span>
        {' '}— not built.
      </blockquote>

      <div className="w-12 h-[1px] bg-[#3B704F] my-6" />

      <p className="text-xs font-mono tracking-[0.2em] text-[#8FA98F] uppercase">
        GREEN TREE PHILOSOPHY
      </p>
    </div>
  )
}
