import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const EASE = [0.16, 1, 0.3, 1] as const;

const IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2500&auto=format&fit=crop";

const PRINCIPLES = [
  {
    num: "01",
    title: "Architecture",
    desc: "Bold, contextual structures shaped by light, proportion, and a deep sense of place.",
  },
  {
    num: "02",
    title: "Interior Excellence",
    desc: "Bespoke interiors where material, texture, and precise detailing meet everyday life.",
  },
  {
    num: "03",
    title: "Human-Centered",
    desc: "Environments designed around the people who live, work, and gather within them.",
  },
];

export const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section className="section-pad bg-background overflow-hidden" ref={ref}>
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex items-center justify-between mb-12 md:mb-16"
        >
          <span className="eyebrow">About Studio</span>
          <span className="hidden md:block font-numbers text-sm text-muted tracking-wider">
            (01 — Studio)
          </span>
        </motion.div>

        {/* Headline + lead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE }}
            className="lg:col-span-7 text-4xl md:text-5xl lg:text-6xl font-hero leading-[1.08] text-white"
          >
            Designing Timeless Spaces Through Architecture, Interior Excellence &amp; Human-Centered Thinking.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="lg:col-span-5"
          >
            <p className="text-lg text-muted leading-relaxed mb-8">
              AConcept Studio is a premium architecture and interior design firm based in Kerala,
              India. We craft luxury residential and commercial environments that evoke emotion and
              stand the test of time — each project a unique reflection of our clients' aspirations.
            </p>
            <button className="btn btn-gold">Discover Our Approach</button>
          </motion.div>
        </div>

        {/* Feature image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="group relative aspect-[16/10] md:aspect-[21/9] w-full overflow-hidden bg-surface mb-16 md:mb-24"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${IMAGE})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-white/10 bg-white/10">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: EASE }}
              className="flex flex-col gap-4 bg-background p-8 md:p-10 transition-colors duration-500 hover:bg-surface/40"
            >
              <span className="font-numbers text-xl text-accent">{p.num}</span>
              <h3 className="text-2xl font-hero text-white">{p.title}</h3>
              <p className="text-muted leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
