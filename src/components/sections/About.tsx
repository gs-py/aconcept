import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import OptimizedImage from "../shared/OptimizedImage";
import {
  clipReveal,
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportOnce,
} from "../../lib/motion";
import { IMAGES, MILESTONES } from "../../lib/data";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // The image column drifts slower than scroll for layered depth.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" ref={sectionRef} className="section-pad bg-surface">
      <div className="container-site">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image + floating stat card */}
          <m.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <m.div style={reduceMotion ? undefined : { y: parallaxY }}>
              <OptimizedImage
                src={IMAGES.about}
                alt="The Aconcept Studio workspace — architects reviewing drawings and material samples"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </m.div>
            <div className="absolute -bottom-8 -right-4 bg-primary px-8 py-7 text-white shadow-2xl md:-right-8">
              <p className="font-display text-5xl text-accent">10</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                Years of Excellence
              </p>
            </div>
          </m.div>

          {/* Copy */}
          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <m.p variants={fadeUp} className="eyebrow">
              Our Studio
            </m.p>
            <m.h2
              variants={slideInRight}
              className="mt-4 text-display-xl text-primary"
            >
              Designing with{" "}
              <em className="font-display italic text-accent">intention</em>,
              building for permanence
            </m.h2>
            <m.p variants={fadeUp} className="mt-6 font-light text-muted">
              Founded in 2014, Aconcept Studio is a collective of architects,
              interior designers, and strategists united by a single
              conviction: space shapes experience. We work across residential,
              commercial, and hospitality typologies — always beginning with
              context, always ending with craft.
            </m.p>
            <m.p variants={fadeUp} className="mt-4 font-light text-muted">
              Our philosophy is editorial. Every line must earn its place.
              What remains, when everything unnecessary is removed, is
              architecture that feels inevitable — timeless rather than
              trend-driven, quiet rather than loud.
            </m.p>
          </m.div>
        </div>

        {/* Milestone timeline */}
        <div className="mt-28 lg:mt-36">
          <m.div
            variants={clipReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="h-px w-full bg-primary/10"
            aria-hidden
          />
          <m.ol
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-y-10 pt-10 sm:grid-cols-3 lg:grid-cols-5"
          >
            {MILESTONES.map((milestone) => (
              <m.li
                key={milestone.year}
                variants={{
                  hidden: { opacity: 0, scale: 0.85 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="relative pl-5"
              >
                <span
                  className="absolute left-0 top-2 h-2 w-2 rounded-full bg-accent"
                  aria-hidden
                />
                <p className="font-display text-2xl text-primary">
                  {milestone.year}
                </p>
                <p className="mt-1 text-sm font-light text-muted">
                  {milestone.title}
                </p>
              </m.li>
            ))}
          </m.ol>
        </div>
      </div>
    </section>
  );
}
