// components/ExperienceEducationSection.jsx
// Stack: Next.js + Tailwind CSS + HeroUI
// Theme: Terminal / Dark — matches previous sections

import Image from "next/image";

// ── EXPERIENCE DATA ────────────────────────────────────────────────────────
const experiences = [
  {
    id: 1,
    role: "Project Executive",
    department: "Design Team",
    company: "10 Minute School",
    type: "Part-time",
    description: "Worked in the design team of Bangladesh's top online educational institution.",
    logo: "/logos/10ms.png",         // image 1 (this message)
    accentColor: "#E53935",
    generic: false,
  },
  {
    id: 2,
    role: "Assist. Designer & Social Media Executive",
    department: null,
    company: "Shajao.com",
    type: "Part-time",
    description: "Handled design and social media for a home decor company.",
    logo: "/logos/shajao.png",       // image 5 (previous message)
    accentColor: "#ffffff",
    generic: false,
  },
  {
    id: 3,
    role: "Teacher",
    department: null,
    company: "Gazirchat Darul Ulum Madrasa",
    type: "2025 – Present",
    description: "Teaching at a reputed madrasa institution.",
    logo: "/logos/madrasa-generic.png", // image 2 (this message)
    accentColor: "#00E676",
    generic: false,
  },
  {
    id: 4,
    role: "Teacher for Arabic",
    department: null,
    company: "Hazi Afaz Uddin Cadet Madrasa",
    type: "2022 – 2024",
    description: "Taught Arabic language and literature at a cadet madrasa.",
    logo: "/logos/madrasa-generic.png",    // image 2 (this message)
    accentColor: "#00E676",
    generic: false,
  },
  {
    id: 5,
    role: "Freelance Translator & Editor",
    department: null,
    company: "Somokalin Prokashon",
    type: "Freelance",
    description: "Translation and editorial work for a notable Bengali publication house.",
    logo: "/logos/somokalin.png",    // image 2 (previous message)
    accentColor: "#2196F3",
    generic: false,
  },
  {
    id: 6,
    role: "Freelance Translator & Editor",
    department: null,
    company: "Nashat Publication",
    type: "Freelance",
    description: "Contributed as a translator and editor for Nashat Publication.",
    logo: "/logos/nashat.png",       // image 3 (previous message)
    accentColor: "#4F7A8A",
    generic: false,
  },
  {
    id: 7,
    role: "Freelance Translator & Editor",
    department: null,
    company: "Ilham Publication",
    type: "Freelance",
    description: "Worked on translation and editing projects for Ilham Publication.",
    logo: "/logos/ilham.png",        // image 4 (previous message)
    accentColor: "#00E676",
    generic: false,
  },
];

// ── EDUCATION DATA ─────────────────────────────────────────────────────────
const education = [
  {
    id: 1,
    degree: "M.A. Arabic and Islamic Studies",
    institution: "Al-haiatul Ulya Lil-jamiatil Qawmia Bangladesh",
    year: "2018",
    logo: "/logos/alhaiatul.png",    // image 3 (this message)
    accentColor: "#00E676",
    generic: false,
  },
  {
    id: 2,
    degree: "Islamic Law and Fiqh",
    institution: "Madrasatul Abrar, Ashuliya, Dhaka",
    year: "2020",
    logo: "/logos/madrasa-generic.png", // image 2 (this message)
    accentColor: "#00E676",
    generic: false,
  },
  {
    id: 3,
    degree: "SSC",
    institution: "Open School Program, Open University",
    year: "2020",
    logo: "/logos/bou.png",          // image 4 (this message)
    accentColor: "#2196F3",
    generic: false,
  },
  {
    id: 4,
    degree: "HSC",
    institution: "Open University School Program",
    year: "2023 – 2024",
    logo: "/logos/bou.png",          // image 4 (this message)
    accentColor: "#2196F3",
    generic: false,
  },
  {
    id: 5,
    degree: "Professional Graphic Design",
    institution: "Creative IT Institute, Dhaka",
    year: "2020 – 2021",
    logo: "/logos/creative-it.png",  // image 6 (previous message)
    accentColor: "#E53935",
    generic: false,
  },
  {
    id: 6,
    degree: "Diploma in Homoeopathic Medicine & Surgery (DHMS)",
    institution: "Uttora Homoeopathic College, Dhaka",
    year: "2022 – Now",
    logo: "/logos/homeo.png",
    accentColor: "#00E676",
    generic: false,
  },
  {
    id: 7,
    degree: "Complete Web Development",
    institution: "Programming Hero",
    year: "Batch 13, 2026",
    logo: "/logos/programming-hero.png", // image 7 (previous message)
    accentColor: "#9C27B0",
    generic: false,
  },
];

// ── GENERIC LOGO PLACEHOLDER ───────────────────────────────────────────────
function GenericLogo({ label, accent }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center rounded-sm"
      style={{ background: `${accent}15`, border: `1px solid ${accent}25` }}
    >
      <span className="font-mono text-base font-bold" style={{ color: `${accent}80` }}>
        {label.slice(0, 2).toUpperCase()}
      </span>
    </div>
  );
}

// ── LOGO BOX ───────────────────────────────────────────────────────────────
function LogoBox({ item }) {
  if (item.generic) {
    return <GenericLogo label={item.institution || item.company} accent={item.accentColor} />;
  }
  return (
    <div className="relative w-full h-full bg-white rounded-sm overflow-hidden">
      <Image
        src={item.logo}
        alt={item.company || item.institution}
        fill
        className="object-cover"
      />
    </div>
  );
}

