import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceEducationSection from "@/components/ExperienceEducationSection";
import Footer from "@/components/Footer";
import GitHubStatsSection from "@/components/GitHubStatsSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";


export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <SkillsSection/>
      <ProjectsSection/>
      <ExperienceEducationSection/>
      <GitHubStatsSection/>
      <ContactSection/>
      <Footer/>
    </>
  
  );
}
