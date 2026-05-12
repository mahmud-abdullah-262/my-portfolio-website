// components/AboutSection.jsx
// Stack: Next.js + Tailwind CSS + HeroUI
// Theme: Terminal / Dark — matches HeroSection

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import MyPhoto1 from '@/assets/myprofile.png'
import MyPhoto2 from '@/assets/myprofilebw.png'


export default function AboutSection() {
  return (
    <section id="about" className=" py-24 px-6 md:px-16 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-[#00E676] text-sm">›_</span>
          <span className="font-mono text-xs text-[#00E676]/50 tracking-widest uppercase">about.me</span>
          <div className="flex-1 h-px bg-[#00E676]/10" />
        </div>

        {/* Main grid — 11/12 width, centered */}
        <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Image ── */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Corner decorations */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#00E676]/40" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#00E676]/40" />

              {/* Image container */}
              <div className="w-full h-full rounded-sm overflow-hidden border border-[#00E676]/15 bg-[#1a1a18]">
                {/* ── Replace this div with your <Image /> when ready ── */}
                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                  
                </div>

                Uncomment when image is ready:
                <Image
                  src={MyPhoto1}
                  alt="Abdullah Al Mahmud"
                  fill
                  className="object-cover"
                />
               
              </div>

              {/* Floating status badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#1a1a18] border border-[#00E676]/20 px-4 py-2 rounded-sm whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse" />
                <span className="font-mono text-[#00E676]/70 text-xs">open to work</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Text Content ── */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">

            {/* Title */}
            <div>
              <h2 className="font-mono text-3xl md:text-4xl font-black text-white leading-tight">
                Abdullah Al Mahmud,
              </h2>
              <h2 className="font-mono text-3xl md:text-4xl font-black text-[#00E676] leading-tight">
                Your Future Developer.
              </h2>
            </div>

            {/* Story paragraphs */}
            <div className="flex flex-col gap-4">
              <p className="text-[#8a9a8e] text-sm md:text-base leading-relaxed">
                My coding journey started with pure curiosity — wondering what really happens
                behind a click on a website. Where does it go? What runs under the hood?
                That question had no clear answer for me, until I joined{" "}
                <span className="text-[#00E676]/70 font-mono">Programming Hero Bootcamp</span>{" "}
                and found my path.
              </p>

              <p className="text-[#8a9a8e] text-sm md:text-base leading-relaxed">
                The learning days weren&apos;t easy — hours of coding, debugging, failing, then
                finally succeeding. Now I&apos;m designing my own portfolio from scratch and have
                completed{" "}
                <span className="text-[#00E676]/70 font-mono">10+ projects</span>.
                Today I&apos;m confident — I know the magic that{" "}
                <span className="text-white/60 font-mono">client</span>,{" "}
                <span className="text-white/60 font-mono">server</span>, and{" "}
                <span className="text-white/60 font-mono">database</span>{" "}
                can create together.
              </p>

              {/* CTA line */}
              <p className="text-[#8a9a8e] text-sm md:text-base leading-relaxed">
                I&apos;m just one message away —{" "}
                <Link
                   href="https://wa.me/8801683367535"
                    target="_blank"
                    rel="noopener noreferrer"
                  className="text-[#00E676] font-mono underline underline-offset-4 decoration-[#00E676]/30 hover:decoration-[#00E676] transition-all"
                >
                  message me!
                </Link>
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-[#00E676]/10">
              {[
                { value: "10+", label: "Projects" },
                { value: "1+", label: "Years Learning" },
                { value: "∞", label: "Curiosity" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-mono text-2xl font-black text-[#00E676]">{stat.value}</span>
                  <span className="font-mono text-xs text-[#8a9a8e]/60 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                size="lg"
                radius="sm"
              >
                <a
                href="/MYCV_programing.pdf"
  download="Abdullah_Al_Mahmud_CV.pdf"
  className="bg-[#00E676] text-[#0a1f10] font-mono font-bold tracking-wide hover:bg-[#00C853] transition-colors px-8 py-3 text-sm inline-flex items-center rounded-sm"
                > ↓ Download CV</a>
               
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
