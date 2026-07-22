import { ReactNode, useMemo } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

/*
  Sparkle confetti — ✦ ✧ ✩ ⋆ ˚ plus filled ★ stickers in candy colors.
  Opacities are high because the background is now light cream.
*/
const DECO_STARS = [
  /* hollow sparkle characters — corners */
  { char: "✦", x: 3,   y: 9,   size: 13, opacity: 0.55, anim: "sparkle-burst", dur: 4.2,  delay: 0,   color: "#ff5fa2" },
  { char: "✧", x: 94,  y: 6,   size: 11, opacity: 0.50, anim: "sparkle-burst", dur: 5.5,  delay: 1.1, color: "#b48cff" },
  { char: "✦", x: 2,   y: 85,  size: 12, opacity: 0.45, anim: "sparkle-burst", dur: 6.0,  delay: 0.5, color: "#5ec8ff" },
  { char: "✧", x: 92,  y: 90,  size: 10, opacity: 0.45, anim: "sparkle-burst", dur: 5.2,  delay: 1.8, color: "#5edfb0" },
  /* top edge */
  { char: "⋆", x: 22,  y: 2,   size: 9,  opacity: 0.40, anim: "glitter-drift", dur: 5.8,  delay: 2.1, color: "#ff5fa2" },
  { char: "˚",  x: 48,  y: 1.5, size: 15, opacity: 0.42, anim: "twinkle-slow", dur: 4.8,  delay: 0.9, color: "#ffc857" },
  { char: "✩", x: 76,  y: 3,   size: 10, opacity: 0.38, anim: "glitter-drift", dur: 6.5,  delay: 3.0, color: "#b48cff" },
  /* side edges */
  { char: "⋆", x: 0.8, y: 42,  size: 9,  opacity: 0.35, anim: "twinkle-slow", dur: 5.1,  delay: 1.6, color: "#5ec8ff" },
  { char: "✦", x: 97,  y: 35,  size: 11, opacity: 0.42, anim: "sparkle-burst", dur: 4.6,  delay: 2.7, color: "#ff9de2" },
  { char: "˚",  x: 97,  y: 65,  size: 13, opacity: 0.38, anim: "twinkle-slow", dur: 6.2,  delay: 0.4, color: "#b48cff" },
  /* mid-page air */
  { char: "✧", x: 55,  y: 50,  size: 8,  opacity: 0.30, anim: "glitter-drift", dur: 7.0,  delay: 3.5, color: "#5edfb0" },
  { char: "⋆", x: 10,  y: 58,  size: 8,  opacity: 0.30, anim: "glitter-drift", dur: 6.8,  delay: 4.0, color: "#ffc857" },
  { char: "✩", x: 88,  y: 55,  size: 9,  opacity: 0.32, anim: "sparkle-burst", dur: 5.4,  delay: 2.3, color: "#ff5fa2" },
  { char: "˚",  x: 35,  y: 96,  size: 12, opacity: 0.32, anim: "twinkle-slow", dur: 5.7,  delay: 1.3, color: "#5ec8ff" },
  /* filled ★ sticker confetti — holographic foil star look */
  { char: "★", x: 15,  y: 22,  size: 14, opacity: 0.52, anim: "sparkle-burst", dur: 4.5,  delay: 1.0, color: "#ffc857" },
  { char: "★", x: 65,  y: 14,  size: 9,  opacity: 0.48, anim: "glitter-drift", dur: 5.2,  delay: 2.5, color: "#ff5fa2" },
  { char: "★", x: 80,  y: 72,  size: 11, opacity: 0.44, anim: "sparkle-burst", dur: 6.1,  delay: 0.8, color: "#5ec8ff" },
  { char: "★", x: 25,  y: 76,  size: 10, opacity: 0.46, anim: "glitter-drift", dur: 4.8,  delay: 3.2, color: "#7fb069" },
  { char: "★", x: 72,  y: 42,  size: 8,  opacity: 0.40, anim: "twinkle-slow",  dur: 5.5,  delay: 1.7, color: "#b48cff" },
  { char: "★", x: 42,  y: 88,  size: 13, opacity: 0.48, anim: "sparkle-burst", dur: 3.8,  delay: 0.3, color: "#ffc857" },
  { char: "★", x: 6,   y: 30,  size: 8,  opacity: 0.38, anim: "glitter-drift", dur: 6.3,  delay: 2.0, color: "#ff5fa2" },
  { char: "★", x: 58,  y: 80,  size: 10, opacity: 0.42, anim: "sparkle-burst", dur: 5.0,  delay: 3.8, color: "#5edfb0" },
];

