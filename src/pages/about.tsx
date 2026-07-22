import { useState, useRef, useEffect } from "react";
import { Upload } from "lucide-react";

const LS_ABOUT_PHOTO = "nsj_about_photo";

const timeline = [
  {
    category: "Visual History, Archiving & Asset Care",
    color: "pink" as const,
    roles: [
      {
        org: "Christie's New York",
        desc: "Managed data integrity and digitization frameworks for high-value fine art assets, coordinating complex operational logistics across multiple departments.",
      },
      {
        org: "NYC Schools Construction Authority (SCA)",
        desc: "Tracked public art installations across New York City's public schools and supported the full lifecycle of municipal school art assets through inter-agency coordination.",
      },
      {
        org: "The City College of New York",
        desc: "Processed and preserved historical records for special collections, building database entries and supporting long-term archival sustainability.",
      },
    ],
  },
  {
    category: "Arts Education & Visual Literacy",
    color: "white" as const,
    roles: [
      {
        org: "Visual Arts Teacher & Advisor",
        desc: "NYC DOE · Success Academy · Young Women's Leadership School. Designed studio art curricula for diverse student populations, guided practice across multiple mediums, and used visual arts as a framework for fostering critical thinking and cultural analysis.",
      },
    ],
  },
];

const skills = [
  { label: "Systems", value: "Museum+, Workday, MS Office (Excel), Google Workspace" },
  { label: "Creative", value: "Digital Photography, Photoshop, Final Cut Pro, Art Inspection & Inventory Management" },
  { label: "Languages", value: "Fluent in Bangla, Hindi, and Urdu" },
  { label: "Education", value: "B.A. in Art History, Cum Laude — The City College of New York" },
];

export default function About() {
  const [photo, setPhoto] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPhoto(localStorage.getItem(LS_ABOUT_PHOTO) || "");
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const result = ev.target?.result as string;
      setPhoto(result);
      localStorage.setItem(LS_ABOUT_PHOTO, result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-5xl mx-auto w-full py-10 space-y-20">

      {/* ── Bio + portrait ── */}
      <div className="flex flex-col md:flex-row-reverse gap-14 lg:gap-20">

        {/* Portrait — right */}
        <div className="w-full md:w-64 shrink-0 flex flex-col gap-3">
          <div
            className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-pink-500/30 bg-white/[0.03] cursor-pointer group"
            onClick={() => fileRef.current?.click()}
          >
            {photo ? (
              <img src={photo} alt="Noor Sharlin Jahan" className="w-full h-full object-cover" />
            ) : (
              <div className="flex flex-col items-center justify-center h-full gap-3 text-white/20 group-hover:text-pink-400 transition-colors">
                <Upload className="w-6 h-6" />
                <span className="text-sm tracking-widest uppercase">Upload photo</span>
              </div>
            )}
            {photo && (
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-xs text-white uppercase tracking-widest bg-black/50 px-3 py-1.5 rounded">Change</span>
              </div>
            )}
          </div>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
          {!photo && (
            <p className="text-[11px] text-white/20 text-center tracking-wide">Click frame to upload your portrait</p>
          )}
        </div>

        {/* Bio — left */}
        <div className="flex flex-col justify-center space-y-6 flex-1">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-pink-400/70 mb-2">About</p>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-1">Noor Sharlin Jahan</h1>
            <p className="text-sm tracking-[0.14em] uppercase text-white/30">
              Visual Archivist · Educator · Art Historian · Writer
            </p>
          </div>

          <div className="space-y-4 text-white/55 font-light leading-relaxed text-lg">
            <p>
              I am a Queens, New York-based visual archivist, educator, and art historian holding a B.A. in Art History (Cum Laude) from The City College of New York.
            </p>
            <p>
              My work is driven by a profound curiosity about how images—whether painted, photographed, or algorithmically generated—carry the physical, emotional, and political weight of the cultures that produced them.
            </p>
            <p>
              My practice spans the preservation of visual history through archival and administrative work, the teaching of critical visual literacy in New York City classrooms, and the research of intersections between art, technology, and cultural identity.
            </p>
            <p className="border-l-2 border-pink-500/30 pl-5 italic text-white/40 text-base">
              In each of these roles, I return to a single question: what does an image carry that a text cannot?
            </p>
          </div>
        </div>
      </div>

      {/* ── Career timeline ── */}
      <div className="space-y-10">
        <div className="border-b border-white/[0.07] pb-5">
          <p className="text-[11px] tracking-[0.2em] uppercase text-pink-400/70 mb-2">Experience</p>
          <h2 className="text-3xl font-light text-white">Professional Timeline</h2>
        </div>

        <div className="space-y-12">
          {timeline.map((group) => (
            <div key={group.category} className="space-y-5">
              <h3 className={`text-xs tracking-[0.18em] uppercase ${group.color === 'pink' ? 'text-pink-400/70' : 'text-white/35'}`}>
                {group.category}
              </h3>
              <div className="space-y-7 pl-5 border-l border-white/[0.08]">
                {group.roles.map((role) => (
                  <div key={role.org} className="relative">
                    <div className={`absolute -left-[1.375rem] top-2 w-2 h-2 rounded-full border ${group.color === 'pink' ? 'border-pink-500 bg-background' : 'border-white/30 bg-background'}`} />
                    <h4 className="text-lg font-normal text-white/90 mb-1">{role.org}</h4>
                    <p className="text-white/40 font-light text-base leading-relaxed">{role.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Skills ── */}
      <div className="space-y-8">
        <div className="border-b border-white/[0.07] pb-5">
          <p className="text-[11px] tracking-[0.2em] uppercase text-pink-400/70 mb-2">Skills</p>
          <h2 className="text-3xl font-light text-white">Technical Profile</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((s) => (
            <div key={s.label} className="border border-white/[0.07] rounded-xl p-5">
              <p className="text-[11px] uppercase tracking-[0.16em] text-pink-400/60 mb-2">{s.label}</p>
              <p className="text-white/50 font-light text-base leading-relaxed">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Contact ── */}
      <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-white/25 mb-1">Contact</p>
          <a href="mailto:noorjahan@gmail.com" className="text-2xl font-light text-white/80 hover:text-pink-400 transition-colors no-underline">
            noorjahan@gmail.com
          </a>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-widest text-white/25 mb-1">Location</p>
          <p className="text-2xl font-light text-white/80">Queens, New York</p>
        </div>
      </div>

    </div>
  );
}
