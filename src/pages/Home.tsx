import { HeroSection } from "../components/sections/HeroSection";
import { FeaturedProjects } from "../components/sections/FeaturedProjects";
import { ProcessSection } from "../components/sections/ProcessSection";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <ProcessSection />
    </>
  );
};
