import { useState } from "react";
import { SectionHeader } from "./About";

export default function Contact({ dark }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const accent = dark ? "#00ff88" : "#00aa55";
  const bg = dark ? "#0d0d15" : "#f8f9fa";
  const text = dark ? "#ffffff" : "#0a0a0f";
  const textMuted = dark ? "#9ca3af" : "#555555";
  const textFaint = dark ? "#6b7280" : "#999999";
  const inputBorder = dark ? "#374151" : "#d1d5db";
  const inputBg = "transparent";
  const inputFocus = accent;
  const noteBg = dark ? "rgba(0,255,136,0.05)" : "rgba(0,170,85,0.04)";
  const noteBorder = dark ? "rgba(0,255,136,0.2)" : "rgba(0,170,85,0.2)";

  const inputStyle = {
    width: "100%",
    background: inputBg,
    border: `1px solid ${inputBorder}`,
    color: text,
    padding: "12px 16px",
    fontSize: 13,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block",
    color: textFaint,
    fontSize: 11,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    marginBottom: 8,
  };

  return (
    <section
      id="contact"
      style={{
        padding: "96px 24px",
        background: bg,
        transition: "background 0.3s",
      }}
    >
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <SectionHeader tag="06" title="Get In Touch" dark={dark} />
        <p style={{ marginTop: 16, color: textMuted, maxWidth: 520 }}>
          Have a project in mind or want to discuss opportunities? I'm always
          open to interesting conversations.
        </p>

        <div
          style={{
            marginTop: 64,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 64,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {[
              {
                label: "Email",
                value: "lshivakumar772@gmail.com",
                icon: "📧",
                href: "mailto:lshivakumar772@gmail.com",
              },
              {
                label: "Phone",
                value: "+91 8296394472",
                icon: "📱",
                href: "tel:+918296394472",
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/shivakumar772",
                icon: "💼",
                href: "https://linkedin.com/in/shivakumar772",
              },
              {
                label: "GitHub",
                value: "github.com/shiva-kumar772",
                icon: "⌨️",
                href: "https://github.com/shiva-kumar772",
              },
              {
                label: "Location",
                value: "Karnataka, India",
                icon: "📍",
                href: null,
              },
            ].map((c) => (
              <div
                key={c.label}
                style={{ display: "flex", alignItems: "flex-start", gap: 16 }}
              >
                <span style={{ fontSize: 20, width: 28, flexShrink: 0 }}>
                  {c.icon}
                </span>
                <div>
                  <p
                    style={{
                      color: textFaint,
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      style={{
                        color: text,
                        fontSize: 13,
                        textDecoration: "none",
                        wordBreak: "break-all",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = accent)}
                      onMouseLeave={(e) => (e.target.style.color = text)}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p style={{ color: text, fontSize: 13 }}>{c.value}</p>
                  )}
                </div>
              </div>
            ))}
            <div
              style={{
                padding: 20,
                background: noteBg,
                border: `1px solid ${noteBorder}`,
              }}
            >
              <p
                style={{
                  color: accent,
                  fontSize: 13,
                  fontWeight: 700,
                  marginBottom: 6,
                }}
              >
                Open to Opportunities
              </p>
              <p style={{ color: textMuted, fontSize: 13 }}>
                Available for Full-Stack Developer roles — React.js + Spring
                Boot, remote-friendly or on-site across India.
              </p>
            </div>
          </div>

          <form
            onSubmit={submit}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
              }}
            >
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handle}
                  required
                  placeholder="Your Name"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = inputFocus)}
                  onBlur={(e) => (e.target.style.borderColor = inputBorder)}
                />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handle}
                  required
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = inputFocus)}
                  onBlur={(e) => (e.target.style.borderColor = inputBorder)}
                />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handle}
                required
                placeholder="Project / Job opportunity"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = inputFocus)}
                onBlur={(e) => (e.target.style.borderColor = inputBorder)}
              />
            </div>
            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handle}
                required
                rows={5}
                placeholder="Tell me about your project..."
                style={{ ...inputStyle, resize: "none" }}
                onFocus={(e) => (e.target.style.borderColor = inputFocus)}
                onBlur={(e) => (e.target.style.borderColor = inputBorder)}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: "14px",
                background: accent,
                color: dark ? "#000" : "#fff",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              {sent ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
