const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

import logo from "../assets/pflogo.jpeg";
export default function Navbar({ activeSection, scrolled, dark, setDark }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const accent = dark ? "#00ff88" : "#00aa55";
  const navBg = scrolled
    ? dark
      ? "rgba(10,10,15,0.92)"
      : "rgba(255,255,255,0.92)"
    : "transparent";
  const borderColor = dark ? "rgba(0,255,136,0.2)" : "rgba(0,170,85,0.2)";
  const textMuted = dark ? "#9ca3af" : "#555";
  const textColor = dark ? "#fff" : "#0a0a0f";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: navBg,
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${borderColor}` : "none",
        transition: "all 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button onClick={() => scrollTo("home")} className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover border border-[#00ff88]"
          />
        </button>

        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              style={{ display: "none" }}
              className="md-nav-item"
            >
              <button
                onClick={() => scrollTo(link.id)}
                style={{
                  fontSize: 12,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: activeSection === link.id ? accent : textMuted,
                  borderBottom:
                    activeSection === link.id ? `1px solid ${accent}` : "none",
                  background: "none",
                  border: "none",
                  borderBottom:
                    activeSection === link.id
                      ? `1px solid ${accent}`
                      : "1px solid transparent",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Theme toggle */}
          <button
            onClick={() => setDark(!dark)}
            style={{
              width: 44,
              height: 24,
              borderRadius: 12,
              border: `1px solid ${borderColor}`,
              background: dark ? "#1a1a2e" : "#e8f5e9",
              cursor: "pointer",
              position: "relative",
              transition: "all 0.3s",
              display: "flex",
              alignItems: "center",
              padding: "0 3px",
            }}
            title={dark ? "Switch to Light" : "Switch to Dark"}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: accent,
                transform: dark ? "translateX(20px)" : "translateX(0)",
                transition: "transform 0.3s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
              }}
            >
              {dark ? "🌙" : "☀️"}
            </div>
          </button>

          <button
            onClick={() => scrollTo("contact")}
            style={{
              padding: "8px 16px",
              border: `1px solid ${accent}`,
              color: accent,
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              background: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = accent;
              e.target.style.color = dark ? "#000" : "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "none";
              e.target.style.color = accent;
            }}
          >
            Hire Me
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) { .md-nav-item { display: list-item !important; } }
      `}</style>
    </nav>
  );
}