// ── EXPERIENCE CARD ────────────────────────────────────────────────────────
function ExperienceCard({ item, isLast }) {
  return (
    <div className="relative flex gap-5 group backdrop-blur-[1.5px]">
      {/* Timeline spine */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className="w-3 h-3 rounded-full mt-1 z-10 ring-4 ring-[#0f0f0d] transition-transform duration-300 group-hover:scale-125"
          style={{ backgroundColor: item.accentColor }}
        />
        {!isLast && (
          <div
            className="w-px flex-1 mt-1 min-h-[2rem]"
            style={{ background: `linear-gradient(to bottom, ${item.accentColor}50, transparent)` }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="flex-1 mb-8 p-4 rounded-sm border transition-all duration-300 group-hover:translate-x-1"
        style={{
          borderColor: `${item.accentColor}20`,
          background: `${item.accentColor}06`,
        }}
      >
        {/* Top row: logo + text + badge */}
        <div className="flex items-start gap-3">
          {/* Logo — 14x14 (56px) */}
          <div className="w-14 h-14 shrink-0 rounded-sm overflow-hidden">
            <LogoBox item={item} />
          </div>

          {/* Text block */}
          <div className="flex-1 min-w-0 space-y-4">
            {/* Badge — top right corner */}
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="font-mono font-bold text-sm text-white leading-snug">
                  {item.role}
                </h4>
                {item.department && (
                  <span
                    className="font-mono text-[10px]"
                    style={{ color: `${item.accentColor}70` }}
                  >
                    {item.department}
                  </span>
                )}
              </div>
              {/* Badge pinned to top-right */}
              <span
                className="font-mono text-[10px] px-2 py-0.5 rounded-sm flex-shrink-0 whitespace-nowrap self-start"
                style={{
                  color: item.accentColor,
                  background: `${item.accentColor}15`,
                  border: `1px solid ${item.accentColor}30`,
                }}
              >
                {item.type}
              </span>
            </div>

            {/* Company name — visible, brand colored */}
            <p
              className="font-mono text-sm font-semibold mt-1"
              style={{ color: item.accentColor }}
            >
              @ {item.company}
            </p>

            {/* Description */}
            <p className="font-mono text-xs text-[#8a9a8e] mt-1.5 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── EDUCATION CARD ─────────────────────────────────────────────────────────
function EducationCard({ item, isLast }) {
  return (
    <div className="relative flex gap-5 group backdrop-blur-[1.5px]">
      {/* Timeline spine */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-3 h-3 rounded-full mt-1 z-10 ring-4 ring-[#0f0f0d] transition-transform duration-300 group-hover:scale-125"
          style={{ backgroundColor: item.accentColor }}
        />
        {!isLast && (
          <div
            className="w-px flex-1 mt-1 min-h-[2rem]"
            style={{ background: `linear-gradient(to bottom, ${item.accentColor}50, transparent)` }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="flex-1 mb-8 p-4 rounded-sm border transition-all duration-300 group-hover:translate-x-1"
        style={{
          borderColor: `${item.accentColor}20`,
          background: `${item.accentColor}06`,
        }}
      >
        <div className="flex items-start gap-3">
          {/* Logo — 14x14 (56px) */}
          <div className="w-14 h-14 flex-shrink-0 rounded-sm overflow-hidden">
            <LogoBox item={item} />
          </div>

          {/* Text block */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-mono font-bold text-sm text-white leading-snug flex-1">
                {item.degree}
              </h4>
              {/* Year badge — top right */}
              <span
                className="font-mono text-[10px] px-2 py-0.5 rounded-sm flex-shrink-0 whitespace-nowrap self-start"
                style={{
                  color: item.accentColor,
                  background: `${item.accentColor}15`,
                  border: `1px solid ${item.accentColor}30`,
                }}
              >
                {item.year}
              </span>
            </div>

            {/* Institution — visible */}
            <p
              className="font-mono text-sm font-semibold mt-1"
              style={{ color: item.accentColor }}
            >
              @ {item.institution}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── MAIN SECTION ───────────────────────────────────────────────────────────
export default function ExperienceEducationSection() {
  return (
    <section id="experience" className=" py-24 px-6 md:px-16 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[#00E676] text-sm">›_</span>
          <span className="font-mono text-xs text-[#00E676]/50 tracking-widest uppercase">
            experience.education
          </span>
          <div className="flex-1 h-px bg-[#00E676]/10" />
        </div>

        {/* Heading */}
        <div className="w-11/12 mx-auto mb-14">
          <h2 className="font-mono text-3xl md:text-4xl font-black text-white">
            Journey &{" "}
            <span className="text-[#00E676]">Background</span>
          </h2>
          <p className="font-mono text-sm text-[#8a9a8e] mt-2">
            // where I&apos;ve worked and what I&apos;ve studied
          </p>
        </div>

        {/* Two columns */}
        <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          {/* ── EXPERIENCE ── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xs text-[#00E676] tracking-widest uppercase font-bold">
                Experience
              </span>
              <div className="flex-1 h-px bg-[#00E676]/20" />
              <span className="font-mono text-[10px] text-[#00E676]/40">
                {experiences.length} roles
              </span>
            </div>
            {experiences.map((item, index) => (
              <ExperienceCard
                key={item.id}
                item={item}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>

          {/* ── EDUCATION ── */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xs text-[#00BCD4] tracking-widest uppercase font-bold">
                Education
              </span>
              <div className="flex-1 h-px bg-[#00BCD4]/20" />
              <span className="font-mono text-[10px] text-[#00BCD4]/40">
                {education.length} degrees
              </span>
            </div>
            {education.map((item, index) => (
              <EducationCard
                key={item.id}
                item={item}
                isLast={index === education.length - 1}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
