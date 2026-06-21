import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PROCESS_STEPS = [
  { num: "01", title: "Discovery", desc: "Understanding your vision, lifestyle, and site context." },
  { num: "02", title: "Concept", desc: "Developing spatial narratives and preliminary design directions." },
  { num: "03", title: "Design Development", desc: "Refining the design with precise materials and detailing." },
  { num: "04", title: "Visualization", desc: "Creating immersive 3D renders to experience the space." },
  { num: "05", title: "Execution", desc: "Meticulous construction management and quality control." },
  { num: "06", title: "Handover", desc: "Delivering the completed project, ready for life to unfold." },
];

export const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xTransform = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "-50%"]);

  return (
    <section className="section-pad bg-background overflow-hidden" ref={containerRef}>
      <div className="container-site mb-16">
        <span className="eyebrow mb-6">Our Process</span>
        <h2 className="text-4xl md:text-5xl font-hero text-white">How We Work</h2>
      </div>

      <div className="pl-[clamp(1.5rem,5vw,4rem)]">
        <motion.div 
          className="flex gap-16 md:gap-32 w-[200vw] md:w-[150vw]"
          style={{ x: xTransform }}
        >
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="min-w-[280px] md:min-w-[400px] flex-shrink-0">
              <div className="font-numbers text-5xl md:text-7xl text-accent/20 mb-8 tracking-tighter">
                {step.num}
              </div>
              <h3 className="text-2xl md:text-3xl font-hero text-white mb-4">{step.title}</h3>
              <p className="text-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
