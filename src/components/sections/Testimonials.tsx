import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Excellent quality and timely delivery. Highly recommended. Their CNC machining precision exceeded our strict aerospace tolerances.",
    author: "James Wilson",
    role: "Procurement Director",
    company: "AeroTech Industries",
  },
  {
    id: 2,
    quote: "Professional team with outstanding engineering capabilities. They helped us redesign a critical component that saved us 15% in production costs.",
    author: "Sarah Jenkins",
    role: "Chief Engineer",
    company: "Global Motors",
  },
  {
    id: 3,
    quote: "Reliable manufacturing partner for our heavy projects. The structural integrity of their fabricated parts is unmatched in the industry.",
    author: "Michael Chang",
    role: "Operations Manager",
    company: "BuildCorp Heavy",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
      scale: 0.9,
    }),
  };

  return (
    <section className="py-24 bg-brand-navy overflow-hidden relative">
      {/* Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none flex flex-col justify-center overflow-hidden">
        <span className="text-[20vw] font-black leading-none tracking-tighter text-white whitespace-nowrap">TRUSTED</span>
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider uppercase border rounded border-brand-orange/30 text-brand-orange bg-brand-orange/10">
              Client Reviews
            </div>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              What Our Clients <span className="text-brand-orange">Say</span>
            </h2>
          </motion.div>

          <div className="relative h-[400px] sm:h-[350px] md:h-[300px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  rotateY: { duration: 0.6 },
                }}
                className="absolute inset-0 w-full"
                style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
              >
                <div className="bg-brand-steel border border-white/10 rounded-2xl p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden group shadow-2xl">
                  {/* Big Quote Icon */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="absolute -top-6 -right-6 text-brand-orange"
                  >
                    <Quote size={120} />
                  </motion.div>

                  <div className="relative z-10">
                    <div className="text-brand-orange mb-6">
                      <Quote size={32} />
                    </div>
                    <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-navy border border-white/10 flex items-center justify-center font-bold text-brand-orange text-xl">
                        {testimonials[currentIndex].author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white font-bold">{testimonials[currentIndex].author}</h4>
                        <p className="text-brand-gray/60 text-sm">
                          {testimonials[currentIndex].role}, <span className="text-brand-cyan">{testimonials[currentIndex].company}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-brand-steel border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange transition-colors interactive active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2 transition-all duration-300 rounded-full interactive ${
                    idx === currentIndex ? 'w-8 bg-brand-orange' : 'w-2 bg-brand-gray/30 hover:bg-brand-gray/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-brand-steel border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange transition-colors interactive active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
