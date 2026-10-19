import type { FC } from 'react'
// import React

interface NavbarProps {
  progressRef?: React.RefObject<HTMLDivElement | null>
}

export const Navbar: FC<NavbarProps> = ({ progressRef }) => {
  return (
    <header className="sticky top-0 z-20 bg-[#14261E]">
      <div
        className="pad mx-auto flex items-center justify-between gap-6"
        style={{
          maxWidth: '1440px',
          padding: '0 56px',
          height: '80px',
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#top"
          className="group flex items-center gap-3 no-underline text-[#F2F1EA]"
        >
          <span className="w-9 h-9 rounded-full bg-[#C9D8B0] flex items-center justify-center p-1 shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105">
            <img
              src="/logo_image/gta-symbol-xanh-128.png"
              alt="Green Tree Agency Logo"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </span>
          <span className="serif text-[26px] tracking-[0.01em]">Green Tree</span>
          <span className="text-[11px] tracking-[0.22em] uppercase text-[#C9D8B0] mt-1">
            Agency
          </span>
        </a>

        {/* Navigation links */}
        <nav
          className="navlinks hidden md:flex items-center"
          aria-label="Main"
          style={{ gap: '36px' }}
        >
          <a className="navlink" href="#services">
            Services
          </a>
          <a className="navlink" href="#process">
            Process
          </a>
          <a className="navlink" href="#work">
            Work
          </a>
          <a className="navlink" href="#about">
            About
          </a>
        </nav>

        {/* CTA Button */}
        <a className="btn btn-light hdr-btn hidden sm:inline-flex" href="#contact">
          <span className="btn-fill" />
          <span>Start a project</span>
          <span className="btn-ring">
            <svg
              className="ring-ico"
              viewBox="0 0 100 100"
              width="26"
              height="26"
              aria-hidden="true"
              style={{ strokeWidth: 4.5 }}
            >
              <use href="#gt-ring" />
            </svg>
          </span>
        </a>
      </div>

      {/* Reading Progress Line */}
      <div
        className="progress"
        ref={progressRef}
        style={{ height: '2px', background: '#C9D8B0' }}
      />
    </header>
  )
}

