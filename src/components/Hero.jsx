import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "React.js & Redux Engineer",
  "Spring Boot Developer",
  "RESTful API Builder",
  "Python & NLP Enthusiast",
];

export default function Hero({ dark }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  const accent = dark ? "#00ff88" : "#00aa55";
  const bg = dark ? "#0a0a0f" : "#ffffff";
  const text = dark ? "#ffffff" : "#0a0a0f";
  const textMuted = dark ? "#9ca3af" : "#555555";
  const gridColor = dark ? "#00ff88" : "#00aa55";
  const btnBorder = dark ? "#4b5563" : "#cccccc";

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60,
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 24px",
        background: bg,
        transition: "background 0.3s",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: dark ? 0.08 : 0.05,
          backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            color: accent,
            fontSize: 13,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginTop: "3rem",
          }}
        >
          Hello, World!
        </p>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: 700,
            marginBottom: 16,
            lineHeight: 1.1,
            color: text,
          }}
        >
          I'm <span style={{ color: accent }}>Shivakumar</span>
        </h1>
        <div
          style={{
            fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
            color: textMuted,
            marginBottom: 32,
            height: 40,
          }}
        >
          <span>{displayed}</span>
          <span
            style={{ color: accent, animation: "blink 1s step-end infinite" }}
          >
            |
          </span>
        </div>
        <p
          style={{
            color: textMuted,
            maxWidth: 560,
            marginBottom: 40,
            fontSize: 17,
            lineHeight: 1.7,
          }}
        >
          Passionate Full-Stack Developer with{" "}
          <span style={{ color: accent }}>2.3 years</span> of experience
          building scalable web apps using{" "}
          <span style={{ color: accent }}>React.js, Redux, Spring Boot</span>{" "}
          and Python — from pixel-perfect UIs to robust backend APIs.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: "12px 32px",
              background: accent,
              color: dark ? "#000" : "#fff",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            View Projects
          </button>
          <a
            href="mailto:lshivakumar772@gmail.com"
            style={{
              padding: "12px 32px",
              border: `1px solid ${btnBorder}`,
              color: textMuted,
              fontSize: 13,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.2s",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = accent;
              e.target.style.color = accent;
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = btnBorder;
              e.target.style.color = textMuted;
            }}
          >
            Contact Me
          </a>
        </div>

        <div
          style={{ marginTop: 80, display: "flex", flexWrap: "wrap", gap: 48 }}
        >
          {[
            { label: "Years of Experience", value: "2.3+" },
            { label: "Projects Delivered", value: "10+" },
            { label: "Technologies", value: "15+" },
            { label: "GitHub Repos", value: "20+" },
          ].map((stat) => (
            <div key={stat.label}>
              <p style={{ fontSize: 36, fontWeight: 700, color: accent }}>
                {stat.value}
              </p>
              <p style={{ color: textMuted, fontSize: 13, marginTop: 4 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: textMuted,
          fontSize: 11,
        }}
      >
        <span style={{ letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 48,
            background: `linear-gradient(to bottom, ${textMuted}, transparent)`,
          }}
        />
      </div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
}
