"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

export const Scene2SignsInDark = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  // Scene 2 emerges from 10% to 25% of the total scroll
  // Fades in as Scene 1 starts fading out, fades out when moon reveals
  const opacity = useTransform(scrollYProgress, [0.08, 0.15, 0.22, 0.28], [0, 1, 1, 0]);
  const yOffset = useTransform(scrollYProgress, [0.08, 0.25], ["10%", "-10%"]);

  // Windows lighting up one by one
  const windowOpacities = [
    useTransform(scrollYProgress, [0.12, 0.14], [0, 1]),
    useTransform(scrollYProgress, [0.15, 0.17], [0, 1]),
    useTransform(scrollYProgress, [0.18, 0.20], [0, 1]),
  ];

  const cloudXOffset = useTransform(scrollYProgress, [0.08, 0.25], ["-5%", "5%"]);
  
  return (
    <motion.div 
      style={{ opacity, y: yOffset }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
    >
      {/* Cloud veils shifting */}
      <motion.div 
        className="absolute inset-0 z-10 opacity-30"
        style={{ x: cloudXOffset, backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(20, 30, 50, 0.4), transparent 70%)', filter: 'blur(40px)' }}
      />

      {/* Geometric pattern fragments shimmering in shadows */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 mix-blend-screen">
        <svg width="400" height="400" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <pattern id="islamic-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
        </svg>
      </div>

      {/* Subtle atmospheric particles (static representation for simplicity, typically you'd map these to a lightweight particle array) */}
      <div className="absolute inset-0 z-20 flex" style={{ background: 'radial-gradient(circle at top, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '70px 70px' }} />

      {/* Architecture with distant windows lighting up */}
      <div className="absolute bottom-1/4 w-full flex justify-center gap-6 md:gap-12 z-30 scale-75 sm:scale-90 md:scale-100">
        <div className="relative w-20 h-32 md:w-24 md:h-40 bg-[#060a16] border border-[#ffffff0a] rounded-sm">
           <motion.div style={{ opacity: windowOpacities[0] }} className="absolute top-4 left-4 w-3 h-5 md:w-4 md:h-6 bg-yellow-900/40 rounded-sm shadow-[0_0_15px_rgba(200,150,50,0.5)]" />
           <motion.div style={{ opacity: windowOpacities[2] }} className="absolute bottom-6 right-3 w-3 h-5 md:w-4 md:h-6 bg-yellow-900/30 shadow-[0_0_10px_rgba(200,150,50,0.3)] rounded-sm" />
        </div>
        <div className="relative w-28 h-48 md:w-32 md:h-56 bg-[#04060f] border border-[#ffffff0a] rounded-sm top-8">
           <motion.div style={{ opacity: windowOpacities[1] }} className="absolute top-8 right-4 w-4 h-6 md:w-5 md:h-8 bg-amber-800/50 shadow-[0_0_20px_rgba(214,142,43,0.6)] rounded-sm" />
        </div>
      </div>
      
    </motion.div>
  );
};
