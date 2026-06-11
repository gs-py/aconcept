import { m } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";
import { SERVICES } from "../../lib/data";

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-site">
        <SectionHeading
          eyebrow="What We Do"
          title="Services"
          description="Nine disciplines, one standard — every engagement is delivered with the same editorial rigor."
        />

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <m.div
              key={service.title}
              variants={fadeUp}
              className="group border-l-2 border-accent bg-surface p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <service.icon
                size={28}
                strokeWidth={1.25}
                className="text-accent"
                aria-hidden
              />
              <h3 className="mt-5 font-display text-xl text-primary">
                {service.title}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted">
                {service.description}
              </p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
