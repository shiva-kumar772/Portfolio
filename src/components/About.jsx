export function SectionHeader({ tag, title, dark }) {
  const accent = dark ? "#00ff88" : "#00aa55";
  const text = dark ? "#ffffff" : "#0a0a0f";
  const line = dark ? "rgba(0,255,136,0.3)" : "rgba(0,170,85,0.3)";
  return (
    <div>
      <p
        style={{
          color: accent,
          fontSize: 11,
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        // {tag}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <h2 style={{ fontSize: 36, fontWeight: 700, color: text, margin: 0 }}>
          {title}
        </h2>
        <div
          style={{
            flex: 1,
            height: 1,
            background: `linear-gradient(to right, ${line}, transparent)`,
          }}
        />
      </div>
    </div>
  );
}

export default function About({ dark }) {
  const accent = dark ? "#00ff88" : "#00aa55";
  const bg = dark ? "#0a0a0f" : "#ffffff";
  const cardBg = dark ? "rgba(0,255,136,0.05)" : "rgba(0,170,85,0.04)";
  const cardBorder = dark ? "rgba(0,255,136,0.3)" : "rgba(0,170,85,0.3)";
  const text = dark ? "#ffffff" : "#0a0a0f";
  const textMuted = dark ? "#9ca3af" : "#666666";
  const textFaint = dark ? "#6b7280" : "#999999";
  const btnBorder = dark ? "#374151" : "#dddddd";

  return (
    <section
      id="about"
      style={{
        padding: "96px 24px",
        background: bg,
        transition: "background 0.3s",
      }}
    >
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <SectionHeader tag="01" title="About Me" dark={dark} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 64,
            marginTop: 64,
            alignItems: "center",
          }}
        >
          {/* Avatar */}
          <div>
            <div
              style={{
                width: 288,
                height: 288,
                position: "relative",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  border: `2px solid ${accent}`,
                  transform: "translate(12px,12px)",
                }}
              />
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 72 }}>👨‍💻</span>
                <p
                  style={{
                    color: accent,
                    fontSize: 12,
                    letterSpacing: "0.2em",
                  }}
                >
                  Full-Stack Dev
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 24,
                justifyContent: "center",
              }}
            >
              {[
                { label: "GitHub", href: "https://github.com/shiva-kumar772" },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/shivakumar772",
                },
                { label: "Email", href: "mailto:lshivakumar772@gmail.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    padding: "8px 16px",
                    border: `1px solid ${btnBorder}`,
                    color: textMuted,
                    fontSize: 13,
                    textDecoration: "none",
                    transition: "all 0.2s",
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
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div>
            <p
              style={{
                color: text,
                lineHeight: 1.8,
                marginBottom: 24,
                fontSize: 17,
              }}
            >
              I'm a <span style={{ color: accent }}>Full-Stack Developer</span>{" "}
              with 2.3 years of experience at{" "}
              <span style={{ color: accent }}>Hytalentech</span>, building
              scalable web applications with{" "}
              <span style={{ color: accent }}>
                React.js, Redux, and Tailwind CSS
              </span>{" "}
              on the frontend, and{" "}
              <span style={{ color: accent }}>
                Java/J2EE, Spring Boot, Hibernate
              </span>{" "}
              on the backend.
            </p>
            <p style={{ color: textMuted, lineHeight: 1.8, marginBottom: 32 }}>
              I've designed multi-tenant platforms with RBAC, built ETL data
              pipelines, integrated third-party APIs (Twilio, OpenWeather,
              Amadeus), and contributed to AI Chatbot solutions using Python and
              NLP — delivering clean, maintainable, and production-ready code.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {[
                { label: "Name", value: "Shivakumar" },
                { label: "Location", value: "Karnataka, India" },
                { label: "Email", value: "lshivakumar772@gmail.com" },
                { label: "Phone", value: "+91 8296394472" },
                { label: "GitHub", value: "shiva-kumar772" },
                { label: "Available", value: "Open to Opportunities" },
              ].map((info) => (
                <div
                  key={info.label}
                  style={{
                    borderLeft: `2px solid ${cardBorder}`,
                    paddingLeft: 16,
                  }}
                >
                  <p
                    style={{
                      color: textFaint,
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    {info.label}
                  </p>
                  <p
                    style={{
                      color: text,
                      fontSize: 13,
                      marginTop: 4,
                      wordBreak: "break-all",
                    }}
                  >
                    {info.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
