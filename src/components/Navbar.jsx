import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/mwlight.svg';
import {EllipsisVertical, Pencil, SquarePlus, TrashBin} from "@gravity-ui/icons";
import {Button, Description, Dropdown, Header, Kbd, Label, Separator} from "@heroui/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];


const Navbar = () => {
  return (
    <>
    <div className='w-full h-30   absolute -z-10 '></div>
     <div className='bg-transparent sticky top-0 z-50 backdrop-blur-sm '>
    <div className="flex justify-between items-center  py-4 w-11/12 mx-auto">
           
          <div className="flex items-center gap-2 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
            <span className="font-mono text-xs text-[#00E676]/70 tracking-widest uppercase">
              available for work
            </span>
          </div>
          <div className='flex gap-4'>
            <div className="flex flex-col gap-4">
            
            <div className="hidden md:flex gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-mono text-xs lg:text-sm text-[#d4d4d4] hover:text-[#00E676] transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="text-[#00E676]/20 group-hover:text-[#00E676]/60 transition-colors">›</span>
                  {link.label}
                </Link>
              ))}
            </div>

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
   </div>
    </>
  
          
  );
};

export default Navbar;