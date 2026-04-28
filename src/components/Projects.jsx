import { useState } from "react";
import { SectionHeader } from "./About";

const projects = [
  { title: "Nexuvo.ai – AI Model Training Platform", category: "Fullstack", highlight: true,
    description: "Multi-tenant AI model training platform with RBAC, chatbot interface, and user management dashboards ensuring scalability and secure session handling.",
    features: ["Multi-Tenant Architecture","RBAC","Chatbot Interface","User Management Dashboard","Secure Session Handling"],
    stack: ["React.js","Redux","Tailwind CSS","Spring Boot","Java","MySQL"], github: "https://github.com/shiva-kumar772", demo: null },
  { title: "ETL Data Pipeline API", category: "Backend", highlight: false,
    description: "RESTful API system for ETL workflows with custom input/output connectors enabling seamless cross-system data integration.",
    features: ["RESTful API Design","ETL Workflow Engine","Input/Output Connectors","Data Transformation","Cross-System Integration"],
    stack: ["Java/J2EE","Spring Boot","Spring Data JPA","Hibernate","MySQL"], github: "https://github.com/shiva-kumar772", demo: null },
  { title: "AI Chatbot & Assistant", category: "Backend", highlight: false,
    description: "AI-powered chatbot using Python and NLP to enhance automation and user interaction capabilities with intelligent responses.",
    features: ["Natural Language Processing","AI Response Engine","Automation Workflows","Python Backend","API Integration"],
    stack: ["Python","NLP","Spring Boot","RESTful APIs","MySQL"], github: "https://github.com/shiva-kumar772", demo: null },
  { title: "Real-Time Communication", category: "Backend", highlight: false,
    description: "Backend service integrating Twilio API for real-time voice calls, SMS notifications, and live chat within web applications.",
    features: ["Twilio API","Real-Time Voice","SMS Notifications","Live Chat","Webhook Handling"],
    stack: ["Java","Spring Boot","Twilio API","RESTful APIs","MySQL"], github: "https://github.com/shiva-kumar772", demo: null },
  { title: "Responsive React Dashboard", category: "Frontend", highlight: false,
    description: "High-performance mobile-first dashboard with Redux state management, optimized re-renders, and seamless REST API integration.",
    features: ["Component-Based Architecture","Redux","Mobile-First Design","API Integration","Performance Optimized"],
    stack: ["React.js","Redux","Tailwind CSS","JavaScript (ES6+)","RESTful APIs"], github: "https://github.com/shiva-kumar772", demo: null },
  { title: "Travel & Weather App", category: "Fullstack", highlight: false,
    description: "Full-stack travel planning app integrating OpenWeather and Amadeus APIs for real-time weather and flight/hotel search.",
    features: ["OpenWeather API","Amadeus Flight API","Real-Time Data","Search & Filter","Responsive UI"],
    stack: ["React.js","JavaScript","Spring Boot","OpenWeather API","Amadeus API","MySQL"], github: "https://github.com/shiva-kumar772", demo: null },
];

const filters = ["All","Fullstack","Frontend","Backend"];

export default function Projects({ dark }) {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  const accent = dark ? "#00ff88" : "#00aa55";
  const bg = dark ? "#0d0d15" : "#f8f9fa";
  const cardBg = dark ? "#0a0a0f" : "#ffffff";
  const cardBorder = dark ? "#1f2937" : "#e5e7eb";
  const cardHover = dark ? "rgba(0,255,136,0.25)" : "rgba(0,170,85,0.25)";
  const featuredBg = dark ? "rgba(0,255,136,0.05)" : "rgba(0,170,85,0.04)";
  const featuredBorder = dark ? "rgba(0,255,136,0.5)" : "rgba(0,170,85,0.5)";
  const text = dark ? "#ffffff" : "#0a0a0f";
  const textMuted = dark ? "#9ca3af" : "#555555";
  const textFaint = dark ? "#6b7280" : "#999999";
  const tagBg = dark ? "#111827" : "#f3f4f6";
  const tagBorder = dark ? "#1f2937" : "#e5e7eb";
  const filterActive = dark ? "#000" : "#fff";

  return (
    <section id="projects" style={{ padding: "96px 24px", background: bg, transition: "background 0.3s" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <SectionHeader tag="04" title="Projects" dark={dark} />
        <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)} style={{
              padding: "8px 20px", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase",
              border: `1px solid ${active === f ? accent : cardBorder}`,
              background: active === f ? accent : "transparent",
              color: active === f ? filterActive : textMuted,
              cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s",
            }}>{f}</button>
          ))}
        </div>
        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
          {filtered.map((project) => (
            <div key={project.title}
              style={{ border: `1px solid ${project.highlight ? featuredBorder : cardBorder}`, background: project.highlight ? featuredBg : cardBg, padding: 24, display: "flex", flexDirection: "column", transition: "all 0.3s, transform 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = cardHover; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = project.highlight ? featuredBorder : cardBorder; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {project.highlight && (
                <span style={{ alignSelf: "flex-start", marginBottom: 10, padding: "2px 10px", background: accent, color: dark ? "#000" : "#fff", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em" }}>FEATURED</span>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, gap: 8 }}>
                <h3 style={{ color: text, fontWeight: 700, fontSize: 14, margin: 0, lineHeight: 1.4 }}>{project.title}</h3>
                <span style={{ color: textFaint, fontSize: 10, border: `1px solid ${cardBorder}`, padding: "2px 8px", flexShrink: 0 }}>{project.category}</span>
              </div>
              <p style={{ color: textMuted, fontSize: 13, lineHeight: 1.6, marginBottom: 14, flex: 1 }}>{project.description}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px", display: "flex", flexDirection: "column", gap: 4 }}>
                {project.features.map((f) => (
                  <li key={f} style={{ display: "flex", gap: 8, color: textFaint, fontSize: 12 }}>
                    <span style={{ color: accent }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                {project.stack.map((t) => (
                  <span key={t} style={{ padding: "2px 8px", background: tagBg, color: textMuted, fontSize: 11, border: `1px solid ${tagBorder}` }}>{t}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 16, paddingTop: 14, borderTop: `1px solid ${cardBorder}` }}>
                <a href={project.github} target="_blank" rel="noreferrer" style={{ color: accent, fontSize: 13, textDecoration: "none" }}>GitHub →</a>
                {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" style={{ color: textMuted, fontSize: 13, textDecoration: "none" }}>Live Demo →</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}