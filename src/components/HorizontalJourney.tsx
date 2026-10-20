import type { FC, RefObject } from "react";

interface HorizontalJourneyProps {
  hzRef: RefObject<HTMLDivElement | null>;
  pinRef: RefObject<HTMLDivElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
  hzProgRef: RefObject<HTMLSpanElement | null>;
}

const tones = [
  { bg: "#E4E5DA", fg: "#14261E", ph: "#CFD3C3", line: "#9AA690" },
  { bg: "#1F3A2E", fg: "#F2F1EA", ph: "#2A4A3B", line: "#4A6E5A" },
  { bg: "#D6DCC8", fg: "#14261E", ph: "#C2CBB0", line: "#8E9C82" },
  { bg: "#14261E", fg: "#F2F1EA", ph: "#1F3A2E", line: "#3B5E4C" },
  { bg: "#ECEBE2", fg: "#14261E", ph: "#D9DACC", line: "#A3AA98" },
];

const servicesData = [
  {
    num: "01",
    kicker: "Core",
    title: "Performance Ads",
    desc: "Meta, Google and TikTok campaigns built around your margins — not vanity metrics. Planned, tested and optimised weekly.",
    tags: ["Meta Ads", "Google Ads", "TikTok Ads"],
    image: "/images/service-performance-ads.jpg",
  },
  {
    num: "02",
    kicker: "Foundation",
    title: "Brand & Strategy",
    desc: "Positioning, audience insight and a clear message — the roots every channel grows from.",
    tags: ["Positioning", "Audience research", "Messaging"],
    image: "/images/service-brand-strategy.jpg",
  },
  {
    num: "03",
    kicker: "Canopy",
    title: "Content & Social",
    desc: "Creative that stops the scroll and stays on brand, from ad creatives to always-on social.",
    tags: ["Ad creative", "Short video", "Social"],
    image: "/images/service-content-social.jpg",
  },
  {
    num: "04",
    kicker: "Ground",
    title: "Web & Landing Pages",
    desc: "Fast, considered pages designed to turn paid traffic into customers.",
    tags: ["Landing pages", "CRO", "Tracking"],
    image: "/images/service-web-landing.jpg",
  },
  {
    num: "05",
    kicker: "Long game",
    title: "SEO & Analytics",
    desc: "Organic growth and honest reporting, so every decision is rooted in data.",
    tags: ["SEO", "GA4", "Dashboards"],
    image: "/images/service-seo-analytics.jpg",
  },
].map((s, i) => ({ ...s, ...tones[i] }));

