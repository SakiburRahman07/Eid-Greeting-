"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { useMemo } from "react";
import { THEME_COLORS } from "@/lib/config";

interface Props {
  scrollYProgress: MotionValue<number>;
}

export const Scene1Atmosphere = ({ scrollYProgress }: Props) => {
  // Parallax the background gradient slightly to give massive depth
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  
  // Use stable math for stars to prevent re-renders on every layout trigger
  const starsArray = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      left: `${(Math.sin(i * 1234.5) * 50 + 50).toFixed(2)}%`,
      top: `${(Math.cos(i * 6789.0) * 50 + 50).toFixed(2)}%`,
      size: (i % 3) * 0.7 + 0.8,
      duration: (i % 5) + 3,
      delay: (i % 7) * 0.5,
    }));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none w-full h-full z-0 will-change-transform"
      style={{ y: bgY }}
    >
      {/* Cinematic Deep Horizon Gradient */}
      <div 
        className="absolute inset-0 opacity-90"
        style={{
          background: `lineargradient(to bottom, ${THEME_COLORS.skyDeep} 0%, ${THEME_COLORS.skyMid} 60%, ${THEME_COLORS.skyLow} 100%)`
        }} 
      />
      
      {/* Optimized Twinkling Stars Map */}
      <div className="absolute inset-0">
        {starsArray.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white will-change-opacity"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: `0 0 ${star.size * 2}px rgba(255,255,255,0.6)`,
            }}
            animate={{ opacity: [0.1, 1, 0.1], scale: [1, 1.2, 1] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Ambient Atmospheric Horizon Glow */}
      <div className="absolute bottom-[-15%] left-0 w-full h-[40%] bg-[#1a2c4e] blur-[150px] opacity-40 rounded-[100%]" />
    </motion.div>
  );
};
