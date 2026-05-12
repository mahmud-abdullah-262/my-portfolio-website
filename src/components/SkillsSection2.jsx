// components/SkillsSection.jsx
// Stack: Next.js + Tailwind CSS + HeroUI
// Theme: Terminal / Dark — matches HeroSection & AboutSection

"use client";
import { useEffect, useRef, useState } from "react";

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

// Language data
const languages = [
  {
    name: "বাংলা",
    type: "Native Language",
    color: "#00E676",
    skills: { Speaking: 95, Writing: 95, Listening: 95, Reading: 95 },
  },
  {
    name: "English",
    type: "Second Language",
    color: "#61DAFB",
    skills: { Speaking: 45, Writing: 30, Listening: 75, Reading: 85 },
  },
  {
    name: "العربية",
    type: "Second Language",
    color: "#FFD600",
    skills: { Speaking: 60, Writing: 60, Listening: 75, Reading: 80 },
  },
  {
    name: "اردو",
    type: "Second Language",
    color: "#E040FB",
    skills: { Speaking: 60, Writing: 40, Listening: 75, Reading: 80 },
  },
  {
    name: "हिन्दी",
    type: "Second Language",
    color: "#FF9A00",
    skills: { Speaking: 60, Writing: 0, Listening: 75, Reading: 0 },
  },
];

const skillAxes = ["Speaking", "Listening", "Reading", "Writing"];

function RadarChart({ lang, size = 160, animate = false }) {
  const [progress, setProgress] = useState(animate ? 0 : 1);
  const center = size / 2;
  const maxR = size * 0.38;
  const levels = 4;
  const axes = skillAxes;
  const n = axes.length;

  useEffect(() => {
    if (!animate) return;
    let start = null;
    const duration = 900;
    const raf = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setProgress(p);
      if (p < 1) requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(id);
  }, [animate]);

  const angleOf = (i) => (Math.PI * 2 * i) / n - Math.PI / 2;

  const pointOnAxis = (i, r) => ({
    x: center + r * Math.cos(angleOf(i)),
    y: center + r * Math.sin(angleOf(i)),
  });

  // Grid rings
  const rings = Array.from({ length: levels }, (_, l) => {
    const r = (maxR * (l + 1)) / levels;
    const pts = axes.map((_, i) => pointOnAxis(i, r));
    return pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + "Z";
  });

  // Data polygon
  const dataPath = axes
    .map((ax, i) => {
      const val = (lang.skills[ax] / 100) * maxR * progress;
      const pt = pointOnAxis(i, val);
      return `${i === 0 ? "M" : "L"}${pt.x},${pt.y}`;
    })
    .join(" ") + "Z";

  // Axis lines
  const axisLines = axes.map((_, i) => {
    const outer = pointOnAxis(i, maxR);
    return { x1: center, y1: center, x2: outer.x, y2: outer.y };
  });

  // Labels
  const labels = axes.map((ax, i) => {
    const pt = pointOnAxis(i, maxR + 16);
    return { label: ax, x: pt.x, y: pt.y };
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Grid rings */}
      {rings.map((d, i) => (
        <path key={i} d={d} fill="none" stroke={`${lang.color}20`} strokeWidth="1" />
      ))}
      {/* Axis lines */}
      {axisLines.map((l, i) => (
        <line key={i} {...l} stroke={`${lang.color}25`} strokeWidth="1" />
      ))}
      {/* Data fill */}
      <path d={dataPath} fill={`${lang.color}20`} stroke={lang.color} strokeWidth="1.5" />
      {/* Data points */}
      {axes.map((ax, i) => {
        const val = (lang.skills[ax] / 100) * maxR * progress;
        const pt = pointOnAxis(i, val);
        return <circle key={i} cx={pt.x} cy={pt.y} r="3" fill={lang.color} />;
      })}
      {/* Labels */}
      {labels.map((l, i) => (
        <text
          key={i}
          x={l.x}
          y={l.y}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="7"
          fontFamily="monospace"
          fill={`${lang.color}99`}
        >
          {l.label}
        </text>
      ))}
    </svg>
  );
}

function LanguageCard({ lang }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-sm border p-4 flex flex-col items-center gap-3 transition-opacity duration-700"
      style={{
        borderColor: `${lang.color}25`,
        background: `${lang.color}06`,
        opacity: visible ? 1 : 0,
      }}
    >
      <RadarChart lang={lang} size={160} animate={visible} />

      {/* Skill bars */}
      <div className="w-full flex flex-col gap-1.5 mt-1">
        {skillAxes.map((ax) => (
          <div key={ax} className="flex items-center gap-2">
            <span className="font-mono text-[9px] w-14 text-right" style={{ color: `${lang.color}80` }}>
              {ax}
            </span>
            <div className="flex-1 h-1 rounded-full" style={{ background: `${lang.color}15` }}>
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: visible ? `${lang.skills[ax]}%` : "0%",
                  background: lang.color,
                  transitionDelay: "300ms",
                }}
              />
            </div>
            <span className="font-mono text-[9px] w-6" style={{ color: `${lang.color}80` }}>
              {lang.skills[ax]}%
            </span>
          </div>
        ))}
      </div>

      {/* Lang name */}
      <div className="text-center mt-1">
        <p className="font-mono font-bold text-base" style={{ color: lang.color }}>
          {lang.name}
        </p>
        <p className="font-mono text-[9px] mt-0.5" style={{ color: `${lang.color}55` }}>
          {lang.type}
        </p>
      </div>
    </div>
  );
}

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
        <div className="w-11/12 mx-auto mt-10 backdrop-blur-[1.5px]"
        
        >
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

            {/* Radar grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {languages.map((lang) => (
                <LanguageCard key={lang.name} lang={lang} />
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
  }}>
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
