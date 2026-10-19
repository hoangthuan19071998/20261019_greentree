import React from 'react'

export const GreenProcessSection: React.FC = () => {
  const steps = [
    {
      letter: 'G',
      stepNum: '01',
      title: 'Ground',
      desc: 'We audit your market, competitors and current numbers to find solid footing.',
    },
    {
      letter: 'R',
      stepNum: '02',
      title: 'Root',
      desc: 'Strategy, audience and measurable goals — agreed before a single đồng is spent.',
    },
    {
      letter: 'E',
      stepNum: '03',
      title: 'Engage',
      desc: 'Launch creative and campaigns across the channels where your customers are.',
    },
    {
      letter: 'E',
      stepNum: '04',
      title: 'Elevate',
      desc: 'Test, learn and scale what works. Cut what doesn’t. Weekly.',
    },
    {
      letter: 'N',
      stepNum: '05',
      title: 'Nurture',
      desc: 'Transparent reporting and a long-term partnership that keeps growing.',
    },
  ]

  return (
    <div
      id="process"
      className="w-full lg:w-[1200px] shrink-0 min-h-[580px] flex flex-col justify-between p-8 sm:p-12 rounded-3xl bg-[#091D13]/90 border border-[#1E4530]/60 backdrop-blur-md shadow-2xl relative"
    >
      {/* Header */}
      <div className="mb-8">
        <span className="text-xs tracking-[0.25em] font-sans font-semibold text-[#8FA98F] uppercase block mb-3">
          03 — HOW WE WORK
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F4EE] font-normal">
          The <span className="italic text-[#A7C7AC]">G.R.E.E.N.</span> process
        </h2>
      </div>

      {/* 5 Sequential Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-auto">
        {steps.map((st, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-[#0D261A]/80 border border-[#1E4731]/70 hover:border-[#33704E] hover:bg-[#102F21] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Giant Letter Watermark */}
            <span className="font-serif text-6xl sm:text-7xl font-light text-[#F5F4EE]/10 group-hover:text-[#A7C7AC]/20 transition-colors duration-300 absolute -top-2 right-2 select-none pointer-events-none">
              {st.letter}
            </span>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#8FA98F]">
                  STEP <strong className="text-[#F5F4EE]">{st.stepNum}</strong>
                </span>
                <span className="w-2 h-2 rounded-full bg-[#3D7C57] group-hover:bg-[#5FB88C] transition-colors" />
              </div>

              <h3 className="font-serif text-2xl text-[#F5F4EE] font-medium mb-3 group-hover:text-white transition-colors">
                {st.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#CCDACC] leading-relaxed font-sans font-light">
                {st.desc}
              </p>
            </div>

            {/* Bottom Progress Bar indicator */}
            <div className="w-full bg-[#153826] h-1 rounded-full mt-6 overflow-hidden">
              <div
                className="bg-[#5FB88C] h-full rounded-full transition-all duration-500"
                style={{ width: `${((i + 1) / 5) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom info */}
      <div className="mt-8 pt-4 border-t border-[#1C412C]/60 flex items-center justify-between text-xs text-[#5C7D64] font-mono">
        <span>02 SERVICES</span>
        <span className="text-[#8FA98F] font-bold">03 THE G.R.E.E.N. PROCESS</span>
        <span>04 SELECTED WORK</span>
      </div>
    </div>
  )
}
