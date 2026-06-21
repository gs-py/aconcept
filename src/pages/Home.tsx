import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { FeaturedProjects } from "../components/sections/FeaturedProjects";
import { ServicesSection } from "../components/sections/ServicesSection";
import { ProcessSection } from "../components/sections/ProcessSection";
import { TeamSection } from "../components/sections/TeamSection";
import { Testimonials } from "../components/sections/Testimonials";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <ServicesSection />
      <ProcessSection />
      <TeamSection />
      <Testimonials />
    </>
  );
};
