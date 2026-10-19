import type { FC } from "react";

export const ContactSection: FC = () => {
  return (
    <section id="contact" style={{ background: "#14261E", color: "#F2F1EA" }}>
      <div
        className="pad"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "160px 56px 120px",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
        }}
      >
        <p
          className="rv"
          style={{
            margin: 0,
            fontSize: "12px",
            letterSpacing: ".24em",
            textTransform: "uppercase",
            color: "#C9D8B0",
          }}
        >
          04 {"\u2014"} Let's talk
        </p>

        <h2
          className="serif big rv"
          style={{
            margin: 0,
            fontSize: "140px",
            lineHeight: 0.92,
            fontWeight: 400,
          }}
        >
          Let's plant
          <br />
          <em style={{ color: "#C9D8B0" }}>something.</em>
        </h2>

        <div
          className="rv rv-d1 contact-row"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "32px",
            borderTop: "1px solid #3B5E4C",
            paddingTop: "40px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "36px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:connect@greentreeadv.com"
              className="serif contact-link contact-email"
              style={{
                fontSize: "36px",
                textDecoration: "none",
              }}
            >
              [connect@greentreeadv.com]
            </a>

            <a
              href="tel:0939535958"
              className="serif contact-link contact-phone"
              style={{
                fontSize: "36px",
                textDecoration: "none",
              }}
            >
              [0939 535 958]
            </a>
          </div>

          <div className="contact-cta-wrap">
            <a
              className="ring-cta"
              href="https://zalo.me/2351093501254748295"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="ring-big"
                style={{ display: "block", color: "#C9D8B0" }}
              >
                <svg
                  className="ring-ico"
                  viewBox="0 0 100 100"
                  width="132"
                  height="132"
                  aria-hidden="true"
                  style={{ strokeWidth: 2 }}
                >
                  <use href="#gt-ring" />
                </svg>
              </span>
              <span
                className="serif"
                style={{ fontSize: "32px", fontStyle: "italic" }}
              >
                Book a discovery call
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="pad"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "40px 56px 56px",
          borderTop: "1px solid #2E4D3E",
          display: "flex",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
          fontSize: "13px",
          color: "#A9BBA6",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              background: "#C9D8B0",
              padding: "3px",
              flexShrink: 0,
            }}
          >
            <img
              src="/logo_image/gta-symbol-xanh-64.png"
              alt="Green Tree Agency"
              width="20"
              height="20"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </span>
          <span>{"\u00A9"} 2026 Green Tree Agency. Hotline: 0939 535 958</span>
        </div>
        <nav aria-label="Social" style={{ display: "flex", gap: "28px" }}></nav>
        <a
          className="ring-link"
          href="#top"
          style={{ color: "#CDD3CB", textDecoration: "none" }}
        >
          Back to top{" "}
          <span style={{ display: "flex" }}>
            <svg
              className="ring-ico"
              viewBox="0 0 100 100"
              width="22"
              height="22"
              aria-hidden="true"
              style={{ strokeWidth: 4.5 }}
            >
              <use href="#gt-ring" />
            </svg>
          </span>
        </a>
      </footer>
    </section>
  );
};
