import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Magnetic from "../shared/Magnetic";
import { EASE_OUT_EXPO } from "../../lib/motion";
import "swiper/css";

const EASE_IN_OUT: [number, number, number, number] = [0.83, 0, 0.17, 1];
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const IMAGES = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2500&auto=format&fit=crop"
];

/** Headline split into lines so each line wipes in on its own mask. */
const HEADLINE_LINES = ["Crafting Spaces", "That Define Lifestyle"];

export const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.6 },
    },
  };

  // Soft fade-up for eyebrow, sub-copy and CTAs.
  const fadeUp = {
    hidden: reduceMotion ? {} : { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: EASE_OUT_EXPO },
    },
  };

  // Editorial line wipe — text rides up from behind its own mask.
  const lineWipe = {
    hidden: reduceMotion ? {} : { y: "110%" },
    visible: {
      y: "0%",
      transition: { duration: 1.1, ease: EASE_OUT_EXPO },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary group">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          navigation={{
            prevEl: '.hero-prev',
            nextEl: '.hero-next',
          }}
          pagination={{
            clickable: true,
            el: '.hero-pagination',
          }}
          loop={true}
          speed={1600}
          className="h-full w-full hero-swiper"
        >
          {IMAGES.map((src, index) => (
            <SwiperSlide key={index}>
              {/* Ken Burns layer — slow drift/zoom only on the active slide */}
              <div
                className="hero-bg h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Cinematic reveal curtain — wipes off the stage on first load */}
      {!reduceMotion && (
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 1.1, ease: EASE_IN_OUT }}
          style={{ transformOrigin: "top" }}
          className="absolute inset-0 z-40 bg-primary pointer-events-none"
        />
      )}

      {/* Custom Premium Navigation */}
      <div className="hero-prev absolute top-1/2 left-2 md:left-6 lg:left-8 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center cursor-pointer backdrop-blur-md bg-black/10 text-white/50 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white/10 hover:text-white hover:border-accent hover:scale-110">
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
      </div>
      <div className="hero-next absolute top-1/2 right-2 md:right-6 lg:right-8 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center cursor-pointer backdrop-blur-md bg-black/10 text-white/50 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white/10 hover:text-white hover:border-accent hover:scale-110">
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container-site flex flex-col justify-end pb-24 md:pb-32 text-white pointer-events-none">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-5xl pointer-events-auto flex flex-col gap-8 md:gap-12"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/70"
            >
              <span className="h-px w-10 bg-accent" />
              Luxury Architecture Studio
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-hero leading-[1.05] mb-6 tracking-tight">
              {HEADLINE_LINES.map((line, i) => (
                <span key={i} className="block overflow-hidden pb-[0.08em]">
                  <motion.span variants={lineWipe} className="block">
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/80 max-w-2xl"
            >
              Luxury Architecture &amp; Interior Design Studio Based In Kerala
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6">
            <Magnetic className="block sm:inline-block">
              <button className="btn btn-gold w-fit">
                View Projects
              </button>
            </Magnetic>
            <Magnetic className="block sm:inline-block">
              <button className="btn btn-outline-light w-fit">
                Book Consultation
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Custom Premium Pagination */}
        <div className="hero-pagination absolute bottom-8 md:bottom-12 left-0 right-0 z-20 flex justify-center gap-3 pointer-events-auto" />
      </div>

      <style>{`
        .hero-pagination .swiper-pagination-bullet {
          width: 32px;
          height: 2px;
          border-radius: 0;
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          margin: 0 !important;
          cursor: pointer;
        }
        .hero-pagination .swiper-pagination-bullet:hover {
          background: rgba(255, 255, 255, 0.7);
        }
        .hero-pagination .swiper-pagination-bullet-active {
          width: 64px;
          background: #D4B06A;
        }

        /* Hide default swiper buttons if they ever appear */
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev,
        .hero-swiper > .swiper-pagination {
          display: none !important;
        }

        /* Ken Burns — slow zoom + drift, restarts on each active slide */
        .hero-bg {
          transform: scale(1.08);
        }
        .hero-swiper .swiper-slide-active .hero-bg {
          animation: hero-ken-burns 7s ease-out forwards;
        }
        @keyframes hero-ken-burns {
          from { transform: scale(1.08) translate3d(0, 0, 0); }
          to   { transform: scale(1.18) translate3d(-1.5%, -1.5%, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-swiper .swiper-slide-active .hero-bg {
            animation: none;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};
