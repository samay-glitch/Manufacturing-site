import { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Plane, HardHat, Zap, Truck } from 'lucide-react';
import TiltCard from '../shared/TiltCard';

const industries = [
  {
    id: 1,
    title: 'Automotive',
    description: 'Components and solutions for automotive manufacturers ensuring high performance and safety.',
    icon: Car,
    color: 'text-brand-orange',
    bg: 'bg-brand-orange/10',
  },
  {
    id: 2,
    title: 'Aerospace',
    description: 'High precision engineering components meeting strict aerospace tolerances and standards.',
    icon: Plane,
    color: 'text-brand-cyan',
    bg: 'bg-brand-cyan/10',
  },
  {
    id: 3,
    title: 'Construction',
    description: 'Industrial fabrication and machinery parts for heavy construction applications.',
    icon: HardHat,
    color: 'text-white',
    bg: 'bg-white/10',
  },
  {
    id: 4,
    title: 'Energy Sector',
    description: 'Reliable engineering solutions for power generation, renewable energy, and distribution.',
    icon: Zap,
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
  },
  {
    id: 5,
    title: 'Heavy Machinery',
    description: 'Durable components engineered for extreme conditions in industrial equipment.',
    icon: Truck,
    color: 'text-brand-gray',
    bg: 'bg-brand-gray/10',
  },
];

const Industries = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="industries" className="py-24 bg-brand-navy border-t border-white/5">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider uppercase border rounded border-brand-orange/30 text-brand-orange bg-brand-orange/10"
            >
              Industries We Serve
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-white md:text-5xl"
            >
              Global Expertise Across <br />
              <span className="text-brand-orange">Sectors</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-gray/70 max-w-md"
          >
            Our precision engineering components are trusted by leading companies across diverse industrial sectors worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            const isHovered = hoveredIndex === index;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <motion.div
                key={ind.id}
                className={`col-span-1 ${index === 3 || index === 4 ? 'lg:col-span-1' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  scale: isHovered ? 1.02 : isOtherHovered ? 0.98 : 1,
                  opacity: isOtherHovered ? 0.7 : 1,
                }}
              >
                <TiltCard intensity={10} className="h-full group">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${ind.bg} ${ind.color}`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white">{ind.title}</h3>
                  <p className="text-brand-gray/70 leading-relaxed text-sm">
                    {ind.description}
                  </p>
                  
                  {/* Subtle decorative elements */}
                  <div className="absolute top-6 right-6 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <svg className={`w-6 h-6 ${ind.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
