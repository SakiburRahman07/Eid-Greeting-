"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  scrollYProgress: MotionValue<number>;
}

export const Scene1Atmosphere = ({ scrollYProgress }: Props) => {
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  const [stars, setStars] = useState<{ id: number; top: string; left: string; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
    setStars(newStars);
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none w-full h-full z-0"
      style={{ y: bgY }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#03040c] via-[#090e1f] to-[#121c2e] opacity-80" />
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              boxShadow: `0 0 ${star.size * 2}px rgba(255,255,255,0.8)`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.2, 1] }}
            transition={{ duration: star.duration, repeat: Infinity, delay: star.delay, ease: "easeInOut" }}
          />
        ))}
      </div>
      <div className="absolute bottom-[-10%] left-0 w-full h-[30%] bg-[#1a2c4e] blur-[150px] opacity-30 rounded-full" />
    </motion.div>
  );
};
