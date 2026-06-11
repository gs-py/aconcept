import { m } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";
import { AWARDS } from "../../lib/data";

export default function Awards() {
  return (
    <section id="awards" className="section-pad">
      <div className="container-site">
        <SectionHeading
          eyebrow="Recognition"
          title="Awards & Recognition"
          description="Honored by the institutions that define the discipline."
        />

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-px border border-primary/10 bg-primary/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {AWARDS.map((award) => (
            <m.div
              key={`${award.name}-${award.year}`}
              variants={fadeUp}
              className="flex items-start gap-5 bg-canvas p-8"
            >
              <award.icon
                size={26}
                strokeWidth={1.25}
                className="mt-1 shrink-0 text-accent"
                aria-hidden
              />
              <div>
                <h3 className="font-display text-lg leading-snug text-primary">
                  {award.name}
                </h3>
                <p className="mt-2 text-sm font-light text-muted">
                  {award.body} · {award.year}
                </p>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
