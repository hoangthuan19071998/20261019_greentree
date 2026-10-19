import type { FC, RefObject } from 'react'

interface HeroSectionProps {
  ringRef?: RefObject<SVGSVGElement | null>
}

export const HeroSection: FC<HeroSectionProps> = ({ ringRef }) => {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        background: '#14261E',
        color: '#F2F1EA',
        overflow: 'hidden',
      }}
    >
      {/* Animated Rotating Tree Ring on Scroll - Anchored to 1440px grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1440px',
          height: '100%',
          pointerEvents: 'none',
          overflow: 'visible',
          zIndex: 1,
        }}
      >
        <svg
          className="hero-ring"
          ref={ringRef}
          width="980"
          height="980"
          viewBox="0 0 980 980"
          fill="none"
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '-260px',
            top: '40px',
            opacity: 0.55,
            boxShadow: 'none',
            transformOrigin: '490px 490px',
          }}
        >
          <circle cx="490" cy="490" r="480" stroke="#2E4D3E" strokeWidth="1" />
          <circle cx="478" cy="500" r="420" stroke="#2E4D3E" strokeWidth="1" />
          <circle cx="496" cy="486" r="356" stroke="#2E4D3E" strokeWidth="1" />
          <circle cx="484" cy="496" r="300" stroke="#3B5E4C" strokeWidth="1" />
          <circle cx="492" cy="488" r="236" stroke="#3B5E4C" strokeWidth="1" />
          <circle cx="486" cy="494" r="178" stroke="#4A6E5A" strokeWidth="1" />
          <circle cx="494" cy="490" r="118" stroke="#4A6E5A" strokeWidth="1" />
          <circle cx="490" cy="492" r="62" stroke="#6B8B6E" strokeWidth="1" />
          <circle cx="490" cy="490" r="8" fill="#C9D8B0" />
        </svg>
      </div>

      {/* Hero Grid */}
      <div
        className="pad two-col hero-grid"
        style={{
          position: 'relative',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '120px 56px 230px',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
          gap: '48px',
          alignItems: 'end',
          minHeight: '820px',
        }}
      >
        {/* Acronym with staggered rise */}
        <h1
          className="serif hero-letters"
          style={{
            margin: 0,
            fontWeight: 400,
            fontSize: '132px',
            lineHeight: 0.94,
            letterSpacing: '-.01em',
          }}
        >
          <span className="hl">
            <span>
              G
              <em
                className="word"
                style={{
                  fontSize: '.34em',
                  fontStyle: 'italic',
                  color: '#C9D8B0',
                  marginLeft: '10px',
                }}
              >
                round
              </em>
            </span>
          </span>
          <span className="hl">
            <span>
              R
              <em
                className="word"
                style={{
                  fontSize: '.34em',
                  fontStyle: 'italic',
                  color: '#C9D8B0',
                  marginLeft: '10px',
                }}
              >
                oot
              </em>
            </span>
          </span>
          <span className="hl">
            <span>
              E
              <em
                className="word"
                style={{
                  fontSize: '.34em',
                  fontStyle: 'italic',
                  color: '#C9D8B0',
                  marginLeft: '10px',
                }}
              >
                ngage
              </em>
            </span>
          </span>
          <span className="hl">
            <span>
              E
              <em
                className="word"
                style={{
                  fontSize: '.34em',
                  fontStyle: 'italic',
                  color: '#C9D8B0',
                  marginLeft: '10px',
                }}
              >
                levate
              </em>
            </span>
          </span>
          <span className="hl">
            <span>
              N
              <em
                className="word"
                style={{
                  fontSize: '.34em',
                  fontStyle: 'italic',
                  color: '#C9D8B0',
                  marginLeft: '10px',
                }}
              >
                urture
              </em>
            </span>
          </span>
        </h1>

        {/* Hero Side */}
        <div
          className="hero-side"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            paddingBottom: '16px',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '12px',
              letterSpacing: '.24em',
              textTransform: 'uppercase',
              color: '#C9D8B0',
            }}
          >
            Digital Growth Studio
          </p>
          <p
            className="serif"
            style={{
              margin: 0,
              fontSize: '40px',
              lineHeight: 1.12,
              fontStyle: 'italic',
            }}
          >
            Brands aren't built overnight. They're grown.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#CDD3CB',
              maxWidth: '420px',
            }}
          >
            Performance advertising, content and digital strategy {'\u2014'} rooted in
            data, cultivated with care.
          </p>
        </div>
      </div>

      {/* Scroll Cue */}
      <a
        className="scroll-cue"
        href="#about"
        aria-label="Scroll down — the next sections move sideways"
      >
        <span className="cue-line" />
        <span className="cue-row">
          <svg
            className="ring-ico"
            viewBox="0 0 100 100"
            width="96"
            height="96"
            aria-hidden="true"
            style={{ strokeWidth: 2.2 }}
          >
            <use href="#gt-ring" />
          </svg>
          <span className="cue-h" aria-hidden="true">
            <span className="cue-h-line" />
            <span className="cue-dot" />
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 3 L12 9 L5 15"
                stroke="#C9D8B0"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="cue-h cue-h-left" aria-hidden="true">
            <span className="cue-h-line" />
          </span>
        </span>
        <span className="cue-label">
          Scroll <span style={{ color: '#C9D8B0' }}>{'\u00B7'}</span> the story moves
          sideways <span style={{ color: '#C9D8B0' }}>{'\u2192'}</span>
        </span>
      </a>
    </section>
  )
}
