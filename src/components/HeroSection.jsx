'use client'

import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import myProfileImg from '@/assets/myprofilebgonon2.png'

const socialLinks = [
  { name: "GitHub", href: "https://github.com/mahmud-abdullah-262", icon: FaGithub }, // TODO: add your GitHub profile URL
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mahmud-abdullah-webdev/", icon: FaLinkedin },
  { name: "Facebook", href: "https://www.facebook.com/abdullahalmahmud1997", icon: FaFacebook },
  { name: "WhatsApp", href: "https://wa.me/8801683367535", icon: FaWhatsapp },
];

const skillStack = ["Next.js", "React", "Node.js", "Express.js", "MongoDB"];

const HeroSection = () => {
  return (
    <div id="home" className="min-h-screen">
      <section className="w-11/12 mx-auto flex flex-col items-center px-6 md:px-16 lg:px-24">

        <div className="w-full mt-4"></div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-6">

          {/* ── Top: Photo (background removed, no frame/circle) ── */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[460px] lg:h-[460px] xl:w-[520px] xl:h-[520px]">
              {/* soft glow behind the cutout, no visible ring/border */}
              <div className="absolute inset-0 bg-[#00E676]/10 blur-3xl rounded-full scale-75" />
              <Image
                src={myProfileImg}
                alt="Abdullah Al Mahmud — Full Stack Web Developer"
                fill
                priority
                sizes="(max-width: 768px) 320px, (max-width: 1280px) 460px, 520px"
                className="object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(0,230,118,0.15)]"
              />
            </div>
          </div>

          {/* ── Bottom: Text Content ── */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 order-2 lg:order-1 pb-6 lg:pb-12">

            {/* Title */}
            <h1 className="font-mono text-4xl md:text-5xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              <span className="text-[#00E676]">›_ </span>
              Full Stack <br />
              Web <span className="text-[#00E676]">Developer</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#8a9a8e] text-base md:text-lg leading-relaxed max-w-md font-mono">
              Building Modern, Fast &amp; Scalable Web Applications.{" "}
              <span className="text-[#00E676]/80">Let&apos;s Work Together.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center lg:items-start gap-3 pt-2 w-full">
              {/* Download CV Button — Button rendered directly as <a>, no nested anchor */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-1">
                <Button
                  as="a"
                  href="/Abdullah_Al_Mahmud_FullStack_Resume.pdf"
                  download="Abdullah_Al_Mahmud_FullStack_Resume.pdf"
                  size="lg"
                  radius="sm"
                  className="bg-[#00E676] text-[#0a1f10] font-mono text-[16px] font-bold tracking-wide hover:bg-[#00C853] transition-colors px-7 py-3 rounded-sm"
                >
                  ↓ Download Resume
                </Button>
              </div>

              {/* Social icon buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <Link
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                    className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 border border-[#00E676]/15 text-white rounded-sm bg-[#00E676]/5 hover:border-[#00E676]/40 hover:text-[#00E676]/80 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
              {skillStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1 border border-[#00E676]/15 text-[#00E676]/50 rounded-sm bg-[#00E676]/5 hover:border-[#00E676]/40 hover:text-[#00E676]/80 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;