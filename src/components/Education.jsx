import { SectionHeader } from "./About";

const education = [
  {
    degree: "Bachelor of Engineering (BE) – Mechanical Engineering",
    institution: "Govt. Engineering College Raichur – 584101",
    period: "Year of Passing: 2023",
    grade: "CGPA: 7.32 / 10",
    details:
      "Transitioned from Mechanical Engineering into software development through self-learning and hands-on project experience.",
  },
];

const certifications = [
  {
    title: "React.js – Complete Developer Course",
    issuer: "Udemy",
    year: "2023",
    badge: "⚛️",
  },
  {
    title: "Spring Boot & Microservices",
    issuer: "Udemy",
    year: "2023",
    badge: "🌱",
  },
  {
    title: "Java Programming Masterclass",
    issuer: "Online",
    year: "2023",
    badge: "☕",
  },
  {
    title: "Python for Everybody",
    issuer: "Coursera",
    year: "2023",
    badge: "🐍",
  },
  {
    title: "REST API Design with Spring Boot",
    issuer: "Online",
    year: "2024",
    badge: "🔌",
  },
  {
    title: "Git & GitHub – Version Control",
    issuer: "Udemy",
    year: "2023",
    badge: "🗃️",
  },
];

const highlights = [
  {
    icon: "🚀",
    title: "Career Switch",
    desc: "Pivoted from Mechanical Engineering to Full-Stack Development through self-driven learning.",
  },
  {
    icon: "💡",
    title: "Self-Taught",
    desc: "Mastered React.js, Spring Boot, Python, and REST API development independently.",
  },
  {
    icon: "🤖",
    title: "AI Exposure",
    desc: "Hands-on experience with NLP and AI chatbot development on Nexuvo.ai platform.",
  },
];

export default function Education({ dark }) {
  const accent = dark ? "#00ff88" : "#00aa55";
  const bg = dark ? "#0a0a0f" : "#ffffff";
  const cardBg = dark ? "#0d0d15" : "#f8f9fa";
  const cardBorder = dark ? "#1f2937" : "#e5e7eb";
  const cardHover = dark ? "rgba(0,255,136,0.25)" : "rgba(0,170,85,0.25)";
  const text = dark ? "#ffffff" : "#0a0a0f";
  const textMuted = dark ? "#9ca3af" : "#555555";
  const textFaint = dark ? "#6b7280" : "#999999";
  const accentBorder = dark ? "rgba(0,255,136,0.3)" : "rgba(0,170,85,0.3)";
  const tagBorder = dark ? "rgba(0,255,136,0.25)" : "rgba(0,170,85,0.25)";

  return (
    <section
      id="education"
      style={{
        padding: "96px 24px",
        background: bg,
        transition: "background 0.3s",
      }}
    >
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <SectionHeader
          tag="05"
          title="Education & Certifications"
          dark={dark}
        />
        <div
          style={{
            marginTop: 64,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 64,
          }}
        >
          <div>
            <p
              style={{
                color: accent,
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: 28,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              🎓 Academic
            </p>
            {education.map((edu, i) => (
              <div
                key={i}
                style={{
                  borderLeft: `2px solid ${accentBorder}`,
                  paddingLeft: 24,
                  marginBottom: 32,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <h4
                    style={{
                      color: text,
                      fontWeight: 700,
                      margin: 0,
                      fontSize: 15,
                    }}
                  >
                    {edu.degree}
                  </h4>
                  <span
                    style={{
                      color: accent,
                      fontSize: 11,
                      border: `1px solid ${tagBorder}`,
                      padding: "2px 10px",
                      flexShrink: 0,
                    }}
                  >
                    {edu.grade}
                  </span>
                </div>
                <p style={{ color: textMuted, fontSize: 13, marginBottom: 4 }}>
                  {edu.institution}
                </p>
                <p style={{ color: textFaint, fontSize: 12, marginBottom: 10 }}>
                  {edu.period}
                </p>
                <p style={{ color: textMuted, fontSize: 13 }}>{edu.details}</p>
              </div>
            ))}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginTop: 8,
              }}
            >
              {highlights.map((h, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 14,
                    border: `1px solid ${cardBorder}`,
                    padding: 16,
                    background: cardBg,
                    transition: "background 0.3s",
                  }}
                >
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{h.icon}</span>
                  <div>
                    <p
                      style={{
                        color: text,
                        fontSize: 13,
                        fontWeight: 500,
                        marginBottom: 2,
                      }}
                    >
                      {h.title}
                    </p>
                    <p style={{ color: textFaint, fontSize: 12 }}>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p
              style={{
                color: accent,
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: 28,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              📜 Certifications & Courses
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 14,
                    border: `1px solid ${cardBorder}`,
                    padding: 16,
                    background: cardBg,
                    transition: "all 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = cardHover)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = cardBorder)
                  }
                >
                  <span style={{ fontSize: 22, flexShrink: 0 }}>
                    {cert.badge}
                  </span>
                  <div>
                    <p
                      style={{
                        color: text,
                        fontSize: 13,
                        fontWeight: 500,
                        marginBottom: 2,
                      }}
                    >
                      {cert.title}
                    </p>
                    <p style={{ color: textFaint, fontSize: 12 }}>
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
