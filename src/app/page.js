'use client'
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceEducationSection from "@/components/ExperienceEducationSection";
import FeaturedProjectsCarousel from "@/components/FeaturedProjectsCarousel";
import Footer from "@/components/Footer";
import GitHubStatsSection from "@/components/GitHubStatsSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar"
import ProjectsSection from "@/components/ProjectsSection";
import ScrollToTop from "@/components/ScrollToTop";
import SkillsSection2 from "@/components/SkillsSection2";
import Lenis from "lenis";
import { useEffect } from "react";


const getProjects = async () => {
  const res = await fetch("https://portfolio-project-server-production.up.railway.app/projects");
const data = await res.json();


return data
}
const projects = await getProjects()

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
     <FeaturedProjectsCarousel data={projects}/>
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
