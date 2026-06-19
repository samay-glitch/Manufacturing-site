import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import HeroScene from '../3d/HeroScene';

const AnimatedCounter = ({ end, label, suffix = '' }: { end: number, label: string, suffix?: string }) => {
  // Simplistic approach for counter - in a real app might use framer-motion useSpring + useTransform
  return (
    <div className="flex flex-col">
      <span className="text-3xl font-bold text-white md:text-4xl">
        {end}
        {suffix}
      </span>
      <span className="text-sm font-medium text-brand-gray/60">{label}</span>
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Check if reduced motion is preferred
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const sentence = "Engineering Precision. Manufacturing Excellence.";
  const words = sentence.split(" ");

  return (
    <section ref={containerRef} id="home" className="relative w-full h-screen overflow-hidden bg-brand-navy">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {!prefersReducedMotion ? (
          <Suspense fallback={<div className="w-full h-full bg-brand-navy" />}>
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
              <HeroScene />
            </Canvas>
          </Suspense>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-navy to-brand-steel" />
        )}
      </div>

      <motion.div 
        className="relative z-10 flex flex-col justify-center h-full container mx-auto px-6 pointer-events-none"
        style={{ y }}
      >
        <div className="max-w-4xl mt-20 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block px-3 py-1 mb-6 text-sm font-semibold tracking-wider uppercase border rounded border-brand-orange/30 text-brand-orange bg-brand-orange/10 backdrop-blur-sm"
          >
            Titan Engineering Solutions
          </motion.div>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.1,
                  ease: [0.2, 0.65, 0.3, 0.9],
                }}
                className="inline-block mr-3 lg:mr-4"
              >
                {word === "Precision." || word === "Excellence." ? (
                  <span className="text-gradient">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl mb-10 text-lg md:text-xl text-brand-gray/80 leading-relaxed"
          >
            We deliver high-quality industrial solutions through advanced manufacturing technology, precision engineering, and commitment to excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#products"
              className="px-8 py-4 font-bold text-center text-white transition-all rounded bg-brand-orange hover:bg-brand-orange/90 active:scale-95 interactive"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="px-8 py-4 font-bold text-center text-white transition-all border rounded border-white/20 hover:bg-white/10 backdrop-blur-sm active:scale-95 interactive"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-12 left-6 right-6 lg:left-auto lg:right-12 hidden md:flex gap-8 lg:gap-12 p-6 rounded-lg glass"
        >
          <AnimatedCounter end={15} suffix="+" label="Years Experience" />
          <AnimatedCounter end={500} suffix="+" label="Projects Completed" />
          <AnimatedCounter end={50} suffix="+" label="Industrial Clients" />
          <AnimatedCounter end={99} suffix="%" label="Quality Assurance" />
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
