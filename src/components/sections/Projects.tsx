import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Automotive Component Manufacturing',
    clientReq: 'High volume production of precision transmission gears with zero tolerance for defects.',
    solution: 'Implemented automated CNC gear hobbing cells with integrated coordinate measuring machines (CMM) for real-time quality control.',
    result: 'Achieved 10,000 units/month with 99.98% quality acceptance rate, reducing client lead time by 3 weeks.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
    category: 'Automotive',
  },
  {
    id: 2,
    title: 'Industrial Machine Fabrication',
    clientReq: 'Custom fabrication of heavy-duty chassis for mining equipment.',
    solution: 'Utilized advanced robotic welding and high-strength steel alloys, followed by stress relief heat treatment.',
    result: 'Delivered chassis with 40% higher structural rigidity while reducing overall weight by 15%.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop',
    category: 'Heavy Machinery',
  },
  {
    id: 3,
    title: 'Custom Engineering Solution',
    clientReq: 'Design and manufacture specialized turbine blades for a renewable energy project.',
    solution: '5-axis CNC machining of titanium alloys with specialized aerodynamic surface finishing.',
    result: 'Improved turbine efficiency by 12% and extended component lifespan under extreme conditions.',
    image: 'https://images.unsplash.com/photo-1533090368676-1fd25485db88?q=80&w=800&auto=format&fit=crop',
    category: 'Energy',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-brand-navy">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider uppercase border rounded border-brand-orange/30 text-brand-orange bg-brand-orange/10"
          >
            Case Studies
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-white md:text-5xl"
          >
            Featured <span className="text-brand-orange">Projects</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              layoutId={`project-container-${project.id}`}
              onClick={() => setSelectedProject(project.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative overflow-hidden cursor-pointer group rounded-2xl bg-brand-steel border border-white/5 interactive"
            >
              <motion.div layoutId={`project-image-${project.id}`} className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-steel via-transparent to-transparent opacity-80" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 z-20 px-3 py-1 text-xs font-bold uppercase rounded bg-brand-orange text-white">
                  {project.category}
                </div>
              </motion.div>
              
              <motion.div layoutId={`project-content-${project.id}`} className="p-6 relative z-20">
                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-brand-orange transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-brand-gray/70 text-sm line-clamp-2 mb-4">
                  {project.clientReq}
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-brand-orange">
                  Read Case Study <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 z-[100] bg-brand-navy/90 backdrop-blur-md cursor-pointer"
              />
              
              <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-10 pointer-events-none">
                {projects.filter(p => p.id === selectedProject).map(project => (
                  <motion.div
                    key="modal"
                    layoutId={`project-container-${project.id}`}
                    className="w-full max-w-4xl bg-brand-steel rounded-2xl overflow-hidden shadow-2xl pointer-events-auto relative flex flex-col md:flex-row max-h-[90vh]"
                  >
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 z-50 p-2 text-white bg-black/50 hover:bg-brand-orange rounded-full transition-colors interactive backdrop-blur-sm"
                    >
                      <X size={20} />
                    </button>

                    <motion.div layoutId={`project-image-${project.id}`} className="w-full md:w-1/2 h-64 md:h-auto relative">
                      <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
                      <div className="absolute top-4 left-4 z-20 px-3 py-1 text-xs font-bold uppercase rounded bg-brand-orange text-white">
                        {project.category}
                      </div>
                    </motion.div>

                    <motion.div layoutId={`project-content-${project.id}`} className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                      <h3 className="mb-8 text-2xl md:text-3xl font-bold text-white leading-tight">
                        {project.title}
                      </h3>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Client Requirement</h4>
                          <p className="text-brand-gray/80 leading-relaxed">{project.clientReq}</p>
                        </div>
                        
                        <div className="w-12 h-px bg-white/10" />
                        
                        <div>
                          <h4 className="text-sm font-bold text-brand-cyan uppercase tracking-wider mb-2">Solution Provided</h4>
                          <p className="text-brand-gray/80 leading-relaxed">{project.solution}</p>
                        </div>

                        <div className="w-12 h-px bg-white/10" />
                        
                        <div>
                          <h4 className="text-sm font-bold text-green-400 uppercase tracking-wider mb-2">Result</h4>
                          <p className="text-white leading-relaxed font-medium">{project.result}</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
