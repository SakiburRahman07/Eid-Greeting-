"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

export const Scene5HumanWarmth = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  // Scene 5 corresponds to 45% to 65% scroll
  const opacity = useTransform(scrollYProgress, [0.42, 0.50, 0.60, 0.68], [0, 1, 1, 0]);

  // Gentle parallax and scale for the human silhouettes
  const figuresY = useTransform(scrollYProgress, [0.45, 0.65], ["50px", "0px"]);
  const figuresScale = useTransform(scrollYProgress, [0.45, 0.65], [0.95, 1.05]);

  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 z-30 pointer-events-none flex items-end justify-center"
    >
      <motion.div 
        style={{ y: figuresY, scale: figuresScale }}
        className="relative w-full h-[40vh] max-w-4xl"
      >
        {/* Softly lit ground */}
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#0e0a05] to-transparent z-0" />

        {/* Silhouettes of a family / kids, back-lit by the environment */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-6 z-10 w-64 h-48 scale-[0.6] sm:scale-75 md:scale-100 origin-bottom">
           
           {/* Adult / Older Child silhouette */}
           <div className="relative w-16 h-36 bg-[#040201] rounded-t-full drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
             <div className="absolute top-2 left-6 w-8 h-8 bg-[#040201] rounded-full" />
             {/* Arm pointing up */}
             <motion.div 
               className="absolute top-12 -right-4 w-12 h-3 bg-[#040201] rounded-full origin-left"
               style={{ rotate: useTransform(scrollYProgress, [0.48, 0.52], [-30, -50]) }}
             />
           </div>

           {/* Younger Child silhouette */}
           <div className="relative w-12 h-24 bg-[#040201] rounded-t-full drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
             <div className="absolute -top-2 left-2 w-6 h-6 bg-[#040201] rounded-full" />
             {/* Looking up motion */}
             <motion.div 
               className="absolute -top-4 left-3 w-5 h-5 bg-[#040201] rounded-full"
               style={{ y: useTransform(scrollYProgress, [0.48, 0.52], [0, -2]), rotate: useTransform(scrollYProgress, [0.48, 0.52], [0, -10]) }}
             />
           </div>

        </div>

        {/* Subtly floating dust motes around them */}
        <motion.div 
           className="absolute bottom-12 left-1/3 w-1 h-1 bg-amber-200/60 rounded-full blur-[1px]"
           style={{ y: useTransform(scrollYProgress, [0.45, 0.60], [0, -50]), opacity: useTransform(scrollYProgress, [0.45, 0.50, 0.60], [0, 1, 0]) }}
        />
        <motion.div 
           className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-amber-100/50 rounded-full blur-[1px]"
           style={{ y: useTransform(scrollYProgress, [0.48, 0.65], [0, -60]), opacity: useTransform(scrollYProgress, [0.45, 0.55, 0.65], [0, 1, 0]) }}
        />

      </motion.div>
    </motion.div>
  );
};
