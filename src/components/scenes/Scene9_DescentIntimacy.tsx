"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

export const Scene9DescentIntimacy = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  // Scene 9 cools down the environment from 88% to 95%
  const opacity = useTransform(scrollYProgress, [0.86, 0.90, 0.96, 0.98], [0, 1, 1, 0]);

  // Scale zooms in slightly to create an intimate feeling
  const scale = useTransform(scrollYProgress, [0.88, 0.96], [1, 1.1]);

  // Floating lights settling downward
  const settleY = useTransform(scrollYProgress, [0.88, 0.96], ["0%", "20%"]);
  const settleOpacity = useTransform(scrollYProgress, [0.88, 0.92, 0.96], [1, 0.5, 0]);

  return (
    <motion.div 
      style={{ opacity, scale }}
      className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden"
    >
      {/* Return to deep night gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-[#020308] via-transparent to-transparent z-0" 
        style={{ opacity: useTransform(scrollYProgress, [0.88, 0.92], [0, 1]) }}
      />
      
      {/* Settling dust/lights */}
      <motion.div style={{ y: settleY, opacity: settleOpacity }} className="absolute inset-0">
         {Array.from({ length: 20 }).map((_, i) => (
           <motion.div 
             key={i}
             className="absolute w-1 h-1 rounded-full bg-amber-200/40 blur-[1px]"
             style={{
               left: `${(i * 13) % 100}%`,
               top: `${(i * 17) % 100}%`,
             }}
           />
         ))}
      </motion.div>

      {/* Gentle focus aura for the upcoming card */}
      <motion.div 
        className="w-[120vw] h-[120vw] md:w-[400px] md:h-[400px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] rounded-full z-10"
        style={{ opacity: useTransform(scrollYProgress, [0.92, 0.96], [0, 1]) }}
      />
    </motion.div>
  );
};
