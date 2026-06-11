import { m } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import { scaleReveal, staggerContainer, viewportOnce } from "../../lib/motion";
import { SUSTAINABILITY } from "../../lib/data";

export default function Sustainability() {
  return (
    <section id="sustainability" className="section-pad bg-secondary">
      <div className="container-site">
        <SectionHeading
          eyebrow="Responsibility"
          title="Sustainability & Innovation"
          description="Beautiful spaces should not cost the earth. Sustainability is a design constraint we embrace, not an afterthought."
          dark
        />

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SUSTAINABILITY.map((item) => (
            <m.div
              key={item.title}
              variants={scaleReveal}
              className="border border-white/10 p-8 transition-colors duration-500 hover:border-accent/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15">
                <item.icon
                  size={22}
                  strokeWidth={1.25}
                  className="text-accent"
                  aria-hidden
                />
              </div>
              <p className="mt-6 font-display text-4xl text-white">
                {item.stat}
              </p>
              <h3 className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-accent">
                {item.title}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-white/55">
                {item.description}
              </p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
