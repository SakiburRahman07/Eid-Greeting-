"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export const Scene1HushBeforeEid = ({ scrollYProgress }: { scrollYProgress: any }) => {
  // Scene 1 occupies 0% to 15% of the total scroll
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const yOffset = useTransform(scrollYProgress, [0, 0.15], ["0%", "-20%"]);
  
  // Subtle breathing motion for stars/horizon
  const slowBreathe: any = {
    opacity: [0.4, 0.8, 0.4],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <motion.div 
      style={{ opacity, y: yOffset }}
      className="absolute inset-0 flex flex-col items-center justify-center bg-transparent pointer-events-none"
    >
      {/* Deep navy-black sky is handled by the parent background */}
      
      {/* Sparse stars */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 80px 70px, rgba(255,255,255,0.8), rgba(0,0,0,0)), radial-gradient(1px 1px at 150px 120px, rgba(255,255,255,0.6), rgba(0,0,0,0))', backgroundSize: '200px 200px' }}
        animate={slowBreathe}
      />

      {/* Faint horizon line */}
      <motion.div 
        className="absolute bottom-0 w-full h-1/3 z-10"
        style={{ background: 'linear-gradient(to top, rgba(10, 15, 30, 0.9), transparent)' }}
      >
        <div className="absolute bottom-4 left-0 w-full flex justify-around opacity-20 blur-[1px]">
           {/* Abstract domes/minarets silhouettes */}
           <div className="w-16 h-24 bg-[#0a0f1e] rounded-t-full relative top-12" />
           <div className="w-8 h-32 bg-[#0a0f1e] rounded-t-sm" />
           <div className="w-20 h-20 bg-[#0a0f1e] rounded-t-full relative top-16" />
        </div>
      </motion.div>

      {/* Gentle Prompt */}
      <motion.div 
        className="z-20 text-center text-white/40 tracking-widest text-sm uppercase font-light mt-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
      >
        presents
        <div className="mt-8 text-xs text-white/20 animate-bounce">
          Scroll to witness the night
        </div>
      </motion.div>
    </motion.div>
  );
};
