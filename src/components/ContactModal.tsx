import React, { useState } from 'react'
import { X, CheckCircle2, Send } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Performance Ads',
    message: '',
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0B2117] border border-[#24543A] p-8 shadow-2xl text-[#F5F4EE] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-6 right-6 w-9 h-9 rounded-full bg-[#0E281C] border border-[#1E4C33] flex items-center justify-center text-[#CCDACC] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 flex flex-col items-center text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-[#5FB88C] animate-bounce" />
            <h3 className="font-serif text-3xl text-white">We've received your request!</h3>
            <p className="text-sm text-[#CCDACC] max-w-xs font-sans">
              Our team will review your project details and reach out within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="w-11 h-11 rounded-2xl bg-[#C9D8B0] p-1.5 inline-flex items-center justify-center mb-3 shadow-md">
                <img
                  src="/logo_image/gta-symbol-xanh-128.png"
                  alt="Green Tree Agency"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </span>
              <span className="text-xs font-mono tracking-widest text-[#8FA98F] uppercase block mb-1">
                LET'S TALK
              </span>
              <h3 className="font-serif text-3xl font-normal text-[#F5F4EE]">
                Start a <span className="italic text-[#A7C7AC]">project</span>
              </h3>
              <p className="text-xs text-[#CCDACC] mt-1">
                Tell us about your brand and what growth looks like for you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-sans text-[#8FA98F] mb-1">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#081710] border border-[#1C412C] text-sm text-[#F5F4EE] placeholder-[#4F7359] focus:outline-none focus:border-[#5FB88C] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans text-[#8FA98F] mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#081710] border border-[#1C412C] text-sm text-[#F5F4EE] placeholder-[#4F7359] focus:outline-none focus:border-[#5FB88C] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans text-[#8FA98F] mb-1">Company / Brand</label>
                  <input
                    type="text"
                    placeholder="Your brand name"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#081710] border border-[#1C412C] text-sm text-[#F5F4EE] placeholder-[#4F7359] focus:outline-none focus:border-[#5FB88C] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans text-[#8FA98F] mb-1">Primary Interest</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#081710] border border-[#1C412C] text-sm text-[#F5F4EE] focus:outline-none focus:border-[#5FB88C] transition-colors"
                >
                  <option value="Performance Ads">01 — Performance Ads (Meta, Google, TikTok)</option>
                  <option value="Brand & Strategy">02 — Brand & Strategy</option>
                  <option value="Content & Social">03 — Content & Social</option>
                  <option value="Web & Landing Pages">04 — Web & Landing Pages</option>
                  <option value="SEO & Analytics">05 — SEO & Analytics</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-sans text-[#8FA98F] mb-1">Tell us about your goals</label>
                <textarea
                  rows={3}
                  placeholder="Current numbers, target markets, timeline..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl bg-[#081710] border border-[#1C412C] text-sm text-[#F5F4EE] placeholder-[#4F7359] focus:outline-none focus:border-[#5FB88C] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full py-3 rounded-full bg-[#F5F4EE] text-[#091710] font-sans font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white hover:shadow-lg transition-all active:scale-98 mt-2"
              >
                <span>Send discovery request</span>
                <Send className="w-4 h-4 text-[#091710]" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
