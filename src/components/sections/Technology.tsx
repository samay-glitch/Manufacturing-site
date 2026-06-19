import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  {
    title: 'CNC Machines',
    description: 'Advanced CNC machining technology for accurate production.',
    image: 'https://images.unsplash.com/photo-1580983508104-58231c6a0c0e?q=80&w=800&auto=format&fit=crop',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Laser Cutting',
    description: 'High precision cutting solutions for complex geometric shapes.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Welding & Fabrication',
    description: 'Strong and durable fabrication processes ensuring structural integrity.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
  },
  {
    title: 'Quality Testing',
    description: 'Advanced inspection methods to maintain rigorous standards.',
    image: 'https://images.unsplash.com/photo-1581092335878-2d9fd86aecf3?q=80&w=800&auto=format&fit=crop',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const Technology = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !wrapperRef.current) return;
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.tech-card');
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => `+=${wrapperRef.current?.offsetWidth || 0}`,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="technology" className="bg-brand-steel overflow-hidden">
      {/* Container for GSAP Pin */}
      <div ref={containerRef} className="h-screen flex flex-col justify-center py-20 relative">
        <div className="container px-6 mx-auto mb-12 shrink-0">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider uppercase border rounded border-brand-orange/30 text-brand-orange bg-brand-orange/10">
            Capabilities
          </div>
          <h2 className="text-4xl font-bold text-white md:text-5xl max-w-2xl">
            Machinery & <span className="text-brand-orange">Technology</span>
          </h2>
        </div>

        {/* Horizontal Scroll Wrapper */}
        <div ref={wrapperRef} className="flex w-[400vw] sm:w-[200vw] lg:w-[133vw] xl:w-[100vw] h-[60vh] pl-6 md:pl-24">
          {technologies.map((tech, i) => (
            <div key={i} className="tech-card w-[100vw] sm:w-[50vw] lg:w-[33.33vw] xl:w-[25vw] h-full flex-shrink-0 px-4">
              <div className="relative w-full h-full overflow-hidden group rounded-2xl bg-brand-navy border border-white/5">
                {/* Background Image */}
                <img 
                  src={tech.image} 
                  alt={tech.title} 
                  className="absolute inset-0 object-cover w-full h-full opacity-40 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
                />
                
                {/* Scanning line animation */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-cyan shadow-[0_0_10px_#5BC0BE] -translate-y-full opacity-0 group-hover:animate-scan z-10" />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                  <div className="mb-6 text-brand-cyan transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {tech.icon}
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                    {tech.title}
                  </h3>
                  <div className="h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:h-24">
                    <p className="text-brand-gray/80 leading-relaxed pt-2 border-t border-white/10">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
