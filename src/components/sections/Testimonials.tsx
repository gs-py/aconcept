import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TESTIMONIALS } from "../../data/mock";

export const Testimonials = () => {
  return (
    <section className="section-pad bg-background overflow-hidden">
      <div className="container-site">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div>
            <span className="eyebrow mb-6">Client Voices</span>
            <h2 className="text-4xl md:text-6xl font-hero text-white">What Our Clients Say</h2>
          </div>
          
          <div className="flex gap-4 testimonials-nav-container">
            <button className="testi-prev w-12 h-12 border border-white/20 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white hover:border-accent transition-all duration-300">
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button className="testi-next w-12 h-12 border border-white/20 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white hover:border-accent transition-all duration-300">
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            navigation={{
              prevEl: '.testi-prev',
              nextEl: '.testi-next',
            }}
            pagination={{ 
              el: '.testi-pagination',
              clickable: true,
            }}
            spaceBetween={32}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            loop={true}
            speed={800}
            className="w-full"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-surface p-10 md:p-14 h-full flex flex-col border border-white/5">
                  <div className="text-6xl text-accent font-hero leading-none mb-6">“</div>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 flex-grow">
                    {testimonial.quote}
                  </p>
                  
                  <div className="w-12 h-px bg-accent/50 mb-8" />
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.client} 
                      className="w-12 h-12 rounded-full object-cover grayscale"
                    />
                    <div>
                      <h4 className="text-white font-medium mb-1">{testimonial.client}</h4>
                      <p className="text-sm text-muted">{testimonial.project}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Pagination */}
          <div className="testi-pagination flex gap-2 mt-12" />
        </div>
      </div>
      
      <style>{`
        .testi-pagination .swiper-pagination-bullet {
          width: 24px;
          height: 3px;
          border-radius: 0;
          background: rgba(255, 255, 255, 0.2);
          opacity: 1;
          transition: all 0.3s ease;
          margin: 0 !important;
          cursor: pointer;
        }
        .testi-pagination .swiper-pagination-bullet:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        .testi-pagination .swiper-pagination-bullet-active {
          background: #D4B06A;
          width: 32px;
        }
        .testi-prev.swiper-button-disabled,
        .testi-next.swiper-button-disabled {
          opacity: 0.3;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};
