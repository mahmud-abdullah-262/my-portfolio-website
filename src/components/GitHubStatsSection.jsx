// components/GitHubStatsSection.jsx
// Stack: Next.js + Tailwind CSS + HeroUI
// Theme: Terminal / Dark — matches previous sections

import Image from "next/image";

const GITHUB_USERNAME = "mahmud-abdullah-262";
const CHALLENGE_TOTAL = 100;
const CHALLENGE_DONE = 15;
const CHALLENGE_PERCENT = Math.round((CHALLENGE_DONE / CHALLENGE_TOTAL) * 100);

const STREAK_URL = `https://streak-stats.demolab.com?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&ring=00E676&fire=00E676&currStreakLabel=00E676&sideLabels=8a9a8e&dates=8a9a8e&stroke=ffffff10`;
const GRAPH_URL = `https://ghchart.rshah.org/00E676/${GITHUB_USERNAME}`;

const stats = [
  { label: "Total Commits", value: "350+", icon: "⌥", color: "#00E676" },
  { label: "Repositories", value: "65", icon: "◈", color: "#00BCD4" },
  { label: "Challenge Done", value: "15/100", icon: "⚔", color: "#E040FB" },
];

const languages = [
  { name: "JavaScript", percent: 55, color: "#F7DF1E" },
  { name: "HTML", percent: 28, color: "#E34F26" },
  { name: "CSS", percent: 17, color: "#1572B6" },
];

export default function GitHubStatsSection() {
  return (
    <section id="github" className="bg-[#0f0f0d] py-24 px-6 md:px-16 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[#00E676] text-sm">›_</span>
          <span className="font-mono text-xs text-[#00E676]/50 tracking-widest uppercase">
            github.activity
          </span>
          <div className="flex-1 h-px bg-[#00E676]/10" />
        </div>

        {/* Heading */}
        <div className="w-11/12 mx-auto mb-14">
          <h2 className="font-mono text-3xl md:text-4xl font-black text-white">
            Code &{" "}
            <span className="text-[#00E676]">Contributions</span>
          </h2>
          <p className="font-mono text-sm text-[#8a9a8e] mt-2">
            // open source activity — github/{GITHUB_USERNAME}
          </p>
        </div>

        <div className="w-11/12 mx-auto flex flex-col gap-6">

          {/* ── ROW 1: Stats + Languages ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Stats cards */}
            <div className="rounded-sm border border-[#00E676]/10 bg-[#00E676]/[0.02] p-5 flex flex-col gap-4">
              <p className="font-mono text-xs text-[#00E676]/40 tracking-widest uppercase">
                // overview
              </p>
              <div className="flex flex-col gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between p-3 rounded-sm border"
                    style={{
                      borderColor: `${stat.color}15`,
                      background: `${stat.color}06`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-base" style={{ color: stat.color }}>
                        {stat.icon}
                      </span>
                      <span className="font-mono text-xs text-[#8a9a8e]">
                        {stat.label}
                      </span>
                    </div>
                    <span
                      className="font-mono font-black text-lg"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top languages */}
            <div className="rounded-sm border border-[#00E676]/10 bg-[#00E676]/[0.02] p-5 flex flex-col gap-4">
              <p className="font-mono text-xs text-[#00E676]/40 tracking-widest uppercase">
                // top languages
              </p>

              {/* Stacked bar */}
              <div className="flex w-full h-2.5 rounded-full overflow-hidden gap-0.5">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${lang.percent}%`,
                      backgroundColor: lang.color,
                      boxShadow: `0 0 8px ${lang.color}60`,
                    }}
                  />
                ))}
              </div>

              {/* Language list */}
              <div className="flex flex-col gap-3 mt-1">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-3">
                    {/* Bar */}
                    <div className="flex-1 h-1.5 bg-[#1a1a18] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${lang.percent}%`,
                          backgroundColor: lang.color,
                        }}
                      />
                    </div>
                    {/* Name + percent */}
                    <div className="flex items-center justify-between w-32 flex-shrink-0">
                      <span
                        className="font-mono text-xs font-semibold"
                        style={{ color: lang.color }}
                      >
                        {lang.name}
                      </span>
                      <span className="font-mono text-xs text-[#8a9a8e]/50">
                        {lang.percent}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* GitHub link */}
              <a
                href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] text-[#00E676]/30 hover:text-[#00E676]/70 transition-colors mt-auto pt-2 flex items-center gap-1"
              >
                <span>↗</span> view all repositories
              </a>
            </div>
          </div>

          {/* ── 100 PROJECTS CHALLENGE ── */}
          <div className="rounded-sm border border-[#00E676]/20 bg-[#00E676]/[0.03] p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[#00E676] text-lg">⚔</span>
                  <h3 className="font-mono font-black text-white text-base tracking-wide">
                    100 Projects Challenge
                  </h3>
                </div>
                <p className="font-mono text-xs text-[#8a9a8e]">
                  // building in public — one project at a time
                </p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-mono font-black text-5xl text-[#00E676] leading-none">
                  {CHALLENGE_DONE}
                </span>
                <span className="font-mono text-xl text-[#00E676]/40 leading-none">
                  /{CHALLENGE_TOTAL}
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="relative w-full h-3 bg-[#1a1a18] rounded-full overflow-hidden border border-[#00E676]/10">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${CHALLENGE_PERCENT}%`,
                  background: "linear-gradient(90deg, #00C853, #00E676, #69F0AE)",
                  boxShadow: "0 0 12px #00E67660",
                }}
              />
            </div>

            <div className="flex justify-between mt-2">
              <span className="font-mono text-[10px] text-[#00E676]/60">
                {CHALLENGE_PERCENT}% complete
              </span>
              <span className="font-mono text-[10px] text-[#8a9a8e]/40">
                {CHALLENGE_TOTAL - CHALLENGE_DONE} remaining
              </span>
            </div>

            {/* Milestone dots */}
            <div className="flex items-center gap-1.5 mt-5 flex-wrap">
              {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((milestone) => {
                const reached = CHALLENGE_DONE >= milestone;
                return (
                  <div
                    key={milestone}
                    className="w-6 h-6 rounded-sm flex items-center justify-center font-mono text-[9px] font-bold transition-all duration-300"
                    style={{
                      background: reached ? "#00E67620" : "transparent",
                      border: `1px solid ${reached ? "#00E676" : "#ffffff10"}`,
                      color: reached ? "#00E676" : "#ffffff20",
                    }}
                  >
                    {milestone}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── STREAK ── */}
          <div className="rounded-sm border border-[#00E676]/10 bg-[#00E676]/[0.02] p-4 flex items-center justify-center">
            <Image
              src={STREAK_URL}
              alt="GitHub Streak"
              width={700}
              height={200}
              className="w-full max-w-2xl"
              unoptimized
            />
          </div>

          {/* ── CONTRIBUTION GRAPH ── */}
          <div className="rounded-sm border border-[#00E676]/10 bg-[#00E676]/[0.02] p-5">
            <p className="font-mono text-xs text-[#00E676]/40 mb-4 tracking-widest uppercase">
              // contribution graph
            </p>
            <img
              src={GRAPH_URL}
              alt="GitHub Contribution Graph"
              className="w-full opacity-80 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </div>

          {/* GitHub profile link */}
          <div className="flex justify-end">
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#00E676]/50 hover:text-[#00E676] transition-colors duration-200 flex items-center gap-1.5"
            >
              <span>↗</span>
              <span>view full profile on GitHub</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
