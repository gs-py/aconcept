import { Helmet } from "react-helmet-async";
import { m } from "framer-motion";
import Gallery from "../components/sections/Gallery";
import ConsultCTA from "../components/sections/ConsultCTA";
import { clipReveal, fadeUp, staggerContainer } from "../lib/motion";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects — Aconcept Studio</title>
        <meta
          name="description"
          content="The full Aconcept Studio portfolio — residential, commercial, interior, and hospitality projects across four continents."
        />
        <meta property="og:title" content="Projects — Aconcept Studio" />
        <meta
          property="og:description"
          content="The full Aconcept Studio portfolio across four continents."
        />
      </Helmet>

      {/* Page header */}
      <section className="bg-primary pb-20 pt-44">
        <m.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container-site"
        >
          <m.p variants={fadeUp} className="eyebrow">
            Portfolio
          </m.p>
          <m.h1 variants={clipReveal} className="mt-4 text-display-2xl text-white">
            Our Projects
          </m.h1>
          <m.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg font-light text-white/60"
          >
            Twelve selected works across four typologies — each one a study in
            context, proportion, and restraint.
          </m.p>
        </m.div>
      </section>

      <Gallery standalone />
      <ConsultCTA />
    </>
  );
}
