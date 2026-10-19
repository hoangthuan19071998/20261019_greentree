import React, { useState } from 'react'
import { Sparkles, BarChart3, Globe, Compass, Film } from 'lucide-react'

export const ServicesSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(0)

  const services = [
    {
      num: '01',
      total: '05',
      badge: 'CORE',
      title: 'Performance Ads',
      desc: 'Meta, Google and TikTok campaigns built around your margins — not vanity metrics. Planned, tested and optimised weekly.',
      tags: ['Meta Ads', 'Google Ads', 'TikTok Ads'],
      icon: BarChart3,
      accent: 'from-emerald-500/20 to-teal-500/5',
      metric: 'Average 4.2x ROAS'
    },
    {
      num: '02',
      total: '05',
      badge: 'FOUNDATION',
      title: 'Brand & Strategy',
      desc: 'Positioning, audience insight and a clear message — the roots every channel grows from.',
      tags: ['Positioning', 'Audience research', 'Messaging'],
      icon: Compass,
      accent: 'from-lime-500/20 to-emerald-500/5',
      metric: 'Deep Market Positioning'
    },
    {
      num: '03',
      total: '05',
      badge: 'CANOPY',
      title: 'Content & Social',
      desc: 'Creative that stops the scroll and stays on brand, from ad creatives to always-on social.',
      tags: ['Ad creative', 'Short video', 'Social'],
      icon: Film,
      accent: 'from-teal-500/20 to-green-500/5',
      metric: 'High CTR Video Creative'
    },
    {
      num: '04',
      total: '05',
      badge: 'GROUND',
      title: 'Web & Landing Pages',
      desc: 'Fast, considered pages designed to turn paid traffic into customers.',
      tags: ['Landing pages', 'CRO', 'Tracking'],
      icon: Globe,
      accent: 'from-emerald-600/20 to-lime-600/5',
      metric: 'Sub-second Load Times'
    },
    {
      num: '05',
      total: '05',
      badge: 'LONG GAME',
      title: 'SEO & Analytics',
      desc: 'Organic growth and honest reporting, so every decision is rooted in data.',
      tags: ['SEO', 'GA4', 'Dashboards'],
      icon: Sparkles,
      accent: 'from-green-500/20 to-emerald-500/5',
      metric: 'Full Attribution Models'
    },
  ]

  return (
    <div
      id="services"
      className="w-full lg:w-[1300px] shrink-0 min-h-[580px] flex flex-col justify-between p-8 sm:p-12 rounded-3xl bg-[#0B1E15]/90 border border-[#1E4530]/60 backdrop-blur-md shadow-2xl relative"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <span className="text-xs tracking-[0.25em] font-sans font-semibold text-[#8FA98F] uppercase block mb-3">
            02 — SERVICES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F4EE] font-normal">
            What we <span className="italic text-[#A7C7AC]">grow</span>
          </h2>
          <p className="text-sm sm:text-base text-[#CCDACC] font-sans font-light mt-2 max-w-lg">
            Five disciplines, one root system. Each one feeds the others.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#8FA98F]">
          <span>KEEP SCROLLING</span>
          <span className="text-sm">→</span>
        </div>
      </div>

      {/* 5 Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {services.map((svc, index) => {
          const Icon = svc.icon
          const isSelected = activeCard === index

          return (
            <article
              key={svc.num}
              onMouseEnter={() => setActiveCard(index)}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden group ${
                isSelected
                  ? 'bg-[#102C1E] border-[#387352] shadow-xl shadow-black/40 -translate-y-1'
                  : 'bg-[#0E251A]/60 border-[#1C412C]/60 hover:border-[#2D5E41] hover:bg-[#0E251A]'
              }`}
            >
              {/* Subtle top gradient glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${svc.accent} opacity-40 pointer-events-none transition-opacity duration-300 group-hover:opacity-70`}
              />

              <div className="relative z-10">
                {/* Visual Header / Mockup preview */}
                <div className="w-full h-24 rounded-xl bg-[#091710] border border-[#1B3E2B] mb-5 flex flex-col items-center justify-center p-3 text-center overflow-hidden relative">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8FA98F_1px,transparent_1px)] [background-size:8px_8px]" />
                  <Icon className="w-6 h-6 text-[#A7C7AC] mb-1.5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-[10px] font-mono text-[#6A8F73] uppercase tracking-wider">
                    {svc.metric}
                  </span>
                </div>

                {/* Number & Badge */}
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-[#8FA98F]">
                    <strong className="text-[#F5F4EE]">{svc.num}</strong> / {svc.total}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-sans font-semibold bg-[#163B28] text-[#A7C7AC] border border-[#245238]">
                    {svc.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-[#F5F4EE] font-medium mb-3 group-hover:text-white transition-colors">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#CCDACC] leading-relaxed font-sans font-light line-clamp-4">
                  {svc.desc}
                </p>
              </div>

              {/* Tags / Pills */}
              <div className="relative z-10 pt-5 mt-4 border-t border-[#1C412C]/60 flex flex-wrap gap-1.5">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-sans px-2 py-0.5 rounded-full bg-[#08160F] text-[#8FA98F] border border-[#193B27]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </div>

      {/* Bottom status bar */}
      <div className="mt-8 pt-4 border-t border-[#1C412C]/60 flex items-center justify-between text-xs text-[#5C7D64] font-mono">
        <span>01 WHO WE ARE</span>
        <span className="text-[#8FA98F] font-bold">02 SERVICES</span>
        <span>03 PROCESS</span>
      </div>
    </div>
  )
}
