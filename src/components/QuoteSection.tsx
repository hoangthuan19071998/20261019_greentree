import type { FC } from "react";

export const QuoteSection: FC = () => {
  return (
    <section
      className="pad"
      style={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "80px 56px 160px",
        textAlign: "center",
      }}
    >
      <img
        className="rv"
        src="/logo_image/gta-symbol-xanh-256.png"
        alt="Green Tree Agency Emblem"
        width="72"
        height="72"
        style={{
          width: "72px",
          height: "72px",
          objectFit: "contain",
          marginBottom: "40px",
          display: "inline-block",
        }}
      />
      <p
        className="serif big rv"
        style={{
          margin: "0 auto",
          fontSize: "64px",
          lineHeight: 1.1,
          maxWidth: "1000px",
          color: "#14261E",
        }}
      >
        {"\u201C"}Good brands, like good trees, are{" "}
        <em style={{ color: "#3E6B52" }}>grown</em> {"\u2014"} not just built.
        {"\u201D"}
      </p>
      <div className="rv rv-d1" style={{ marginTop: "48px" }}></div>
    </section>
  );
};
