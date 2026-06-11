import { Helmet } from "react-helmet-async";
import Hero from "../components/sections/Hero";
import StatsBar from "../components/sections/StatsBar";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Process from "../components/sections/Process";
import Gallery from "../components/sections/Gallery";
import Testimonials from "../components/sections/Testimonials";
import Awards from "../components/sections/Awards";
import Sustainability from "../components/sections/Sustainability";
import Team from "../components/sections/Team";
import ConsultCTA from "../components/sections/ConsultCTA";
import Contact from "../components/sections/Contact";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Aconcept Studio",
  description:
    "Luxury architecture and interior design studio crafting residential, commercial, and hospitality environments.",
  slogan: "Designing Timeless Spaces. Creating Lasting Impressions.",
  foundingDate: "2014",
  email: "studio@aconcept.design",
  telephone: "+91 98200 00000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Atelier Row, Design District",
    addressLocality: "Mumbai",
    postalCode: "400001",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Architectural Design",
    "Interior Design",
    "Space Planning",
    "3D Visualization",
    "Project Management",
  ],
};

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Aconcept Studio — Architecture &amp; Interior Design</title>
        <meta
          name="description"
          content="Aconcept Studio crafts residential, commercial, and hospitality environments where spatial intelligence meets enduring elegance."
        />
        <link rel="canonical" href="https://aconcept.design/" />
        <meta
          property="og:title"
          content="Aconcept Studio — Architecture & Interior Design"
        />
        <meta
          property="og:description"
          content="Designing Timeless Spaces. Creating Lasting Impressions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aconcept.design/" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&h=630&q=80"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="twitter:title"
          content="Aconcept Studio — Architecture & Interior Design"
        />
        <meta
          name="twitter:description"
          content="Designing Timeless Spaces. Creating Lasting Impressions."
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&h=630&q=80"
        />
        <script type="application/ld+json">{JSON.stringify(JSON_LD)}</script>
      </Helmet>

      <Hero />
      <StatsBar />
      <FeaturedProjects />
      <About />
      <Services />
      <Process />
      <Gallery />
      <Testimonials />
      <Awards />
      <Sustainability />
      <Team />
      <ConsultCTA />
      <Contact />
    </>
  );
}
