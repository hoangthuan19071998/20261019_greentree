import React from 'react'

interface NavbarProps {
  onOpenContact: () => void
  activeSection?: string
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-[#091710]/85 border-b border-[#1A3828]/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-[#2B543D] flex items-center justify-center bg-[#0D261A] transition-transform duration-500 group-hover:rotate-45">
            <svg
              className="w-6 h-6 text-[#9BB89E]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="9" strokeDasharray="3 2" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2.5" fill="currentColor" />
            </svg>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-2xl tracking-tight text-[#F5F4EE] font-medium group-hover:text-white transition-colors">
              Green Tree
            </span>
            <span className="text-[10px] tracking-[0.3em] font-sans font-semibold text-[#8FA98F]">
              AGENCY
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-10">
          <a
            href="#services"
            className="text-sm font-sans font-medium text-[#CCDACC] hover:text-[#F5F4EE] transition-colors"
          >
            Services
          </a>
          <a
            href="#process"
            className="text-sm font-sans font-medium text-[#CCDACC] hover:text-[#F5F4EE] transition-colors"
          >
            Process
          </a>
          <a
            href="#work"
            className="text-sm font-sans font-medium text-[#CCDACC] hover:text-[#F5F4EE] transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-sm font-sans font-medium text-[#CCDACC] hover:text-[#F5F4EE] transition-colors"
          >
            About
          </a>
        </nav>

        {/* Action Button: Start a project */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="cursor-pointer group relative inline-flex items-center gap-3 bg-[#F5F4EE] text-[#091710] px-5 py-2.5 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-emerald-950/50 active:scale-95"
          >
            <span>Start a project</span>
            <div className="w-6 h-6 rounded-full bg-[#091710] flex items-center justify-center text-[#F5F4EE] transition-transform duration-300 group-hover:scale-105">
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="9" strokeDasharray="2 1" />
                <path d="M12 7v5l3 3" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}
