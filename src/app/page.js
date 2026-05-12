'use client'
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceEducationSection from "@/components/ExperienceEducationSection";
import Footer from "@/components/Footer";
import GitHubStatsSection from "@/components/GitHubStatsSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar"
import ProjectsSection from "@/components/ProjectsSection";
import ScrollToTop from "@/components/ScrollToTop";
import SkillsSection2 from "@/components/SkillsSection2";
import Lenis from "lenis";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf (time){
    lenis.raf(time);
    requestAnimationFrame(raf);

    }
    requestAnimationFrame(raf)
  }, []) 
  return (
    <>
      <Navbar></Navbar>
     
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
     
      <SkillsSection2/>
      <ProjectsSection/>
      <ExperienceEducationSection/>
      <GitHubStatsSection/>
      <ContactSection/>
      <Footer/>
      <ScrollToTop></ScrollToTop>
    </>
  
  );
}
