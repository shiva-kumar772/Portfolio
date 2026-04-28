import { SectionHeader } from "./About";

const skillCategories = [
  { category: "Frontend", icon: "🎨", skills: [
    { name: "React.js", level: 90 }, { name: "JavaScript (ES6+)", level: 88 },
    { name: "Redux", level: 85 }, { name: "Tailwind CSS", level: 87 },
    { name: "HTML5 / CSS3", level: 92 }, { name: "Bootstrap", level: 80 },
  ]},
  { category: "Backend", icon: "⚙️", skills: [
    { name: "Java / J2EE", level: 85 }, { name: "Spring Boot", level: 83 },
    { name: "Spring Data JPA", level: 80 }, { name: "Hibernate", level: 80 },
    { name: "Python", level: 75 }, { name: "RESTful APIs", level: 88 },
  ]},
  { category: "APIs & Integration", icon: "🔌", skills: [
    { name: "RESTful API Design", level: 88 }, { name: "Twilio API", level: 78 },
    { name: "OpenWeather API", level: 80 }, { name: "Amadeus API", level: 75 },
    { name: "NLP / AI Integration", level: 70 },
  ]},
  { category: "Database & Tools", icon: "🗄️", skills: [
    { name: "MySQL", level: 82 }, { name: "JDBC", level: 78 },
    { name: "Git / GitHub", level: 90 }, { name: "Multithreading (Java)", level: 75 },
  ]},
];

const techBadges = [
  "React.js","Redux","JavaScript","Java","Spring Boot","Spring Data JPA",
  "Hibernate","Python","Tailwind CSS","Bootstrap","MySQL","RESTful APIs",
  "Twilio API","OpenWeather API","Amadeus API","NLP","Git","GitHub","JDBC","HTML5",
];

export default function Skills({ dark }) {
  const accent = dark ? "#00ff88" : "#00aa55";
  const bg = dark ? "#0d0d15" : "#f8f9fa";
  const text = dark ? "#ffffff" : "#0a0a0f";
  const textMuted = dark ? "#9ca3af" : "#555555";
  const badgeBorder = dark ? "rgba(0,255,136,0.25)" : "rgba(0,170,85,0.3)";
  const trackBg = dark ? "#1f2937" : "#e5e7eb";
  const cardBg = dark ? "#0a0a0f" : "#ffffff";
  const cardBorder = dark ? "#1f2937" : "#e5e7eb";

  return (
    <section id="skills" style={{ padding: "96px 24px", background: bg, transition: "background 0.3s" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <SectionHeader tag="02" title="Skills & Stack" dark={dark} />
        <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 10 }}>
          {techBadges.map((t) => (
            <span key={t} style={{ padding: "4px 12px", border: `1px solid ${badgeBorder}`, color: accent, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase" }}>{t}</span>
          ))}
        </div>
        <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48 }}>
          {skillCategories.map((cat) => (
            <div key={cat.category} style={{ background: cardBg, border: `1px solid ${cardBorder}`, padding: 24, transition: "background 0.3s" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <span style={{ fontSize: 18 }}>{cat.icon}</span>
                <h3 style={{ color: accent, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>{cat.category}</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ color: text, fontSize: 13 }}>{skill.name}</span>
                      <span style={{ color: accent, fontSize: 11 }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: 3, background: trackBg, width: "100%" }}>
                      <div style={{ height: "100%", width: `${skill.level}%`, background: `linear-gradient(to right, ${accent}, ${dark ? "#00cc6a" : "#007a3d"})` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}