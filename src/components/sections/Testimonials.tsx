import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";
import { TESTIMONIALS } from "../../lib/data";

const AUTOPLAY_MS = 6000;

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Auto-advance every 6s; paused on hover.
  useEffect(() => {
    if (!emblaApi || paused) return;
    const id = window.setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [emblaApi, paused]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="section-pad bg-surface">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Client Voices"
            title="What Our Clients Say"
          />
          <div className="mb-14 flex gap-3 lg:mb-20">
            <button
              type="button"
              onClick={scrollPrev}
              className="flex h-12 w-12 items-center justify-center border border-primary/20 text-primary transition-colors hover:border-accent hover:text-accent"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="flex h-12 w-12 items-center justify-center border border-primary/20 text-primary transition-colors hover:border-accent hover:text-accent"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div
          ref={emblaRef}
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex" aria-live="polite">
            {TESTIMONIALS.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="min-w-0 shrink-0 grow-0 basis-full pr-6 md:basis-1/2"
              >
                <div className="flex h-full flex-col bg-canvas p-10">
                  <span
                    aria-hidden
                    className="font-display text-7xl leading-none text-accent"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 flex-1 text-lg font-light leading-relaxed text-ink">
                    {testimonial.quote}
                  </blockquote>
                  <div className="mt-8 h-px w-12 bg-accent" aria-hidden />
                  <figcaption className="mt-6 flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt=""
                      width={48}
                      height={48}
                      loading="lazy"
                      decoding="async"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-primary">
                        {testimonial.name}
                      </p>
                      <p className="text-xs font-light text-muted">
                        {testimonial.projectType}
                      </p>
                    </div>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex gap-2" role="tablist" aria-label="Testimonials">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              role="tab"
              aria-selected={selected === index}
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-1 transition-all duration-500 ${
                selected === index ? "w-10 bg-accent" : "w-5 bg-primary/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