export const HorizontalJourney: FC<HorizontalJourneyProps> = ({
  hzRef,
  pinRef,
  trackRef,
  hzProgRef,
}) => {
  return (
    <section id="journey" className="hz" ref={hzRef}>
      <div className="hz-pin" ref={pinRef}>
        <div className="hz-track" ref={trackRef}>
          {/* Panel 1: Who we are */}
          <div
            id="about"
            className="hz-panel pad p-about"
            style={{
              width: "100cqw",
              maxWidth: "1440px",
              padding: "64px 56px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "48px",
              background: "#F2F1EA",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "12px",
                letterSpacing: ".24em",
                textTransform: "uppercase",
                color: "#5B635D",
              }}
            >
              01 {"\u2014"} Who we are
            </p>
            <p
              className="serif big"
              style={{
                margin: 0,
                fontSize: "68px",
                lineHeight: 1.06,
                fontWeight: 400,
                maxWidth: "1180px",
                color: "#14261E",
              }}
            >
              We're a performance-led digital agency in Da Nang that grows
              brands the way trees grow {"\u2014"}{" "}
              <em style={{ color: "#3E6B52" }}>
                patiently, from the roots up.
              </em>
            </p>
            <div
              className="two-col"
              style={{
                display: "grid",
                gridTemplateColumns: "1.05fr 0.95fr",
                gap: "56px",
                alignItems: "center",
                borderTop: "1px solid #C9CBBE",
                paddingTop: "36px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "17px",
                    lineHeight: 1.75,
                    color: "#3E4740",
                  }}
                >
                  Every campaign starts below the surface: understanding your
                  audience, your market and what growth actually means for your
                  business. Then we plant the right channels and tend them until
                  they bear fruit.
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "16px",
                    lineHeight: 1.75,
                    color: "#5B635D",
                  }}
                >
                  Clear process. Measurable results. Honest reporting. Always
                  curious.
                </p>
                <div style={{ paddingTop: "6px" }}>
                  <a className="btn btn-dark" href="#contact">
                    <span className="btn-fill" />
                    <span>Book a call</span>
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
              </div>

              <div className="about-img-box">
                <img
                  src="/images/about-studio-collab.jpg"
                  alt="Green Tree Agency Studio Collaboration"
                  loading="lazy"
                  decoding="async"
                />
                <div className="about-badge">
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#C9D8B0",
                      display: "inline-block",
                    }}
                  />
                  <span>Da Nang Studio &bull; Est. 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Panel 2: Services Intro */}
          <div
            id="services"
            className="hz-panel pad p-intro"
            style={{
              width: "520px",
              padding: "64px 56px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "32px",
              background: "#F2F1EA",
              borderLeft: "1px solid #C9CBBE",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "12px",
                letterSpacing: ".24em",
                textTransform: "uppercase",
                color: "#5B635D",
              }}
            >
              02 {"\u2014"} Services
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              <h2
                className="serif"
                style={{
                  margin: 0,
                  fontSize: "88px",
                  lineHeight: 0.95,
                  fontWeight: 400,
                  color: "#14261E",
                }}
              >
                What we <em style={{ color: "#3E6B52" }}>grow</em>
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: "17px",
                  lineHeight: 1.7,
                  color: "#3E4740",
                  maxWidth: "360px",
                }}
              >
                Five disciplines, one root system. Each one feeds the others.
              </p>
            </div>
            <p
              className="hz-only"
              style={{
                margin: 0,
                fontSize: "13px",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "#5B635D",
              }}
            ></p>
          </div>

          {/* Panels 3 to 7: 5 Service Cards */}
          {servicesData.map((s) => (
            <div
              key={s.num}
              className="hz-panel p-card"
              style={{
                width: "760px",
                padding: "48px 16px",
                background: "#F2F1EA",
              }}
            >
              <article
                style={{
                  height: "100%",
                  minHeight: "560px",
                  borderRadius: "6px",
                  overflow: "hidden",
                  background: s.bg,
                  color: s.fg,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="ph"
                  style={{
                    flex: 1,
                    minHeight: "220px",
                    background: s.ph,
                  }}
                >
                  <img
                    className="service-img"
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="service-overlay" />
                  <svg
                    className="hz-par"
                    viewBox="0 0 600 400"
                    preserveAspectRatio="xMidYMid slice"
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 2,
                    }}
                  >
                    <circle
                      cx="420"
                      cy="220"
                      r="240"
                      fill="none"
                      stroke={s.line}
                      strokeWidth="1"
                    />
                    <circle
                      cx="410"
                      cy="228"
                      r="176"
                      fill="none"
                      stroke={s.line}
                      strokeWidth="1"
                    />
                    <circle
                      cx="424"
                      cy="214"
                      r="112"
                      fill="none"
                      stroke={s.line}
                      strokeWidth="1"
                    />
                    <circle
                      cx="416"
                      cy="222"
                      r="52"
                      fill="none"
                      stroke={s.line}
                      strokeWidth="1"
                    />
                  </svg>
                </div>
                <div
                  className="card-body"
                  style={{
                    padding: "36px 40px 40px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "13px",
                      letterSpacing: ".14em",
                    }}
                  >
                    <span>{s.num} / 05</span>
                    <span style={{ textTransform: "uppercase" }}>
                      {s.kicker}
                    </span>
                  </div>
                  <h3
                    className="serif"
                    style={{
                      margin: 0,
                      fontSize: "48px",
                      fontWeight: 400,
                      lineHeight: 1,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="card-desc"
                    style={{
                      margin: 0,
                      fontSize: "16px",
                      lineHeight: 1.65,
                      opacity: 0.86,
                      maxWidth: "560px",
                    }}
                  >
                    {s.desc}
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                  >
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: "13px",
                          padding: "7px 14px",
                          borderRadius: "999px",
                          border: "1px solid currentColor",
                          opacity: 0.8,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))}

          {/* End spacing panel */}
          <div
            className="hz-panel hz-end"
            style={{ width: "40px", background: "#F2F1EA" }}
          />
        </div>

        {/* Horizontal Progress Bar */}
        <div
          className="hz-bar pad"
          style={{
            height: "56px",
            background: "#14261E",
            color: "#A9BBA6",
            padding: "0 56px",
            display: "flex",
            alignItems: "center",
            gap: "32px",
            fontSize: "12px",
            letterSpacing: ".18em",
            textTransform: "uppercase",
          }}
        >
          <span>01 Who we are</span>
          <span
            style={{
              flex: 1,
              height: "1px",
              background: "#2E4D3E",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <span
              className="hz-progress"
              ref={hzProgRef}
              style={{
                position: "absolute",
                inset: 0,
                background: "#C9D8B0",
              }}
            />
          </span>
          <span>02 Services</span>
        </div>
      </div>
    </section>
  );
};
