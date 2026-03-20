"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

const Lantern = ({ scrollYProgress, i }: { scrollYProgress: MotionValue<number>, i: number }) => {
  const y = useTransform(scrollYProgress, [0.65, 0.85], [0, -200 - (i * 20)]);
  return (
    <motion.div 
      className="absolute w-2 h-4 rounded-full bg-gradient-to-t from-yellow-500 to-amber-200 blur-[2px] shadow-[0_0_15px_#fbbf24]"
      style={{
        left: `${(i * 7) % 100}%`,
        top: `${80 + (i * 11) % 40}%`,
        y
      }}
    />
  );
};

export const Scene7Crescendo = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  // Scene 7 climax is from 65% to 85% scroll
  const opacity = useTransform(scrollYProgress, [0.62, 0.70, 0.82, 0.88], [0, 1, 1, 0]);

  // Fireworks expansion
  const fw1Scale = useTransform(scrollYProgress, [0.68, 0.75], [0, 1.5]);
  const fw1Opacity = useTransform(scrollYProgress, [0.68, 0.72, 0.80, 0.85], [0, 1, 1, 0]);
  
  const fw2Scale = useTransform(scrollYProgress, [0.72, 0.80], [0, 1.2]);
  const fw2Opacity = useTransform(scrollYProgress, [0.72, 0.76, 0.82, 0.86], [0, 1, 1, 0]);

  // Glowing orb/lantern field moving up
  const lanternFieldY = useTransform(scrollYProgress, [0.65, 0.85], ["10%", "-30%"]);

  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 z-50 pointer-events-none overflow-hidden"
    >
      {/* City Scale Expanding - warm festive ambient light */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,200,50,0.15),transparent_70%)] mix-blend-screen" 
      />

      <motion.div style={{ y: lanternFieldY }} className="absolute inset-0 w-full h-full">
         {/* Abstract lantern lights drifting */}
         {Array.from({ length: 15 }).map((_, i) => (
           <Lantern key={i} i={i} scrollYProgress={scrollYProgress} />
         ))}
      </motion.div>

      {/* Elegant Fireworks (Sculptural and Slow) */}
      <motion.div 
        className="absolute top-1/4 left-4 md:left-1/4"
        style={{ scale: fw1Scale, opacity: fw1Opacity }}
      >
        <div className="relative scale-50 sm:scale-75 md:scale-100 origin-center">
           {Array.from({ length: 12 }).map((_, i) => (
             <motion.div 
               key={i}
               className="absolute w-1 h-32 origin-bottom"
               style={{ rotate: i * 30 }}
             >
                <div className="w-1 h-8 bg-gradient-to-t from-transparent via-yellow-200 to-white rounded-full mt-4 blur-[1px] shadow-[0_0_10px_#fff]" />
             </motion.div>
           ))}
           <div className="absolute top-16 left-0 -ml-8 w-16 h-16 rounded-full bg-amber-400/20 blur-xl mix-blend-screen" />
        </div>
      </motion.div>

      <motion.div 
        className="absolute top-1/3 right-4 md:right-1/4"
        style={{ scale: fw2Scale, opacity: fw2Opacity }}
      >
        <div className="relative scale-[0.4] sm:scale-75 md:scale-100 origin-center">
           {Array.from({ length: 8 }).map((_, i) => (
             <motion.div 
               key={i}
               className="absolute w-[2px] h-40 origin-bottom"
               style={{ rotate: i * 45 + 20 }}
             >
                <div className="w-[2px] h-12 bg-gradient-to-t from-transparent via-amber-300 to-white rounded-full mt-8 blur-[1px] shadow-[0_0_15px_#fbbf24]" />
             </motion.div>
           ))}
           <div className="absolute top-20 left-0 -ml-12 w-24 h-24 rounded-full bg-orange-500/10 blur-2xl mix-blend-screen" />
        </div>
      </motion.div>

    </motion.div>
  );
};
