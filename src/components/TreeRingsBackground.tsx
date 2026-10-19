import React from 'react'

export const TreeRingsBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Concentric Tree Rings SVG */}
      <svg
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[700px] md:w-[900px] lg:w-[1100px] h-[700px] md:h-[900px] lg:h-[1100px] opacity-45"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="500" cy="500" r="480" stroke="#1F4733" strokeWidth="1" strokeDasharray="3 4" />
        <circle cx="500" cy="500" r="430" stroke="#25543D" strokeWidth="1.2" />
        <circle cx="500" cy="500" r="375" stroke="#1F4733" strokeWidth="0.9" />
        <circle cx="500" cy="500" r="320" stroke="#2D6649" strokeWidth="1.2" strokeDasharray="6 3" />
        <circle cx="500" cy="500" r="260" stroke="#25543D" strokeWidth="1" />
        <circle cx="500" cy="500" r="200" stroke="#377A59" strokeWidth="1.5" />
        <circle cx="500" cy="500" r="140" stroke="#25543D" strokeWidth="1" />
        <circle cx="500" cy="500" r="85" stroke="#489670" strokeWidth="1.2" />
        <circle cx="500" cy="500" r="40" stroke="#5FB88C" strokeWidth="1.5" />
        {/* Core center dot */}
        <circle cx="500" cy="500" r="10" fill="#ADC2AD" className="animate-pulse" />
      </svg>

      {/* Radial soft ambient glows */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#16422C]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-10 top-1/3 w-80 h-80 bg-[#102B1E]/40 rounded-full blur-3xl pointer-events-none" />
    </div>
  )
}
