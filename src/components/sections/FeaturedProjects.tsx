import { m } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import OptimizedImage from "../shared/OptimizedImage";
import SectionHeading from "../shared/SectionHeading";
import { scaleReveal, staggerContainer, viewportOnce } from "../../lib/motion";
import { PROJECTS } from "../../lib/data";
import type { Project } from "../../lib/data";

const HOVER_EASE = "[transition-timing-function:cubic-bezier(0.25,0.46,0.45,0.94)]";

function ProjectCard({ project, hero = false }: { project: Project; hero?: boolean }) {
  return (
    <m.article
      variants={scaleReveal}
      className={`group relative overflow-hidden bg-secondary ${
        hero ? "md:col-span-2" : ""
      }`}
    >
      <Link to="/projects" aria-label={`View ${project.title}`}>
        <div className={hero ? "aspect-[16/9]" : "aspect-[4/3]"}>
          <OptimizedImage
            src={project.image}
            alt={`${project.title} — ${project.category.toLowerCase()} project in ${project.location}`}
            width={project.width}
            height={project.height}
            className={`h-full w-full object-cover duration-[600ms] ${HOVER_EASE} group-hover:scale-[1.06]`}
          />
        </div>

        {/* Hover overlay — always visible on touch viewports */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent transition-opacity duration-[600ms] ${HOVER_EASE} opacity-100 lg:opacity-0 lg:group-hover:opacity-100`}
          aria-hidden
        />

        <div
          className={`absolute inset-x-0 bottom-0 flex items-end justify-between p-6 transition-all duration-[600ms] ${HOVER_EASE} translate-y-0 opacity-100 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100`}
        >
          <div>
            <span className="inline-block border border-accent/60 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-accent">
              {project.category}
            </span>
            <h3 className="mt-3 font-display text-2xl text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-sm font-light text-white/60">
              {project.location} · {project.year}
            </p>
          </div>
          <span
            className={`flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-all duration-[600ms] ${HOVER_EASE} translate-x-0 translate-y-0 lg:-translate-x-3 lg:translate-y-3 lg:group-hover:translate-x-0 lg:group-hover:translate-y-0`}
            aria-hidden
          >
            <ArrowUpRight size={18} strokeWidth={1.5} />
          </span>
        </div>
      </Link>
    </m.article>
  );
}

export default function FeaturedProjects() {
  const featured = PROJECTS.filter((project) => project.featured).slice(0, 5);
  const [heroProject, ...rest] = featured;

  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured Projects"
            description="A cross-section of our practice — residences, workplaces, and hospitality environments built with intent."
          />
          <Link
            to="/projects"
            className="group mb-14 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.12em] text-primary transition-colors hover:text-accent lg:mb-20"
          >
            View All Projects
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {heroProject && <ProjectCard project={heroProject} hero />}
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </m.div>
      </div>
    </section>
  );
}
