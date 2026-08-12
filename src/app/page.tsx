import AboutSection from "@/component/AboutSection";
import ContactSection from "@/component/Contact";
import DarkModeToggle from "@/component/DarkModeToggle";
import EducationSection from "@/component/EducationSection";
import ExperienceSection from "@/component/ExperienceSection";
import HeroSection from "@/component/HeroSection";
import ProjectsSection from "@/component/ProjectSection";
import SkillsSection from "@/component/SkillSection";
import CapabilitiesSection from "@/component/CapabilitiesSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <DarkModeToggle />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CapabilitiesSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
