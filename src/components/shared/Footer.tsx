import { ArrowUp, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-brand-navy border-t border-white/10">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <a href="#home" className="flex items-center gap-2 group interactive">
              <div className="flex items-center justify-center w-8 h-8 font-bold text-white rounded bg-brand-orange">
                T
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Titan
              </span>
            </a>
            <p className="text-brand-gray/70 leading-relaxed text-sm">
              Engineering Precision. Manufacturing Excellence. We deliver high-quality industrial solutions worldwide.
            </p>
            <div className="flex items-center gap-4">
              {[1, 2, 3, 4].map((_, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 transition-colors rounded-full bg-white/5 text-brand-gray hover:bg-brand-orange hover:text-white interactive"
                >
                  <Globe size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Us', 'Products', 'Capabilities', 'Projects'].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-sm transition-colors text-brand-gray/70 hover:text-brand-orange interactive relative group inline-block">
                    {link}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-orange transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Industries</h4>
            <ul className="flex flex-col gap-3">
              {['Automotive', 'Aerospace', 'Construction', 'Energy Sector', 'Heavy Machinery'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-sm transition-colors text-brand-gray/70 hover:text-brand-orange interactive relative group inline-block">
                    {link}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-orange transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-sm text-brand-gray/70">
              <li>
                <strong className="block text-brand-gray">Address:</strong>
                Industrial Area, Phase 1, City
              </li>
              <li>
                <strong className="block text-brand-gray">Phone:</strong>
                +91 98765 43210
              </li>
              <li>
                <strong className="block text-brand-gray">Email:</strong>
                contact@titanengineering.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between pt-8 border-t border-white/10 md:flex-row gap-4">
          <p className="text-sm text-brand-gray/50">
            &copy; {new Date().getFullYear()} Titan Engineering Solutions. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 transition-colors rounded-full bg-white/5 text-brand-gray hover:bg-brand-orange hover:text-white interactive group"
            whileHover={{ y: -5 }}
          >
            <ArrowUp size={20} className="transition-transform group-hover:rotate-180" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
