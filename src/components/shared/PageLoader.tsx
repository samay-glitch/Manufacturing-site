import { motion } from 'framer-motion';

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-navy">
      <div className="relative w-24 h-24">
        {/* CNC Tool path inspired spinner */}
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full text-brand-orange"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              rotate: [0, 360, 720],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold tracking-tighter text-brand-gray">T</span>
        </div>
      </div>
      <motion.p
        className="mt-4 text-sm font-medium tracking-widest uppercase text-brand-gray/60"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        Loading
      </motion.p>
    </div>
  );
};

export default PageLoader;
