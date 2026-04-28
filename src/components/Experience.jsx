import { SectionHeader } from "./About";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Hytalentech",
    location: "India",
    period: "January 2024 – Present",
    type: "Full-time",
    frontendPoints: [
      "Developed and maintained scalable web applications using React.js, JavaScript (ES6+), and Redux — implementing component-based architecture and efficient state management.",
      "Built responsive, mobile-first user interfaces using Tailwind CSS, ensuring cross-browser compatibility and optimized user experience across devices.",
      "Integrated RESTful APIs and third-party services while optimizing frontend performance by minimizing re-renders and improving component efficiency.",
      "Designed and developed Nexuvo.ai – AI Model Training Platform, a multi-tenant application with RBAC, chatbot interface, and user management dashboards.",
      "Improved overall UX by following UI/UX principles, clean code practices, and reusable component patterns.",
    ],
    backendPoints: [
      "Developed scalable backend applications using Java/J2EE, Spring Boot, Spring Data JPA, and Hibernate, following clean architecture standards.",
      "Designed and implemented RESTful APIs for an ETL project, enabling data transformation workflows and building input/output connectors.",
      "Integrated backend services with Twilio API for real-time voice, SMS, and chat functionalities.",
      "Contributed to AI Chatbot and AI Assistant solutions using Python and NLP, enhancing automation capabilities.",
      "Applied object-oriented design, multithreading, and performance optimization techniques to build reliable backend systems.",
    ],
    stack: [
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Java/J2EE",
      "Spring Boot",
      "Hibernate",
      "Python",
      "MySQL",
      "RESTful APIs",
      "Twilio",
    ],
  },
];

export default function Experience({ dark }) {
  const accent = dark ? "#00ff88" : "#00aa55";
  const bg = dark ? "#0a0a0f" : "#ffffff";
  const cardBg = dark ? "#0d0d15" : "#f8f9fa";
  const cardBorder = dark ? "#1f2937" : "#e5e7eb";
  const cardBorderHover = dark ? "rgba(0,255,136,0.3)" : "rgba(0,170,85,0.3)";
  const text = dark ? "#ffffff" : "#0a0a0f";
  const textMuted = dark ? "#9ca3af" : "#555555";
  const tagBg = dark ? "rgba(0,255,136,0.08)" : "rgba(0,170,85,0.08)";
  const tagBorder = dark ? "rgba(0,255,136,0.2)" : "rgba(0,170,85,0.2)";

  return (
    <section
      id="experience"
      style={{
        padding: "96px 24px",
        background: bg,
        transition: "background 0.3s",
      }}
    >
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <SectionHeader tag="03" title="Work Experience" dark={dark} />
        <div style={{ marginTop: 64 }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              style={{
                border: `1px solid ${cardBorder}`,
                background: cardBg,
                padding: 32,
                transition: "border-color 0.3s, background 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = cardBorderHover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = cardBorder)
              }
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: 16,
                  marginBottom: 28,
                }}
              >
                <div>
                  <h3
                    style={{
                      color: text,
                      fontWeight: 700,
                      fontSize: 18,
                      margin: 0,
                    }}
                  >
                    {exp.role}
                  </h3>
                  <p style={{ color: accent, fontSize: 14, marginTop: 4 }}>
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ color: textMuted, fontSize: 13 }}>{exp.period}</p>
                  <span
                    style={{
                      marginTop: 4,
                      display: "inline-block",
                      padding: "2px 10px",
                      border: `1px solid ${tagBorder}`,
                      color: accent,
                      fontSize: 11,
                    }}
                  >
                    {exp.type}
                  </span>
                </div>
              </div>

              {[
                { title: "Frontend", points: exp.frontendPoints },
                { title: "Backend", points: exp.backendPoints },
              ].map(({ title, points }) => (
                <div key={title} style={{ marginBottom: 24 }}>
                  <p
                    style={{
                      color: accent,
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginBottom: 12,
                    }}
                  >
                    ▸ {title}
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {points.map((d, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          gap: 10,
                          color: textMuted,
                          fontSize: 13,
                          lineHeight: 1.6,
                        }}
                      >
                        <span
                          style={{
                            color: dark ? "#4b5563" : "#aaa",
                            marginTop: 2,
                            flexShrink: 0,
                          }}
                        >
                          •
                        </span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  paddingTop: 16,
                  borderTop: `1px solid ${cardBorder}`,
                }}
              >
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "2px 10px",
                      background: tagBg,
                      color: accent,
                      fontSize: 11,
                      border: `1px solid ${tagBorder}`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
