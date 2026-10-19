import React from 'react'
import { ArrowUpRight, TrendingUp } from 'lucide-react'

export const SelectedWorkSection: React.FC = () => {
  const projects = [
    {
      client: '[Client name]',
      industry: 'Direct-to-Consumer Goods',
      channel: 'Meta Ads',
      roas: '4.8x',
      cpa: '−38%',
      desc: 'Full-funnel creative testing & dynamic scaling across Facebook & Instagram Reels.',
      color: 'from-emerald-600/30 via-teal-700/10 to-transparent'
    },
    {
      client: '[Client name]',
      industry: 'Hospitality & Luxury Travel',
      channel: 'Google Ads',
      roas: '5.4x',
      cpa: '−44%',
      desc: 'High-intent search & Performance Max capture generating direct qualified bookings.',
      color: 'from-teal-600/30 via-green-700/10 to-transparent'
    },
    {
      client: '[Client name]',
      industry: 'F&B & Lifestyle Retail',
      channel: 'TikTok Ads',
      roas: '3.9x',
      cpa: '−31%',
      desc: 'Viral hook video creative driving rapid viral adoption and new customer trial.',
      color: 'from-lime-600/30 via-emerald-700/10 to-transparent'
    },
  ]

  return (
    <div
      id="work"
      className="w-full lg:w-[1100px] shrink-0 min-h-[580px] flex flex-col justify-between p-8 sm:p-12 rounded-3xl bg-[#0B2117]/90 border border-[#1E4530]/60 backdrop-blur-md shadow-2xl relative"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-xs tracking-[0.25em] font-sans font-semibold text-[#8FA98F] uppercase block mb-3">
            PORTFOLIO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F4EE] font-normal">
            Selected <span className="italic text-[#A7C7AC]">work</span>
          </h2>
        </div>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-sm font-sans font-medium text-[#A7C7AC] hover:text-[#F5F4EE] transition-colors"
        >
          <span>All projects</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* 3 Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-[#0D281C] border border-[#1F4C33] hover:border-[#387B54] hover:bg-[#103123] transition-all duration-300 flex flex-col justify-between group"
          >
            {/* Visual Box */}
            <div className="w-full h-36 rounded-xl bg-[#081710] border border-[#1D452E] mb-5 p-4 flex flex-col justify-between overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} pointer-events-none`} />
              
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-wider text-[#7FA685] bg-[#0E281C]/90 px-2 py-0.5 rounded border border-[#1B422B]">
                  [CAMPAIGN VISUAL]
                </span>
                <span className="text-xs font-sans font-semibold text-[#CCDACC]">
                  {proj.channel}
                </span>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-emerald-400">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs font-mono font-medium">Verified Performance</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-xl text-[#F5F4EE] font-medium group-hover:text-white transition-colors">
                  {proj.client}
                </h3>
              </div>
              <p className="text-xs text-[#8FA98F] font-sans mb-4">
                {proj.industry}
              </p>
              <p className="text-xs text-[#CCDACC] leading-relaxed font-sans font-light mb-5">
                {proj.desc}
              </p>
            </div>

            {/* Metrics */}
            <div className="pt-4 border-t border-[#1C412C] grid grid-cols-2 gap-2 text-center">
              <div className="bg-[#091B12] p-2 rounded-lg border border-[#1A3D29]">
                <span className="text-base font-bold text-[#F5F4EE] font-mono block">
                  {proj.roas}
                </span>
                <span className="text-[10px] text-[#8FA98F] tracking-wide font-sans">
                  ROAS
                </span>
              </div>
              <div className="bg-[#091B12] p-2 rounded-lg border border-[#1A3D29]">
                <span className="text-base font-bold text-[#5FB88C] font-mono block">
                  {proj.cpa}
                </span>
                <span className="text-[10px] text-[#8FA98F] tracking-wide font-sans">
                  CPA
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom info */}
      <div className="mt-8 pt-4 border-t border-[#1C412C]/60 flex items-center justify-between text-xs text-[#5C7D64] font-mono">
        <span>03 PROCESS</span>
        <span className="text-[#8FA98F] font-bold">04 SELECTED WORK</span>
        <span>05 CONTACT</span>
      </div>
    </div>
  )
}
