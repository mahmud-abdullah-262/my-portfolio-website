'use client'

import { Button } from "@heroui/react";
import Link from "next/link";
import heroAnimation from '@/assets/WelcomeAnimation.json'
import { Player } from "@lottiefiles/react-lottie-player";
import logo from '@/assets/mwlight.svg'
import Image from "next/image";




const HeroSection =  () => {
  return (
    <div className=" bg-[#0f0f0d] min-h-screen">
       <section className="w-11/12 mx-auto  flex flex-col items-center px-6 md:px-16 lg:px-24">

        <div className="w-full mt-4">
          {/* logo + Status badge*/}
          <div className="flex justify-between items-center">
           
          <div className="flex items-center gap-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
            <span className="font-mono text-xs text-[#00E676]/70 tracking-widest uppercase">
              available for work
            </span>
          </div>
            <div>
              <Image 
              src={logo}
              width={100}
              height={100}
              alt="logo"
              className="w-16"
              />
            </div>

          </div>
        </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center mt-6">

       

        {/* ── Top: Image placeholder ── */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
         <div className="relative w-82 h-82 md:w-86 md:h-86 lg:w-96 lg:h-96">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full border border-[#00E676]/10" />
            <div className="absolute inset-4 rounded-full border border-[#00E676]/10" />

           
             <Player
  autoplay
  loop
  src={heroAnimation}
  style={{ width: "100%", height: "100%" }}
/>
            

            {/* Corner decorations */}
           
           
          </div>
        </div>

         {/* ── bottom: Text Content ── */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">

          
          

          {/* Hook line */}
          <div>
            <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              <span className="text-[#00E676]">›_ </span>
              Where{" "}
              
              <br />
              Ideas Become <br />
              <span className="text-[#00E676]">Interactive</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-[#8a9a8e] text-base md:text-lg leading-relaxed max-w-md font-mono">
           I turn ideas into fast, modern, and{" "}
            <span className="text-[#00E676]/80">production-ready</span>{" "}
            MERN stack applications.
          </p>

   

          {/* CTA Buttons */}
          <div className="flex flex-col flex-wrap gap-3 pt-2">
            <Button
              as={Link}
              href="#projects"
              size="lg"
              className="bg-[#00E676] text-[#0a1f10] font-mono font-bold w-66 hover:bg-[#00C853] transition-colors px-8"
              radius="sm"
            >
              Browse Projects
            </Button>
            <div className="flex gap-2">
            
             <Link
                   href="https://wa.me/8801683367535"
                    target="_blank"
                    rel="noopener noreferrer"
                  className="font-mono text-xs px-3 py-1 border border-[#00E676]/15 text-white rounded-sm bg-[#00E676]/5 hover:border-[#00E676]/40 hover:text-[#00E676]/80 transition-colors cursor-default"
                >
                  WhatsApp
                </Link>
             <Link
                   href="https://www.facebook.com/abdullahalmahmud1997"
  target="_blank"
  rel="noopener noreferrer"
                  className="font-mono text-xs px-3 py-1 border border-[#00E676]/15 text-white rounded-sm bg-[#00E676]/5 hover:border-[#00E676]/40 hover:text-[#00E676]/80 transition-colors cursor-default"
                >
                  Facebook
                </Link>
             <Link
                   href="https://www.linkedin.com/in/mahmud-abdullah-webdev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  className="font-mono text-xs px-3 py-1 border border-[#00E676]/15 text-white rounded-sm bg-[#00E676]/5 hover:border-[#00E676]/40 hover:text-[#00E676]/80 transition-colors cursor-default"
                >
                  LinkedIn
                </Link>
         
         
            </div>
            
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {["MongoDB", "Express", "React", "Node.js", "Next.js"].map((tech) => (
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

