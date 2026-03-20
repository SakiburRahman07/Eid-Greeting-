"use client";

import { motion, useTransform } from "framer-motion";

export const Scene8EidMubarak = ({ scrollYProgress }: { scrollYProgress: any }) => {
  // Scene 8 typography reveals between 75% and 90%
  const opacity = useTransform(scrollYProgress, [0.72, 0.80, 0.88, 0.94], [0, 1, 1, 0]);

  // Typography layers revealing sequentially
  const shadowOpacity = useTransform(scrollYProgress, [0.75, 0.80], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.77, 0.82], [0, 1]);
  const strokeOpacity = useTransform(scrollYProgress, [0.79, 0.84], [0, 1]);
  const fillOpacity = useTransform(scrollYProgress, [0.81, 0.86], [0, 1]);

  const scale = useTransform(scrollYProgress, [0.75, 0.90], [0.9, 1.05]);
  const yOffset = useTransform(scrollYProgress, [0.75, 0.90], ["5%", "-5%"]);

  return (
    <motion.div 
      style={{ opacity, scale, y: yOffset }}
      className="absolute inset-0 z-[60] pointer-events-none flex flex-col items-center justify-center font-serif"
    >
      <div className="relative text-6xl md:text-8xl lg:text-9xl tracking-widest text-center">
        
        {/* Layer 1: Shadow Outline */}
        <motion.div 
          className="absolute inset-0 text-amber-900/40 blur-sm translate-y-4"
          style={{ opacity: shadowOpacity }}
        >
          EID MUBARAK
        </motion.div>

        {/* Layer 2: Glow */}
        <motion.div 
          className="absolute inset-0 text-amber-400 blur-[20px] mix-blend-screen"
          style={{ opacity: glowOpacity }}
        >
          EID MUBARAK
        </motion.div>

        {/* Layer 3: Stroke/Outline */}
        <motion.div 
          className="absolute inset-0 text-transparent"
          style={{ 
            opacity: strokeOpacity, 
            WebkitTextStroke: "1px rgba(255, 230, 150, 0.8)" 
          }}
        >
          EID MUBARAK
        </motion.div>

        {/* Layer 4: Full Body Fill */}
        <motion.div 
          className="relative bg-clip-text text-transparent bg-gradient-to-b from-white via-[#ffe8b5] to-[#f59e0b] drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
          style={{ opacity: fillOpacity }}
        >
          EID MUBARAK
        </motion.div>

      </div>

      {/* Subtitle / Blessing */}
      <motion.div 
         className="mt-8 text-lg font-light tracking-[0.3em] text-white/70 uppercase"
         style={{ opacity: useTransform(scrollYProgress, [0.83, 0.88], [0, 1]) }}
      >
        May your world be filled with light
      </motion.div>

    </motion.div>
  );
};
