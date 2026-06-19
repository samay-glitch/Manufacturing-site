import { motion } from 'framer-motion';
import { Globe, Mail } from 'lucide-react';
import TiltCard from '../shared/TiltCard';

const team = [
  {
    name: 'Rahul Sharma',
    role: 'Production Manager',
    experience: '12 Years Experience',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Amit Verma',
    role: 'Design Engineer',
    experience: '8 Years Experience',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Priya Singh',
    role: 'Quality Engineer',
    experience: '6 Years Experience',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-brand-navy border-t border-white/5">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider uppercase border rounded border-brand-cyan/30 text-brand-cyan bg-brand-cyan/10"
          >
            Our Experts
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-white md:text-5xl"
          >
            Meet The <span className="text-brand-cyan">Team</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <TiltCard intensity={10} className="p-0 overflow-hidden group h-full">
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-steel via-transparent to-transparent opacity-80" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Social links reveal on hover */}
                  <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 transform translate-x-10 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <a href="#" className="p-2 bg-brand-navy/80 hover:bg-brand-cyan rounded-full text-white backdrop-blur-sm transition-colors interactive">
                      <Globe size={18} />
                    </a>
                    <a href="#" className="p-2 bg-brand-navy/80 hover:bg-brand-cyan rounded-full text-white backdrop-blur-sm transition-colors interactive">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>

                <div className="p-6 relative bg-brand-steel z-20">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors">{member.name}</h3>
                  <p className="text-brand-cyan font-medium text-sm mb-3">{member.role}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-px bg-brand-gray/50" />
                    <span className="text-brand-gray/70 text-sm">{member.experience}</span>
                  </div>
                  
                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-cyan transition-all duration-500 group-hover:w-full" />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
