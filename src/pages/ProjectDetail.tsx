import { useParams } from "react-router";
import { motion } from "framer-motion";
import { PROJECTS } from "../data/mock";

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id) || PROJECTS[0];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative h-[80vh] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative h-full container-site flex flex-col justify-end pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="eyebrow text-white/80 mb-6">{project.category}</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-hero text-white mb-8">{project.title}</h1>
            <div className="flex flex-wrap gap-8 md:gap-12 text-white/80">
              <div>
                <span className="block text-xs uppercase tracking-widest mb-2 text-white/50">Location</span>
                <span>{project.location}</span>
              </div>
              {project.siteArea && (
                <div>
                  <span className="block text-xs uppercase tracking-widest mb-2 text-white/50">Site Area</span>
                  <span>{project.siteArea}</span>
                </div>
              )}
              {project.builtArea && (
                <div>
                  <span className="block text-xs uppercase tracking-widest mb-2 text-white/50">Built Area</span>
                  <span>{project.builtArea}</span>
                </div>
              )}
              <div>
                <span className="block text-xs uppercase tracking-widest mb-2 text-white/50">Year</span>
                <span>{project.year}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="section-pad">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h2 className="text-3xl md:text-5xl font-hero text-white leading-tight">
                A harmonious blend of contemporary aesthetics and functional intelligence.
              </h2>
            </div>
            <div>
              {project.details ? (
                <div className="text-muted text-lg leading-relaxed mb-8 flex flex-col gap-4">
                  {project.details.map((detail: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {detail}
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <p className="text-muted text-lg leading-relaxed mb-8">
                    The {project.title} represents our commitment to crafting spaces that transcend mere functionality. By carefully orchestrating light, material, and volume, we established an environment that responds intuitively to its inhabitants.
                  </p>
                  <p className="text-muted text-lg leading-relaxed">
                    Natural textures and bespoke detailing define the interior language, while the architectural envelope remains respectful to its context in {project.location}. The result is a timeless sanctuary of modern luxury.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24">
        <div className="container-site">
          {project.gallery ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((img: string, idx: number) => {
                // Make the 3rd, 4th images span more columns for a masonry look
                let spanClass = "col-span-1";
                if (idx === 2 || idx === 5) spanClass = "md:col-span-2 lg:col-span-2";
                
                return (
                  <div key={idx} className={`h-[40vh] md:h-[60vh] bg-surface overflow-hidden ${spanClass}`}>
                    <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-[60vh] bg-surface overflow-hidden">
                <img src={project.image} alt="Gallery 1" className="w-full h-full object-cover" />
              </div>
              <div className="h-[60vh] bg-surface overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000" alt="Gallery 2" className="w-full h-full object-cover" />
              </div>
              <div className="md:col-span-2 h-[80vh] bg-surface overflow-hidden">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" alt="Gallery 3" className="w-full h-full object-cover" />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
