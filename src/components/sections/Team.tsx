import { m } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import OptimizedImage from "../shared/OptimizedImage";
import SectionHeading from "../shared/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../../lib/motion";
import { TEAM } from "../../lib/data";

export default function Team() {
  return (
    <section id="team" className="section-pad bg-surface">
      <div className="container-site">
        <SectionHeading
          eyebrow="The People"
          title="Our Team"
          description="A small, senior team — every project is led by a principal, never handed down."
        />

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {TEAM.map((member) => (
            <m.div key={member.name} variants={fadeUp} className="group">
              <div className="aspect-square overflow-hidden bg-secondary">
                <OptimizedImage
                  src={member.photo}
                  alt={`Portrait of ${member.name}, ${member.role} at Aconcept Studio`}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.05] group-hover:brightness-110"
                />
              </div>
              <h3 className="mt-5 font-display text-xl text-primary">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{member.role}</p>
              <p className="mt-1 text-xs font-light uppercase tracking-[0.12em] text-accent">
                {member.experience} experience
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="text-muted transition-colors hover:text-accent"
                >
                  <Linkedin size={16} strokeWidth={1.5} />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${member.name} on Instagram`}
                  className="text-muted transition-colors hover:text-accent"
                >
                  <Instagram size={16} strokeWidth={1.5} />
                </a>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
