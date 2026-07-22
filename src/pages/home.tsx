import { settings } from "../lib/content";

export default function Home() {
  const photo = settings.profile_photo;
  const linkedin = settings.linkedin_url;
  const resumeUrl = settings.resume_url;
  const blurb = settings.blurb;

  return (
    <div className="flex-1 flex flex-col gap-8 pt-8 pb-6">

      {/* ═══════════════════════════════════════
          Main grid — hero left + portrait right
      ═══════════════════════════════════════ */}
      <div className="grid md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 items-start">

        {/* ── Left column: greeting / title / location / About Me ── */}
        <div className="flex flex-col gap-5">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase shimmer-text">
            Hi, I'm Noor!
          </p>

          <h1
            className="text-4xl md:text-[2.75rem] font-semibold leading-[1.1] tracking-tight"
            style={{ color: "#2a1a3e" }}
          >
            Operations Coordinator,<br />
            Educator &amp; Arts Administrator
          </h1>

          <p
            className="text-[10px] tracking-widest uppercase"
            style={{ color: "#b48cff" }}
          >
            Queens, New York &nbsp;&middot;&nbsp; Open to opportunities
          </p>

          {/* About Me glass card */}
          <div className="relative mt-2">
            <span
              className="absolute -left-4 top-5 text-sm select-none hidden md:block"
              style={{ color: "rgba(255,95,162,0.55)" }}
            >
              ✦
            </span>

            <div
              className="rounded-3xl px-7 py-7 space-y-5 iridescent-card"
              style={{
                background: "rgba(255,255,255,0.62)",
                border: "1px solid rgba(255,95,162,0.35)",
                backdropFilter: "blur(24px)",
                boxShadow:
                  "0 8px 48px rgba(180,140,255,0.16), 0 1px 0 rgba(255,255,255,0.90) inset",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-5 h-px"
                  style={{ background: "linear-gradient(90deg, #ff5fa2, #b48cff)" }}
                />
                <p
                  className="text-[10px] font-semibold tracking-[0.22em] uppercase"
                  style={{ color: "#ff5fa2" }}
                >
                  About Me
                </p>
              </div>

              {blurb && (
                <p
                  className="text-sm leading-relaxed whitespace-pre-line"
                  style={{ color: "rgba(42,26,62,0.62)" }}
                >
                  {blurb}
                </p>
              )}

              {/* Tools strip */}
              <div
                className="pt-5 flex flex-wrap gap-x-8 gap-y-3"
                style={{ borderTop: "1px solid rgba(42,26,62,0.08)" }}
              >
                <div>
                  <p
                    className="text-[9px] uppercase tracking-[0.18em] mb-1"
                    style={{ color: "#ff5fa2" }}
                  >
                    Systems
                  </p>
                  <p className="text-xs" style={{ color: "rgba(42,26,62,0.55)" }}>
                    Museum+, Workday, Excel, Google Workspace
                  </p>
                </div>
                <div>
                  <p
                    className="text-[9px] uppercase tracking-[0.18em] mb-1"
                    style={{ color: "#b48cff" }}
                  >
                    Creative
                  </p>
                  <p className="text-xs" style={{ color: "rgba(42,26,62,0.55)" }}>
                    Photoshop, Final Cut Pro, Art Inspection
                  </p>
                </div>
                <div>
                  <p
                    className="text-[9px] uppercase tracking-[0.18em] mb-1"
                    style={{ color: "#5ec8ff" }}
                  >
                    Languages
                  </p>
                  <p className="text-xs" style={{ color: "rgba(42,26,62,0.55)" }}>
                    Bangla, Hindi, Urdu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right column: portrait → buttons → tags ── */}
        <div className="flex flex-col items-center md:items-end gap-4">
          {/* Portrait */}
          <div
            className="relative w-60 md:w-full aspect-[3/4] rounded-3xl overflow-hidden"
            style={{
              maxWidth: 340,
              border: "2px solid rgba(255,95,162,0.28)",
              background: "rgba(255,255,255,0.65)",
              backdropFilter: "blur(14px)",
              boxShadow:
                "0 12px 48px rgba(180,140,255,0.20), 0 1px 0 rgba(255,255,255,0.90) inset",
            }}
          >
            {photo && (
              <img
                src={photo}
                alt="Noor Sharlin Jahan"
                className="w-full h-full object-cover"
              />
            )}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ boxShadow: "inset 0 0 0 1px rgba(255,95,162,0.12)" }}
            />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-end" style={{ maxWidth: 340 }}>
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full text-sm font-semibold no-underline transition-all duration-200 hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #ff5fa2 0%, #ff88bb 100%)",
                  color: "#fff",
                  boxShadow: "0 4px 16px rgba(255,95,162,0.35)",
                }}
              >
                LinkedIn
              </a>
            )}
            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full text-sm font-semibold no-underline transition-all duration-200 hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #5ec8ff 0%, #5edfb0 100%)",
                  color: "#fff",
                  boxShadow: "0 4px 16px rgba(94,200,255,0.35)",
                }}
              >
                View Resume
              </a>
            )}
          </div>

          {/* Skill tags */}
          <div
            className="flex flex-wrap gap-1.5 justify-center md:justify-end"
            style={{ maxWidth: 340 }}
          >
            {[
              { label: "Operations",   bg: "rgba(255,95,162,0.10)",  border: "rgba(255,95,162,0.30)",  text: "#c81055"  },
              { label: "Arts Admin",   bg: "rgba(180,140,255,0.10)", border: "rgba(180,140,255,0.30)", text: "#6a30c0"  },
              { label: "Education",    bg: "rgba(94,200,255,0.10)",  border: "rgba(94,200,255,0.30)",  text: "#0078b8"  },
              { label: "Archiving",    bg: "rgba(127,176,105,0.10)", border: "rgba(127,176,105,0.30)", text: "#2e6e1a"  },
              { label: "AI Workflows", bg: "rgba(255,200,87,0.12)",  border: "rgba(255,200,87,0.32)",  text: "#946000"  },
            ].map(({ label, bg, border, text }) => (
              <span
                key={label}
                className="px-2.5 py-1 rounded-full text-[9px] tracking-wider uppercase font-medium"
                style={{ background: bg, border: `1px solid ${border}`, color: text }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