function Atmosphere() {
  const dots = useMemo(() => {
    const colors = [
      "rgba(255,95,162,",    /* bubblegum pink */
      "rgba(180,140,255,",   /* holographic lavender */
      "rgba(94,200,255,",    /* sky blue */
      "rgba(127,176,105,",   /* sage green */
      "rgba(255,200,87,",    /* marigold gold */
      "rgba(94,223,176,",    /* bright mint */
    ];
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.2 + 0.8,
      delay: Math.random() * 10,
      duration: Math.random() * 6 + 4,
      color: colors[i % 6],
      isSpark: i % 7 === 0,
    }));
  }, []);

  return (
    <>
      {/* ── Paint-pour marbled blobs over the cream base ── */}

      {/* Big bubblegum pink — upper left, dominant anchor */}
      <div
        className="pointer-events-none fixed z-0"
        style={{
          left: "-15%", top: "-10%",
          width: "65%", height: "58%",
          background: "radial-gradient(ellipse, rgba(255,95,162,0.28) 0%, rgba(255,157,226,0.12) 45%, transparent 70%)",
        }}
      />
      {/* Sage green — upper right */}
      <div
        className="pointer-events-none fixed z-0"
        style={{
          right: "-12%", top: "-5%",
          width: "55%", height: "50%",
          background: "radial-gradient(ellipse, rgba(127,176,105,0.22) 0%, rgba(94,223,176,0.10) 45%, transparent 70%)",
        }}
      />
      {/* Holographic lavender — center, large soft blob */}
      <div
        className="pointer-events-none fixed z-0"
        style={{
          left: "20%", top: "25%",
          width: "60%", height: "55%",
          background: "radial-gradient(ellipse, rgba(180,140,255,0.16) 0%, rgba(180,140,255,0.06) 50%, transparent 72%)",
        }}
      />
      {/* Marigold gold — lower left */}
      <div
        className="pointer-events-none fixed z-0"
        style={{
          left: "-8%", bottom: "0%",
          width: "50%", height: "48%",
          background: "radial-gradient(ellipse, rgba(255,200,87,0.22) 0%, rgba(255,200,87,0.08) 45%, transparent 70%)",
        }}
      />
      {/* Sky blue — lower right */}
      <div
        className="pointer-events-none fixed z-0"
        style={{
          right: "-10%", bottom: "5%",
          width: "52%", height: "46%",
          background: "radial-gradient(ellipse, rgba(94,200,255,0.22) 0%, rgba(94,200,255,0.08) 45%, transparent 70%)",
        }}
      />
      {/* Soft pink highlight — top center (brightness accent) */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 70% 35% at 50% -5%, rgba(255,157,226,0.25) 0%, transparent 65%)",
        }}
      />

      {/* ── Dot starfield + ✦ sparkle crosses ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {dots.map((s) =>
          s.isSpark ? (
            <span
              key={s.id}
              style={{
                position: "absolute",
                left: `${s.x}%`,
                top: `${s.y}%`,
                fontSize: `${s.size * 7}px`,
                color: `${s.color}1)`,
                opacity: 0.40,
                animation: `glitter-drift ${s.duration}s ${s.delay}s ease-in-out infinite`,
                userSelect: "none",
                lineHeight: 1,
              }}
            >
              ✦
            </span>
          ) : (
            <div
              key={s.id}
              style={{
                position: "absolute",
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                borderRadius: "50%",
                backgroundColor: `${s.color}0.35)`,
                animation: `twinkle ${s.duration}s ${s.delay}s ease-in-out infinite`,
              }}
            />
          )
        )}

        {/* Fixed decorative sparkle characters + ★ sticker confetti */}
        {DECO_STARS.map((s, i) => (
          <span
            key={`deco-${i}`}
            style={{
              position: "absolute",
              left: `${s.x}%`,
              top: `${s.y}%`,
              fontSize: `${s.size}px`,
              color: s.color,
              opacity: s.opacity,
              animation: `${s.anim} ${s.dur}s ${s.delay}s ease-in-out infinite`,
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            {s.char}
          </span>
        ))}
      </div>
    </>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  const navLinks = [
    { href: "/",            label: "Home"     },
    { href: "/photography", label: "Artworks" },
    { href: "/writing",     label: "Writing"  },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative">
      <Atmosphere />

      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight no-underline transition-colors select-none"
            style={{ color: "#2a1a3e" }}
          >
            Noor Sharlin Jahan
          </Link>
          <span
            className="text-[10px] tracking-[0.2em] uppercase"
            style={{ color: "#b48cff" }}
          >
            Operations&nbsp;&middot;&nbsp;Education&nbsp;&middot;&nbsp;Arts Administration
          </span>
        </div>
        <nav className="flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-[0.16em] uppercase transition-colors no-underline font-medium"
              style={
                location === link.href ||
                (link.href !== "/" && location.startsWith(link.href))
                  ? { color: "#ff5fa2" }
                  : { color: "rgba(42,26,62,0.38)" }
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-6 pb-20 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer
        className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6"
        style={{ borderTop: "1px solid rgba(42,26,62,0.10)" }}
      >
        <div className="gold-divider mb-4" />
        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[10px] tracking-widest uppercase"
          style={{ color: "rgba(42,26,62,0.32)" }}
        >
          <span>Noor Sharlin Jahan</span>
          <div className="flex items-center gap-5">
            <a
              href="mailto:noorjahan@gmail.com"
              className="no-underline normal-case tracking-normal text-xs transition-colors hover:text-pink-500"
              style={{ color: "rgba(42,26,62,0.40)" }}
            >
              noorjahan@gmail.com
            </a>
            <span>Queens, NY</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
