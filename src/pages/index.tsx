import AboutSection from "@/components/AboutSection";
import BioSection from "@/components/BioSection";
import ContactSection from "@/components/ContactSection";
import Email from "@/components/Email";
import GoUp from "@/components/GoUp";
import Social from "@/components/Social";
import WorkExperienceSection from "@/components/WorkExperienceSection";

export default function Home() {
  return (
    <div>
      <BioSection />
      <AboutSection />
      <WorkExperienceSection />
      <ContactSection />
      <GoUp />
      <Email />
      <Social />
    </div>
  );
}
