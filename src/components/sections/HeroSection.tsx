import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const IMAGES = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2500&auto=format&fit=crop"
];

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary group">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            prevEl: '.hero-prev',
            nextEl: '.hero-next',
          }}
          pagination={{ 
            clickable: true,
            el: '.hero-pagination',
          }}
          loop={true}
          speed={1500}
          className="h-full w-full hero-swiper"
        >
          {IMAGES.map((src, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

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
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl pointer-events-auto flex flex-col gap-8 md:gap-12"
        >
          <div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-hero leading-[1.1] mb-6 tracking-tight"
            >
              Crafting Spaces
              <br /> That Define Lifestyle
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/80 max-w-2xl"
            >
              Luxury Architecture & Interior Design Studio Based In Kerala
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
            <button className="btn btn-gold w-fit">
              View Projects
            </button>
            <button className="btn btn-outline-light w-fit">
              Book Consultation
            </button>
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
      `}</style>
    </section>
  );
};
