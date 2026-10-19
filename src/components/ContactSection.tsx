import React from 'react'
import { Mail, ArrowUp, Calendar } from 'lucide-react'

interface ContactSectionProps {
  onOpenContact: () => void
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      id="contact"
      className="w-full lg:w-[850px] shrink-0 min-h-[580px] flex flex-col justify-between p-8 sm:p-12 rounded-3xl bg-[#091D13] border border-[#1E4530]/80 backdrop-blur-md shadow-2xl relative overflow-hidden"
    >
      <div>
        <span className="text-xs tracking-[0.25em] font-sans font-semibold text-[#8FA98F] uppercase block mb-4">
          04 — LET'S TALK
        </span>

        {/* Heading */}
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F4EE] font-normal leading-[1.1] mb-8">
          Let's plant<br />
          <span className="italic text-[#A7C7AC] font-light">something.</span>
        </h2>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
          {/* Email link */}
          <a
            href="mailto:hello@greentree.agency"
            className="group flex items-center gap-3 px-5 py-3 rounded-full bg-[#0E281C] border border-[#214E35] text-[#F5F4EE] hover:border-[#4B8F68] transition-all"
          >
            <Mail className="w-4 h-4 text-[#8FA98F] group-hover:text-[#A7C7AC] transition-colors" />
            <span className="font-mono text-sm tracking-wide">
              hello@greentree.agency
            </span>
          </a>

          {/* Book discovery call button */}
          <button
            onClick={onOpenContact}
            className="cursor-pointer group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#F5F4EE] text-[#091710] font-sans font-semibold text-sm transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-emerald-950/40 active:scale-95"
          >
            <Calendar className="w-4 h-4 text-[#091710]" />
            <span>Book a discovery call</span>
          </button>
        </div>
      </div>

      {/* Section Footer */}
      <footer className="pt-10 mt-12 border-t border-[#1C412C]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs text-[#8FA98F] font-sans">
        <div>
          <span>© 2026 Green Tree Agency. Da Nang, Vietnam</span>
        </div>

        {/* Social navigation */}
        <nav aria-label="Social" className="flex items-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5F4EE] transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5F4EE] transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5F4EE] transition-colors"
          >
            LinkedIn
          </a>
        </nav>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="cursor-pointer group flex items-center gap-1.5 text-[#A7C7AC] hover:text-[#F5F4EE] transition-colors ml-auto sm:ml-0"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </footer>
    </div>
  )
}
