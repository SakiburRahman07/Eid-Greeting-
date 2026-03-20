"use client";

import { motion, useTransform } from "framer-motion";

export const Scene3MoonSighting = ({ scrollYProgress }: { scrollYProgress: any }) => {
  // Scene 3 acts between 20% and 40% of standard scroll
  const opacity = useTransform(scrollYProgress, [0.18, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  
  // Moon reveals from behind an architectural silhouette
  const hideY = useTransform(scrollYProgress, [0.22, 0.30], ["100%", "-20%"]);
  const glow = useTransform(scrollYProgress, [0.28, 0.35], ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 60px rgba(255,240,200,0.8)"]);
  const scale = useTransform(scrollYProgress, [0.20, 0.35], [0.8, 1.2]);

  // Palette warming effect (a subtle overlay)
  const warmOverlayOpacity = useTransform(scrollYProgress, [0.25, 0.38], [0, 0.15]);

  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
    >
      {/* Warm Sky Gradient Transition */}
      <motion.div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#2d2215]/40 to-transparent"
        style={{ opacity: warmOverlayOpacity }}
      />

      {/* Foreground architectural blocking element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#04060f] rounded-t-full z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] border-t border-[#ffffff0a]">
      </div>

      {/* The Crescent Moon */}
      <motion.div 
        style={{ 
          y: hideY, 
          scale: scale,
          boxShadow: glow 
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 z-10 w-32 h-32 rounded-full bg-gradient-to-tr from-transparent via-[#ffe8b5] to-white"
      >
        <div className="absolute top-2 right-4 w-28 h-28 bg-[#04060f] rounded-full" />
      </motion.div>

      {/* Stars brightening around the moon */}
      <motion.div 
        className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#fff]"
        style={{ opacity: useTransform(scrollYProgress, [0.28, 0.32], [0, 1]) }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-white shadow-[0_0_5px_#fff]"
        style={{ opacity: useTransform(scrollYProgress, [0.30, 0.34], [0, 1]) }}
      />

    </motion.div>
  );
};
