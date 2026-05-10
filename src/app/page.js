import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceEducationSection from "@/components/ExperienceEducationSection";
import GitHubStatsSection from "@/components/GitHubStatsSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";


export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <SkillsSection/>
      <ProjectsSection/>
      <ExperienceEducationSection/>
      <GitHubStatsSection/>
      <ContactSection/>
    </>
  
  );
}
