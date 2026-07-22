import { artworks, settings } from "../lib/content";

export default function Photography() {
  const blurb = settings.art_blurb;

  return (
    <div className="flex-1 flex flex-col">
      {/* ── Header ── */}
      <div
        className="pt-10 pb-6"
        style={{ borderBottom: "1px solid rgba(42,26,62,0.10)" }}
      >
        <div>
          <p
            className="text-[10px] tracking-[0.2em] uppercase mb-2"
            style={{ color: "#ff5fa2" }}
          >
            Gallery
          </p>
          <h1
            className="text-3xl font-semibold tracking-tight"
            style={{ color: "#2a1a3e" }}
          >
            Artworks
          </h1>
        </div>
      </div>

      {/* ── Blurb / Artist statement ── */}
      {blurb && (
        <div className="mt-6 mb-4">
          <p
            className="text-sm leading-relaxed max-w-2xl pl-4 whitespace-pre-line"
            style={{
              color: "rgba(42,26,62,0.60)",
              borderLeft: "2px solid rgba(255,95,162,0.35)",
            }}
          >
            {blurb}
          </p>
        </div>
      )}

      {/* ── Empty state ── */}
      {artworks.length === 0 && (
        <div className="flex-1 min-h-[320px] flex items-center justify-center">
          <p className="text-sm" style={{ color: "rgba(42,26,62,0.30)" }}>
            No artworks yet.
          </p>
        </div>
      )}

      {/* ── Masonry grid ── */}
      {artworks.length > 0 && (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 pb-12">
          {artworks.map((art) => (
            <div
              key={art.id}
              className="break-inside-avoid mb-4 group relative rounded-2xl overflow-hidden art-card-glow"
              style={{
                background: "rgba(255,255,255,0.70)",
                boxShadow: "0 2px 12px rgba(42,26,62,0.08)",
              }}
            >
              <img
                src={art.url}
                alt={art.caption || "Artwork"}
                className="w-full h-auto block"
                loading="lazy"
              />

              {/* Hover overlay — caption display */}
              {art.caption && (
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3"
                  style={{
                    background: "linear-gradient(to top, rgba(26,10,50,0.88) 0%, transparent 60%)",
                  }}
                >
                  <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.70)" }}>
                    {art.caption}
                  </p>
                </div>
              )}

              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all"
                style={{ boxShadow: "inset 0 0 0 2px rgba(255,95,162,0.22)" }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
