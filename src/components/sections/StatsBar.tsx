import { m } from "framer-motion";
import CounterUp from "../shared/CounterUp";
import { EASE_OUT_EXPO, viewportOnce } from "../../lib/motion";
import { STATS } from "../../lib/data";

export default function StatsBar() {
  return (
    <section className="bg-primary py-20 lg:py-24">
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="container-site grid grid-cols-2 gap-y-12 lg:grid-cols-4"
      >
        {STATS.map((stat, index) => (
          <m.div
            key={stat.label}
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: EASE_OUT_EXPO },
              },
            }}
            className={`px-6 lg:px-10 ${
              index > 0 ? "lg:border-l lg:border-accent/20" : ""
            } ${index % 2 === 1 ? "border-l border-accent/20 lg:border-l" : ""}`}
          >
            <p className="font-display text-5xl text-white lg:text-6xl">
              <CounterUp to={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-accent">
              {stat.label}
            </p>
            <p className="mt-2 text-sm font-light text-white/50">
              {stat.description}
            </p>
          </m.div>
        ))}
      </m.div>
    </section>
  );
}
