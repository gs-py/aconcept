import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PROJECTS } from "../../data/mock";
import { Link } from "react-router";

export const FeaturedProjects = () => {
  return (
    <section className="section-pad bg-background">
      <div className="container-site">
        <div className="flex justify-between items-end mb-16 md:mb-24">
          <div>
            <span className="eyebrow mb-6">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-hero text-white">Selected Works</h2>
          </div>
          <Link to="/projects" className="hidden md:inline-flex btn btn-outline-light">
            View All Projects
          </Link>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {PROJECTS.map((project, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                ref={ref}
                key={project.id}
                className={`flex flex-col ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } gap-8 md:gap-16 items-center`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={`/projects/${project.id}`} className="w-full md:w-2/3 group overflow-hidden block">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 group-hover:blur-[2px]"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <span className="text-white text-lg tracking-widest uppercase font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        View Project
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="w-full md:w-1/3 flex flex-col justify-center">
                  <div className="font-numbers text-accent mb-6 text-xl">{project.id}</div>
                  <h3 className="text-3xl md:text-4xl font-hero text-white mb-4">
                    <Link to={`/projects/${project.id}`} className="hover:text-accent transition-colors">
                      {project.title}
                    </Link>
                  </h3>
                  <div className="h-px w-full bg-white/10 my-6" />
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted">
                    <div>
                      <span className="block text-white/50 mb-1">Location</span>
                      <span className="text-white">{project.location}</span>
                    </div>
                    <div>
                      <span className="block text-white/50 mb-1">Category</span>
                      <span className="text-white">{project.category}</span>
                    </div>
                    <div>
                      <span className="block text-white/50 mb-1">Year</span>
                      <span className="text-white">{project.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center md:hidden">
          <Link to="/projects" className="btn btn-outline-light w-full justify-center">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};
