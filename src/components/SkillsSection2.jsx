// components/SkillsSection.jsx
// Stack: Next.js + Tailwind CSS + HeroUI
// Theme: Terminal / Dark — matches HeroSection & AboutSection

"use client";

const brandColors = {
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  React: "#61DAFB",
  "Next.js": "#ffffff",
  "Tailwind CSS": "#06B6D4",
  DaisyUI: "#FF69B4",
  HeroUI: "#7C3AED",
  "Node.js": "#339933",
  "Express.js": "#ffffff",
  MongoDB: "#47A248",
  "Better Auth": "#00E676",
  "Google OAuth": "#4285F4",
  Railway: "#B847FF",
  Vercel: "#ffffff",
  Netlify: "#00C7B7",
  "Adobe Photoshop": "#31A8FF",
  "Adobe Illustrator": "#FF9A00",
  "Adobe InDesign": "#FF3366",
  "MS PowerPoint": "#D24726",
  "Bangla Essay": "#00E676",
  "Urdu Translation": "#E040FB",
  "Arabic Translation": "#FFD600",
};

const categories = [
  {
    label: "Frontend",
    comment: "// what the user sees",
    accent: "#00E676",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "DaisyUI" },
      { name: "HeroUI" },
    ],
  },
  {
    label: "Backend & Database",
    comment: "// what runs under the hood",
    accent: "#00BCD4",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
  },
  {
    label: "Auth & Deployment",
    comment: "// ship it to the world",
    accent: "#E040FB",
    skills: [
      { name: "Better Auth" },
      { name: "Google OAuth" },
      { name: "Vercel" },
      { name: "Netlify" },
    ],
  },
  {
    label: "Graphic Design",
    comment: "// design that speaks",
    accent: "#FF9A00",
    skills: [
      { name: "Adobe Photoshop" },
      { name: "Adobe Illustrator" },
      { name: "Adobe InDesign" },
      { name: "MS PowerPoint" },
    ],
  },
  {
    label: "Writing Skills",
    comment: "// words that connect",
    accent: "#FFD600",
    skills: [
      { name: "Bangla Essay" },
      { name: "Urdu Translation" },
      { name: "Arabic Translation" },
    ],
  },
];

// Simplified Language Data
const languages = [
  {
    name: "বাংলা",
    nativeName: "Bangla",
    level: "Native",
    color: "#00E676",
  },
  {
    name: "English",
    nativeName: "English",
    level: "Elementary",
    color: "#61DAFB",
  },
  {
    name: "العربية",
    nativeName: "Arabic",
    level: "Semi-Professional",
    color: "#FFD600",
  },
  {
    name: "اردو",
    nativeName: "Urdu",
    level: "Semi-Professional",
    color: "#E040FB",
  },
  {
    name: "हिन्दी",
    nativeName: "Hindi",
    level: "Elementary",
    color: "#FF9A00",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[#00E676] text-sm">›_</span>
          <span className="font-mono text-xs text-[#00E676]/50 tracking-widest uppercase">
            skills.stack
          </span>
          <div className="flex-1 h-px bg-[#00E676]/10" />
        </div>

        {/* Heading */}
        <div className="w-11/12 mx-auto mb-14">
          <h2 className="font-mono text-3xl md:text-4xl font-black text-white">
            Technology &{" "}
            <span className="text-[#00E676]">Skills</span>
          </h2>
          <p className="font-mono text-sm text-[#8a9a8e] mt-2">
            // my current skill set — always expanding
          </p>
        </div>

        {/* 5 category columns */}
        <div className="w-11/12 mx-auto grid grid-cols-1 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.label} cat={cat} />
          ))}
        </div>

        {/* ── Language Section ── */}
        <div className="w-11/12 mx-auto mt-10 backdrop-blur-[1.5px]">
          <div
            className="glow-card rounded-sm border p-6 flex flex-col gap-6"
            style={{
              borderColor: "#7C3AED20",
              background: "#7C3AED05",
              "--glow": `0 0 20px #7C3AED15, 0 0 60px #7C3AED08, inset 0 0 20px #7C3AED05`,
              "--glow-border": "#7C3AED40",
            }}
          >
            {/* Header */}
            <div className="border-b pb-4" style={{ borderColor: "#7C3AED15" }}>
              <h3 className="font-mono font-bold text-base tracking-wide" style={{ color: "#A78BFA" }}>
                Languages
              </h3>
              <p className="font-mono text-xs mt-1" style={{ color: "#A78BFA50" }}>
                // 5 languages, many stories
              </p>
            </div>

            {/* Simple Language Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="rounded-sm border p-4 flex flex-col items-center text-center justify-between gap-2 transition-transform duration-200 hover:-translate-y-1"
                  style={{
                    borderColor: `${lang.color}25`,
                    background: `${lang.color}06`,
                  }}
                >
                  <div className="flex flex-col items-center">
                    <span className="font-mono font-bold text-lg" style={{ color: lang.color }}>
                      {lang.name}
                    </span>
                    <span className="font-mono text-[10px] text-gray-400">
                      ({lang.nativeName})
                    </span>
                  </div>

                  <span
                    className="font-mono text-xs font-medium px-2 py-0.5 rounded-sm mt-2 border"
                    style={{
                      color: lang.color,
                      borderColor: `${lang.color}40`,
                      background: `${lang.color}10`,
                    }}
                  >
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function CategoryCard({ cat }) {
  return (
    <div
      className="glow-card rounded-sm backdrop-blur-[1.5px] border p-6 flex flex-col gap-6"
      style={{
        borderColor: `${cat.accent}20`,
        background: `${cat.accent}05`,
        "--glow": `0 0 20px ${cat.accent}15, 0 0 60px ${cat.accent}08, inset 0 0 20px ${cat.accent}05`,
        "--glow-border": `${cat.accent}40`,
      }}
    >
      {/* Card header */}
      <div className="border-b pb-4" style={{ borderColor: `${cat.accent}15` }}>
        <h3
          className="font-mono font-bold text-base tracking-wide"
          style={{ color: cat.accent }}
        >
          {cat.label}
        </h3>
        <p className="font-mono text-xs mt-1" style={{ color: `${cat.accent}50` }}>
          {cat.comment}
        </p>
      </div>

      {/* Skills grid — 4 per row */}
      <div className="grid grid-cols-4 gap-y-6 gap-x-2">
        {cat.skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} accent={cat.accent} />
        ))}
      </div>
    </div>
  );
}

function SkillItem({ skill, accent }) {
  const brandColor = brandColors[skill.name] || accent;

  return (
    <div className="group flex flex-col items-center gap-2 cursor-default">
      <div className="w-8 h-8 md:w-12 md:h-12 lg:h-16 lg:w-16 flex items-center justify-center rounded-sm transition-transform duration-200 group-hover:-translate-y-1">
        <img
          src={`/icons/${skill.name
            .toLowerCase()
            .trim()
            .replace(/[\s.]+/g, "-")
            .replace(/[^a-z0-9-]/g, "")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "")
          }.svg`}
          alt={skill.name}
          className="w-full h-full"
        />
      </div>
      <span
        className="font-mono text-[8px] md:text-[16px] text-center leading-tight tracking-wide w-full"
        style={{ color: brandColor }}
      >
        {skill.name}
      </span>
    </div>
  );
}