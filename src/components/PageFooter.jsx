export default function PageFooter({ dark }) {
  const accent = dark ? "#00ff88" : "#00aa55";
  const bg = dark ? "#0a0a0f" : "#ffffff";
  const borderTop = dark ? "#1f2937" : "#e5e7eb";
  const textFaint = dark ? "#4b5563" : "#aaaaaa";
  const textMuted = dark ? "#6b7280" : "#888888";

  return (
    <footer
      style={{
        padding: "40px 24px",
        borderTop: `1px solid ${borderTop}`,
        background: bg,
        transition: "background 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div>
          <p
            style={{
              color: accent,
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: "0.2em",
            }}
          >
            &lt;SK /&gt;
          </p>
          <p style={{ color: textFaint, fontSize: 11, marginTop: 4 }}>
            Full-Stack Developer · Hytalentech
          </p>
        </div>
        <p style={{ color: textFaint, fontSize: 11 }}>
          © {new Date().getFullYear()} Shivakumar. Built with React + Tailwind
          CSS.
        </p>
        <div style={{ display: "flex", gap: 24 }}>
          {[
            { label: "GitHub", href: "https://github.com/shiva-kumar772" },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/shivakumar772",
            },
            { label: "Email", href: "mailto:lshivakumar772@gmail.com" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                color: textMuted,
                fontSize: 13,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = accent)}
              onMouseLeave={(e) => (e.target.style.color = textMuted)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
