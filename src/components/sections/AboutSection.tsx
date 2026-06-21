import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const STATS = [
  { label: "Projects", value: "150+" },
  { label: "Years", value: "10+" },
  { label: "Client Satisfaction", value: "95%" },
  { label: "Cities", value: "5+" },
];

export const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="section-pad bg-background" ref={ref}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow mb-8">About Studio</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-hero leading-tight text-white mb-6">
              Designing Timeless Spaces Through Architecture, Interior Excellence And Human-Centered Thinking.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="text-lg text-muted mb-8 max-w-xl leading-relaxed">
                AConcept Studio is a premium architecture and interior design firm based in Kerala, India. We specialize in crafting luxury residential and commercial environments that evoke emotion and stand the test of time. Our bespoke approach ensures that every project is a unique reflection of our clients' aspirations.
              </p>
              <button className="btn btn-gold">Discover Our Approach</button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
              {STATS.map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl lg:text-5xl font-numbers font-medium text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
