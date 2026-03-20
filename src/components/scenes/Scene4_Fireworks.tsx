"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  scrollYProgress: MotionValue<number>;
}

interface BurstType {
  id: number;
  left: string;
  top: string;
  scale: number;
  delay: number;
  color: string;
}

export const Scene4Fireworks = ({ scrollYProgress }: Props) => {
  const fwOpacity = useTransform(scrollYProgress, [0.43, 0.48, 0.6, 0.65], [0, 1, 1, 0]);
  const [bursts, setBursts] = useState<BurstType[]>([]);

  useEffect(() => {
    const defaultColors = ["#FFD700", "#FF69B4", "#00FFFF", "#32CD32", "#FF4500"];
    const newBursts = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 40 + 10}%`,
      scale: Math.random() * 1.5 + 0.5,
      delay: Math.random() * 2,
      color: defaultColors[Math.floor(Math.random() * defaultColors.length)],
    }));
    setBursts(newBursts);
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none z-15 overflow-hidden"
      style={{ opacity: fwOpacity }}
    >
      {bursts.map((burst) => (
        <FireworkBurst key={burst.id} burst={burst} />
      ))}
    </motion.div>
  );
};

const FireworkBurst = ({ burst }: { burst: BurstType }) => {
  const particles = Array.from({ length: 16 });
  return (
    <div 
      className="absolute"
      style={{ left: burst.left, top: burst.top, transform: `scale(${burst.scale})` }}
    >
      {particles.map((_, i) => {
        const angle = (i * 360) / particles.length;
        const rad = (angle * Math.PI) / 180;
        const distance = 100;
        const x = Math.cos(rad) * distance;
        const y = Math.sin(rad) * distance;

        return (
          <motion.div
            key={i}
            className="absolute left-0 top-0 w-2 h-2 rounded-full"
            style={{ backgroundColor: burst.color, boxShadow: `0 0 10px ${burst.color}` }}
            animate={{ x: [0, x], y: [0, y], opacity: [1, 0], scale: [1, 0] }}
            transition={{ duration: 1.5, delay: burst.delay, repeat: Infinity, ease: "easeOut", repeatDelay: Math.random() + 0.5 }}
          />
        );
      })}
    </div>
  );
};
