import { motion } from "framer-motion";
import { Link } from "react-router";
import { PROJECTS } from "../data/mock";

export const Projects = () => {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <span className="eyebrow mb-6">Our Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-hero text-white mb-8">Selected Works</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            >
              <Link to={`/projects/${project.id}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface mb-6">
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
                
                <div>
                  <div className="font-numbers text-accent mb-2">{project.id}</div>
                  <h3 className="text-2xl font-hero text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-sm text-muted">
                    {project.category} &mdash; {project.year}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
