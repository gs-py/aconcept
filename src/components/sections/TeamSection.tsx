import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TEAM } from "../../data/mock";

export const TeamSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-pad bg-background" ref={ref}>
      <div className="container-site">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div>
            <span className="eyebrow mb-6">Our Leadership</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-hero text-white">Meet the Team</h2>
          </div>
          <div className="max-w-md">
            <p className="text-muted leading-relaxed">
              Our multidisciplinary team of visionaries, architects, and interior designers brings decades of global experience to every project we undertake.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {TEAM.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface mb-6">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div>
                <h3 className="text-2xl font-hero text-white mb-2 group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <div className="text-sm tracking-widest uppercase text-muted">
                  {member.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
