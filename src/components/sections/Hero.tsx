import {
  m,
  useMotionTemplate,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import {
  ContainerScroll,
  ContainerSticky,
  useContainerScrollContext,
} from "../ui/animated-video-on-scroll";
import Magnetic from "../shared/Magnetic";
import { EASE_OUT_EXPO } from "../../lib/motion";
import { IMAGES } from "../../lib/data";

const HEADLINE = "Architecture That Shapes Experiences";

/** Copy block — fades up and away as the image takes over the stage. */
function HeroCopy() {
  const { scrollYProgress } = useContainerScrollContext();
  const reduceMotion = useReducedMotion();

  const opacity = useTransform(scrollYProgress, [0.05, 0.4], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4], [0, -60]);

  const words = HEADLINE.split(" ");

  return (
    <m.div
      style={reduceMotion ? undefined : { opacity, y }}
      className="relative z-10 mx-auto max-w-4xl px-6 pt-28 text-center md:pt-36"
    >
      <m.p
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.2 }}
        className="eyebrow justify-center"
      >
        Est. 2014 · Architecture &amp; Interior Design
      </m.p>

      <h1 className="mt-5 text-display-2xl text-white">
        {words.map((word, index) => (
          <m.span
            key={`${word}-${index}`}
            className="inline-block"
            initial={reduceMotion ? false : { clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{
              duration: 0.9,
              ease: EASE_OUT_EXPO,
              delay: 0.4 + index * 0.09,
            }}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </m.span>
        ))}
      </h1>

      <m.p
        initial={reduceMotion ? false : { opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.9 }}
        className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-white/70"
      >
        We craft residential, commercial, and hospitality environments where
        spatial intelligence meets enduring elegance.
      </m.p>

      <m.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12, delayChildren: 1.1 },
          },
        }}
        className="mt-9 flex flex-wrap justify-center gap-4"
      >
        {(["projects", "consult"] as const).map((key) => (
          <m.div
            key={key}
            variants={{
              hidden: reduceMotion ? {} : { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: EASE_OUT_EXPO },
              },
            }}
          >
            {key === "projects" ? (
              <Magnetic>
                <Link to="/projects" className="btn btn-gold">
                  Explore Projects
                  <ArrowRight size={16} />
                </Link>
              </Magnetic>
            ) : (
              <Magnetic>
                <Link to="/#contact" className="btn btn-outline-light">
                  Book a Consultation
                </Link>
              </Magnetic>
            )}
          </m.div>
        ))}
      </m.div>
    </m.div>
  );
}

/**
 * Architecture image — starts as a framed window in the lower half of the
 * stage and expands to full viewport width and height as you scroll.
 */
function ExpandingImage() {
  const { scrollYProgress } = useContainerScrollContext();
  const reduceMotion = useReducedMotion();

  const insetTop = useTransform(scrollYProgress, [0, 0.75], [54, 0]);
  const insetBottom = useTransform(scrollYProgress, [0, 0.75], [10, 0]);
  const insetX = useTransform(scrollYProgress, [0, 0.75], [24, 0]);
  const radius = useTransform(scrollYProgress, [0, 0.85], [24, 0]);
  const clipPath = useMotionTemplate`inset(${insetTop}% ${insetX}% ${insetBottom}% ${insetX}% round ${radius}px)`;

  // Gentle settle from a slight zoom as the frame opens.
  const scale = useTransform(scrollYProgress, [0, 0.85], [1.15, 1]);

  // Caption appears only once the image owns the full stage.
  const captionOpacity = useTransform(scrollYProgress, [0.72, 0.9], [0, 1]);
  const captionY = useTransform(scrollYProgress, [0.72, 0.95], [48, 0]);

  return (
    <m.div
      className="absolute inset-0 z-20"
      style={reduceMotion ? undefined : { clipPath }}
    >
      <m.img
        src={IMAGES.hero}
        alt="Luxury villa at dusk with illuminated infinity pool, designed by Aconcept Studio"
        width={2000}
        height={1333}
        loading="eager"
        decoding="async"
        style={reduceMotion ? undefined : { scale }}
        className="h-full w-full object-cover"
      />

      {/* Deeper vignette for caption legibility once full-bleed */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-primary/85 via-primary/30 to-transparent"
        aria-hidden
      />

      {/* Full-bleed caption — the brand statement lands on the image */}
      <m.div
        style={reduceMotion ? undefined : { opacity: captionOpacity, y: captionY }}
        className="absolute inset-x-0 bottom-0"
      >
        <div className="container-site flex flex-col items-start gap-6 pb-20 text-left md:flex-row md:items-end md:justify-between md:pb-24">
          <div>
            <p className="eyebrow">Aconcept Studio</p>
            <p className="mt-4 max-w-2xl font-display text-display-lg text-white">
              Designing Timeless Spaces.{" "}
              <em className="italic text-accent">
                Creating Lasting Impressions.
              </em>
            </p>
          </div>
          <div className="shrink-0 border-l border-accent/50 pl-5 text-sm font-light leading-relaxed text-white/70">
            <p>200+ projects delivered</p>
            <p>Four continents · Twelve countries</p>
          </div>
        </div>
      </m.div>
    </m.div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section>
      <ContainerScroll className="h-[260vh] bg-primary">
        <ContainerSticky
          className="h-svh overflow-hidden"
          style={{
            background:
              "radial-gradient(50% 45% at 50% 10%, #1e293b 0%, #182238 40%, #0f172a 80%)",
          }}
        >
          <HeroCopy />
          <ExpandingImage />

          {/* Scroll indicator */}
          <m.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="pointer-events-none absolute bottom-6 left-1/2 z-30 -translate-x-1/2"
            aria-hidden
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-[0.65rem] uppercase tracking-[0.3em] text-white/60">
                Scroll
              </span>
              <m.span
                animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="block h-10 w-px bg-linear-to-b from-accent to-transparent"
              />
            </div>
          </m.div>
        </ContainerSticky>
      </ContainerScroll>
    </section>
  );
}
