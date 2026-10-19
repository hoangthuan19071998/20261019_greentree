import type { FC } from 'react'

const steps = [
  {
    letter: 'G',
    num: '01',
    name: 'Ground',
    desc: 'We audit your market, competitors and current numbers to find solid footing.',
    delay: '',
  },
  {
    letter: 'R',
    num: '02',
    name: 'Root',
    desc: 'Strategy, audience and measurable goals \u2014 agreed before a single \u0111\u1ED3ng is spent.',
    delay: 'rv-d1',
  },
  {
    letter: 'E',
    num: '03',
    name: 'Engage',
    desc: 'Launch creative and campaigns across the channels where your customers are.',
    delay: 'rv-d2',
  },
  {
    letter: 'E',
    num: '04',
    name: 'Elevate',
    desc: 'Test, learn and scale what works. Cut what doesn\u2019t. Weekly.',
    delay: 'rv-d1',
  },
  {
    letter: 'N',
    num: '05',
    name: 'Nurture',
    desc: 'Transparent reporting and a long-term partnership that keeps growing.',
    delay: 'rv-d2',
  },
]

export const ProcessSection: FC = () => {
  return (
    <section id="process" style={{ background: '#1F3A2E', color: '#F2F1EA' }}>
      <div
        className="pad"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '140px 56px',
        }}
      >
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '24px',
            flexWrap: 'wrap',
            marginBottom: '64px',
          }}
        >
          <h2
            className="serif rv"
            style={{
              margin: 0,
              fontSize: '72px',
              lineHeight: 0.98,
              fontWeight: 400,
            }}
          >
            The <em style={{ color: '#C9D8B0' }}>G.R.E.E.N.</em> process
          </h2>
          <p
            className="rv"
            style={{
              margin: 0,
              fontSize: '12px',
              letterSpacing: '.24em',
              textTransform: 'uppercase',
              color: '#C9D8B0',
            }}
          >
            03 {'\u2014'} How we work
          </p>
        </div>

        {/* 5-Column Grid */}
        <div
          className="five-col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
            gap: '16px',
          }}
        >
          {steps.map((p) => (
            <div
              key={p.num}
              className={`rv ${p.delay}`}
              style={{
                minHeight: '440px',
                border: '1px solid #3B5E4C',
                borderRadius: '6px',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <div
                style={{
                  height: '140px',
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <span
                  className="serif"
                  style={{
                    fontSize: '140px',
                    lineHeight: 0.8,
                    color: '#C9D8B0',
                    display: 'block',
                  }}
                >
                  {p.letter}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginTop: '28px',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    letterSpacing: '.2em',
                    textTransform: 'uppercase',
                    color: '#A9BBA6',
                    display: 'block',
                  }}
                >
                  Step {p.num}
                </span>
                <h3
                  className="serif"
                  style={{
                    margin: 0,
                    fontSize: '34px',
                    fontWeight: 400,
                    lineHeight: 1.15,
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: '#CDD3CB',
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

