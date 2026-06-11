import { m } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import { EASE_OUT_EXPO, viewportOnce } from "../../lib/motion";
import { PROCESS_STEPS } from "../../lib/data";

export default function Process() {
  return (
    <section id="process" className="section-pad bg-surface">
      <div className="container-site">
        <SectionHeading
          eyebrow="How We Work"
          title="The Design Process"
          description="Six sequential stages — each one earns the next. No shortcuts, no surprises."
        />
      </div>

      <div className="container-site relative">
        {/* Connector line — draws itself as the section enters view */}
        <m.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.5, ease: EASE_OUT_EXPO }}
          className="absolute left-0 right-0 top-7 hidden h-px origin-left bg-accent/40 md:block"
          aria-hidden
        />

        <m.ol
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.3 },
            },
          }}
          className="flex flex-col gap-10 md:snap-x md:flex-row md:gap-8 md:overflow-x-auto md:pb-6"
        >
          {PROCESS_STEPS.map((step) => (
            <m.li
              key={step.number}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: EASE_OUT_EXPO },
                },
              }}
              className="relative shrink-0 md:w-72 md:snap-start"
            >
              <div className="flex h-14 w-14 items-center justify-center border border-accent bg-canvas font-display text-lg text-accent">
                {step.number}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <step.icon
                  size={20}
                  strokeWidth={1.25}
                  className="text-accent"
                  aria-hidden
                />
                <h3 className="font-display text-xl text-primary">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted">
                {step.description}
              </p>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.15em] text-accent">
                {step.duration}
              </p>
            </m.li>
          ))}
        </m.ol>
      </div>
    </section>
  );
}
