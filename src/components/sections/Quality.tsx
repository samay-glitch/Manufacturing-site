import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Users, CheckCircle } from 'lucide-react';

const features = [
  { icon: Activity, title: 'Advanced Testing Equipment' },
  { icon: ShieldCheck, title: 'ISO Standards' },
  { icon: Users, title: 'Skilled Engineers' },
  { icon: CheckCircle, title: 'Strict Quality Control' },
];

const certifications = [
  { title: 'ISO 9001', desc: 'Certified' },
  { title: 'Quality', desc: 'Management' },
  { title: 'Safety', desc: 'Standards' },
];

const Quality = () => {
  return (
    <section id="quality" className="py-24 overflow-hidden bg-brand-steel relative">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider uppercase border rounded border-brand-cyan/30 text-brand-cyan bg-brand-cyan/10"
            >
              Assurance
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-6 text-4xl font-bold text-white md:text-5xl"
            >
              Our Commitment <br />
              <span className="text-gradient">To Quality</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-10 text-lg leading-relaxed text-brand-gray/80 max-w-xl"
            >
              Quality is the cornerstone of our manufacturing process. We employ rigorous inspection methods and state-of-the-art testing equipment to ensure every component meets exact specifications.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-brand-navy/50 border border-white/5"
                >
                  <div className="text-brand-cyan">
                    <feature.icon size={24} />
                  </div>
                  <span className="font-semibold text-white">{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content - Certifications */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Central spinning element or graphic */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[1px] border-dashed rounded-full border-brand-cyan/20 scale-[1.2] hidden md:block"
              />

              <div className="grid gap-6">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.15 }}
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    className="relative flex items-center justify-between p-8 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-navy to-brand-steel border border-white/10 group interactive shadow-xl"
                    style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                  >
                    {/* Metallic Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full" />
                    
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-1 relative z-10">{cert.title}</h4>
                      <p className="text-brand-cyan font-medium uppercase tracking-wider text-sm relative z-10">{cert.desc}</p>
                    </div>
                    
                    <div className="w-16 h-16 rounded-full bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20 relative z-10 group-hover:bg-brand-cyan/20 transition-colors">
                      <ShieldCheck size={32} className="text-brand-cyan" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
