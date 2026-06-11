import { useCallback, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import OptimizedImage from "../shared/OptimizedImage";
import SectionHeading from "../shared/SectionHeading";
import { EASE_OUT_EXPO } from "../../lib/motion";
import { CATEGORIES, PROJECTS } from "../../lib/data";
import type { Category } from "../../lib/data";

type Filter = "All" | Category;

const FILTERS: Filter[] = ["All", ...CATEGORIES];

interface GalleryProps {
  /** Hide the section heading when embedded under a page-level header. */
  standalone?: boolean;
}

export default function Gallery({ standalone = false }: GalleryProps) {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const visible =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => {
          if (filter === "Interior Design")
            return project.category === "Interior Design";
          return project.category === filter;
        });

  const active = lightboxIndex !== null ? visible[lightboxIndex] : null;

  const step = useCallback(
    (delta: number) => {
      setDirection(delta);
      setLightboxIndex((current) => {
        if (current === null) return current;
        return (current + delta + visible.length) % visible.length;
      });
    },
    [visible.length],
  );

  return (
    <section id="portfolio" className="section-pad">
      <div className="container-site">
        {!standalone && (
          <SectionHeading
            eyebrow="Portfolio"
            title="The Work"
            description="Browse the full portfolio — filter by typology, open any project to view it in detail."
          />
        )}

        {/* Filter bar */}
        <div
          className="mb-12 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setFilter(item);
                setLightboxIndex(null);
              }}
              aria-pressed={filter === item}
              className={`px-5 py-2.5 text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
                filter === item
                  ? "bg-primary text-white"
                  : "bg-transparent text-muted hover:text-primary"
              }`}
            >
              {item === "Interior Design" ? "Interior" : item}
            </button>
          ))}
        </div>

        {/* Masonry — CSS columns, no JS layout */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <m.button
                key={project.id}
                layout
                type="button"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                onClick={() => {
                  setDirection(0);
                  setLightboxIndex(index);
                }}
                className="group relative mb-6 block w-full break-inside-avoid overflow-hidden bg-secondary text-left"
                aria-label={`Open ${project.title} in lightbox`}
              >
                <OptimizedImage
                  src={project.image}
                  alt={`${project.title} — ${project.category.toLowerCase()} in ${project.location}`}
                  width={project.width}
                  height={project.height}
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span
                  className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-primary/80 to-transparent p-5 opacity-100 transition-opacity duration-500 lg:opacity-0 lg:group-hover:opacity-100"
                  aria-hidden
                >
                  <span>
                    <span className="block font-display text-lg text-white">
                      {project.title}
                    </span>
                    <span className="block text-xs font-light text-white/60">
                      {project.location} · {project.year}
                    </span>
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-[0.15em] text-accent">
                    {project.category}
                  </span>
                </span>
              </m.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog.Root
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) setLightboxIndex(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[60] bg-primary/95 backdrop-blur-sm" />
          <Dialog.Content
            className="fixed inset-0 z-[70] flex flex-col outline-none"
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") step(1);
              if (event.key === "ArrowLeft") step(-1);
            }}
            aria-describedby={undefined}
          >
            {active && (
              <>
                <Dialog.Title className="sr-only">
                  {active.title} — {active.category}, {active.location}
                </Dialog.Title>

                <div className="flex items-center justify-end p-5">
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
                      aria-label="Close lightbox"
                    >
                      <X size={20} strokeWidth={1.5} />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="relative flex flex-1 items-center justify-center overflow-hidden px-5 lg:px-24">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center border border-white/20 text-white transition-colors hover:border-accent hover:text-accent lg:left-8"
                    aria-label="Previous project"
                  >
                    <ChevronLeft size={22} strokeWidth={1.5} />
                  </button>

                  <AnimatePresence mode="wait" custom={direction}>
                    <m.img
                      key={active.id}
                      src={active.image}
                      alt={`${active.title} — ${active.category.toLowerCase()} in ${active.location}`}
                      custom={direction}
                      initial={{ opacity: 0, x: direction * 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction * -60 }}
                      transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                      className="max-h-[70svh] max-w-full object-contain"
                    />
                  </AnimatePresence>

                  <button
                    type="button"
                    onClick={() => step(1)}
                    className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center border border-white/20 text-white transition-colors hover:border-accent hover:text-accent lg:right-8"
                    aria-label="Next project"
                  >
                    <ChevronRight size={22} strokeWidth={1.5} />
                  </button>
                </div>

                {/* Metadata */}
                <div className="container-site flex flex-wrap items-center justify-between gap-3 py-6">
                  <div>
                    <h3 className="font-display text-2xl text-white">
                      {active.title}
                    </h3>
                    <p className="mt-1 text-sm font-light text-white/60">
                      {active.location} · {active.year}
                    </p>
                  </div>
                  <span className="border border-accent/60 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.15em] text-accent">
                    {active.category}
                  </span>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
