import { motion } from 'framer-motion';
import TiltCard from '../shared/TiltCard';
import { Lightbulb, ShieldCheck, Cog } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="relative py-24 bg-brand-navy">
      <div className="container px-6 mx-auto">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="mb-6 text-3xl font-bold text-white md:text-5xl">
              About Titan <span className="text-brand-orange">Engineering</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="mb-6 text-lg leading-relaxed text-brand-gray/80">
              Titan Engineering Solutions is a leading manufacturing company specializing in precision engineering, custom components, and industrial solutions. We combine advanced technology with skilled expertise to deliver reliable products for various industries.
            </motion.p>
            
            <motion.div variants={itemVariants} className="mb-10 pl-6 border-l-4 border-brand-orange">
              <h3 className="mb-2 text-xl font-semibold text-white">Our Mission</h3>
              <p className="text-brand-gray/70">
                To provide cutting-edge engineering solutions that enhance manufacturing efficiency, driven by our commitment to precision, quality, and innovation.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <div className="w-full bg-brand-steel rounded-full h-1.5 mb-2 relative overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="absolute top-0 left-0 h-full bg-brand-orange"
                />
              </div>
              <div className="flex justify-between text-sm font-bold text-brand-gray">
                <span>Established 2011</span>
                <span>Present</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="md:col-span-2 xl:col-span-1 xl:translate-y-12">
              <TiltCard intensity={15} className="h-full">
                <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-brand-orange/20 text-brand-orange">
                  <Lightbulb size={24} />
                </div>
                <h4 className="mb-3 text-xl font-bold text-white">Innovation</h4>
                <p className="text-brand-gray/70 leading-relaxed">
                  Using modern technology to create efficient solutions. We constantly upgrade our capabilities to meet new challenges.
                </p>
              </TiltCard>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-1">
              <TiltCard intensity={15} className="h-full">
                <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-brand-cyan/20 text-brand-cyan">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="mb-3 text-xl font-bold text-white">Quality</h4>
                <p className="text-brand-gray/70 leading-relaxed">
                  Maintaining strict quality standards in every process. Our rigorous testing ensures faultless delivery.
                </p>
              </TiltCard>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-1">
              <TiltCard intensity={15} className="h-full">
                <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-white/20 text-white">
                  <Cog size={24} />
                </div>
                <h4 className="mb-3 text-xl font-bold text-white">Reliability</h4>
                <p className="text-brand-gray/70 leading-relaxed">
                  Delivering consistent performance and customer satisfaction with robust industrial components.
                </p>
              </TiltCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
