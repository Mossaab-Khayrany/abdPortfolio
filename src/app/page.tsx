import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import ActiveSectionConextProvider from "../../context/active-section-context";

export default function Home() {
  return (
    <div>
      <ActiveSectionConextProvider>
        <Header />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TapeSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </ActiveSectionConextProvider>
    </div>
  );
}
