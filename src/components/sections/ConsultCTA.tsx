import { m } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import Magnetic from "../shared/Magnetic";
import { clipReveal, fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";
import { IMAGES } from "../../lib/data";

export default function ConsultCTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-28 lg:py-40">
      <img
        src={IMAGES.cta}
        alt=""
        width={1800}
        height={1200}
        loading="lazy"
        decoding="async"
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-15 grayscale"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-primary/40"
        aria-hidden
      />

      <m.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-site relative z-10 flex flex-col items-start"
      >
        <m.p variants={fadeUp} className="eyebrow">
          Begin the Conversation
        </m.p>
        <m.h2
          variants={clipReveal}
          className="mt-5 max-w-3xl text-display-xl text-white"
        >
          Let&rsquo;s Build Something Remarkable
        </m.h2>
        <m.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-lg font-light text-white/65"
        >
          Partner with Aconcept Studio to transform your vision into
          extraordinary spaces.
        </m.p>
        <m.div variants={fadeUp} className="mt-10">
          <Magnetic>
            <Link to="/#contact" className="btn btn-gold">
              Start Your Project
              <ArrowRight size={16} />
            </Link>
          </Magnetic>
        </m.div>
      </m.div>
    </section>
  );
}
