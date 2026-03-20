"use client";

import { motion, useTransform } from "framer-motion";

export const Scene4WorldResponds = ({ scrollYProgress }: { scrollYProgress: any }) => {
  // Scene 4 corresponds to 35% to 55% scroll
  const opacity = useTransform(scrollYProgress, [0.32, 0.40, 0.50, 0.60], [0, 1, 1, 0]);

  // Lantern properties
  const lanternY1 = useTransform(scrollYProgress, [0.38, 0.50], ["translateY(50px)", "translateY(-150px)"]);
  const lanternY2 = useTransform(scrollYProgress, [0.42, 0.55], ["translateY(80px)", "translateY(-100px)"]);
  const lanternOpacity1 = useTransform(scrollYProgress, [0.38, 0.42], [0, 1]);
  const lanternOpacity2 = useTransform(scrollYProgress, [0.42, 0.46], [0, 1]);

  // String lights rippling opacity
  const stringLightReveal = useTransform(scrollYProgress, [0.44, 0.50], [0, 1]);

  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 z-20 pointer-events-none"
    >
      {/* Background ambient gold */}
      <motion.div 
        className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,200,50,0.1),transparent)]" 
      />

      {/* Floating lanterns ascending slowly */}
      <motion.div 
        className="absolute bottom-1/4 left-8 md:left-1/4 w-6 h-10 md:w-8 md:h-12 rounded-t flex flex-col items-center justify-end"
        style={{ transform: lanternY1, opacity: lanternOpacity1 }}
      >
        <div className="w-5 h-8 md:w-6 md:h-10 bg-gradient-to-t from-yellow-600 to-orange-400 opacity-80 rounded-sm shadow-[0_0_30px_#f59e0b]" />
        <div className="w-[2px] h-2 md:w-1 md:h-3 bg-yellow-200 mt-1" />
      </motion.div>

      <motion.div 
        className="absolute bottom-1/3 right-8 md:right-1/4 w-8 h-12 md:w-10 md:h-14 rounded-t flex flex-col items-center justify-end scale-75"
        style={{ transform: lanternY2, opacity: lanternOpacity2 }}
      >
        <div className="w-6 h-10 md:w-8 md:h-12 bg-gradient-to-t from-yellow-500 to-amber-300 opacity-90 rounded-sm shadow-[0_0_40px_#fbbf24]" />
        <div className="w-[2px] h-3 md:w-1 md:h-4 bg-yellow-100 mt-1" />
      </motion.div>

      {/* Strings of light rippling across architectural silhouette */}
      <motion.div 
        className="absolute top-[60%] w-[150%] left-[-25%] border-b-2 border-dashed border-amber-500/40 rounded-[100%] h-40 shadow-[0_5px_15px_rgba(251,191,36,0.5)]"
        style={{ opacity: stringLightReveal }}
      />

      <motion.div 
        className="absolute top-[65%] w-[120%] left-[-10%] border-t-[1px] border-dotted border-yellow-200/60 rounded-[100%] h-32 blur-[1px]"
        style={{ opacity: useTransform(scrollYProgress, [0.46, 0.52], [0, 1]) }}
      />
      
      {/* Decorative calligraphic arc hint */}
      <motion.svg 
        className="absolute inset-0 w-full h-full opacity-30 mix-blend-screen"
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <motion.path 
          d="M -10,80 Q 50,-20 110,80" 
          fill="none" 
          stroke="url(#gold-glow)" 
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          style={{ pathLength: useTransform(scrollYProgress, [0.4, 0.55], [0, 1]) }}
        />
        <defs>
          <linearGradient id="gold-glow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
            <stop offset="50%" stopColor="#fef3c7" stopOpacity="1" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </motion.div>
  );
};
