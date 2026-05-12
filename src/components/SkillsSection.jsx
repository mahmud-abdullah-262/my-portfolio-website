// components/SkillsSection.jsx
// Stack: Next.js + Tailwind CSS + HeroUI
// Theme: Terminal / Dark — matches HeroSection & AboutSection

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
      { name: "NextJS" },
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
];

export default function SkillsSection() {
  return (
    <section id="skills" className=" py-24 px-6 md:px-16 lg:px-24">
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
            Technologies I{" "}
            <span className="text-[#00E676]">Work With</span>
          </h2>
          <p className="font-mono text-sm text-[#8a9a8e] mt-2">
            // my current skill set — always expanding
          </p>
        </div>

        {/* 3 category columns */}
        <div className="w-11/12 mx-auto grid grid-cols-1 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.label} cat={cat} />
          ))}
        </div>

      </div>
    </section>
  );
}

function CategoryCard({ cat }) {
  return (
    <div
      className="rounded-sm border p-6 flex flex-col gap-6"
      style={{
        borderColor: `${cat.accent}20`,
        background: `${cat.accent}05`,
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

      {/* Logo placeholder — replace inner content with your <img> or SVG icon */}
      <div
        className="w-8 h-8 md:w-12 md:h-12 lg:h-16 lg:w-16 flex items-center justify-center rounded-sm transition-transform duration-200 group-hover:-translate-y-1"
        // style={{
        //   background: `${brandColor}12`,
        //   border: `1px solid ${brandColor}20`,
        // }}
      >
        
        
          <img
            src={`/icons/${skill.name
  .toLowerCase()
  .trim()                          // আগে-পরের space সরাবে
  .replace(/[\s.]+/g, "-")         // space ও dot → হাইফেন
  .replace(/[^a-z0-9-]/g, "")     // অন্য special char সরাবে
  .replace(/-+/g, "-")            // একাধিক হাইফেন → একটা হাইফেন
  .replace(/^-|-$/g, "")          // শুরু/শেষের হাইফেন সরাবে
}.svg`}
            alt={skill.name}
            className="w-full h-full"
          />
       
       
      </div>

      {/* Skill name in brand color */}
      <span
        className="font-mono text-[8px] md:text-[16px] text-center leading-tight tracking-wide w-full"
        style={{ color: brandColor }}
      >
        {skill.name}
      </span>
    </div>
  );
}
