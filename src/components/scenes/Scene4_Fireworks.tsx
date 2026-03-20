"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { useMemo } from "react";
import { SCROLL_TIMINGS } from "@/lib/config";

interface BurstType {
  id: number;
  left: string;
  top: string;
  scale: number;
  delay: number;
  color: string;
}

export const Scene4Fireworks = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const p = scrollYProgress;
  const [start, end] = SCROLL_TIMINGS.fireworks;
  // Fade in at the start, fade out at the end of its active sequence
  const fwOpacity = useTransform(p, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);

  // Pre-calculate fireworks statically to avoid re-renders impacting React hydration
  const bursts = useMemo<BurstType[]>(() => {
    const defaultColors = ["#FFD700", "#FF69B4", "#00FFFF", "#32CD32", "#FF4500"];
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: `${(Math.sin(i * 99) * 40 + 50).toFixed(2)}%`,
      top: `${(Math.cos(i * 88) * 30 + 30).toFixed(2)}%`,
      scale: (i % 3) * 0.5 + 0.8,
      delay: (i % 4) * 0.4,
      color: defaultColors[i % defaultColors.length],
    }));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none z-15 overflow-hidden will-change-opacity"
      style={{ opacity: fwOpacity }}
    >
      {bursts.map((burst) => (
        <FireworkBurst key={burst.id} burst={burst} />
      ))}
    </motion.div>
  );
};

const FireworkBurst = ({ burst }: { burst: BurstType }) => {
  // Static particle offset map
  const particles = useMemo(() => Array.from({ length: 16 }).map((_, i) => {
    const angle = (i * 360) / 16;
    const rad = (angle * Math.PI) / 180;
    const distance = 120;
    return { x: Math.cos(rad) * distance, y: Math.sin(rad) * distance };
  }), []);

  return (
    <div 
      className="absolute mix-blend-screen"
      style={{ left: burst.left, top: burst.top, transform: `scale(${burst.scale})` }}
    >
      {/* Central glow core */}
      <motion.div 
        className="absolute left-[-10px] top-[-10px] w-5 h-5 rounded-full blur-[10px]"
        style={{ backgroundColor: burst.color }}
        animate={{ opacity: [0, 0.8, 0], scale: [0, 2, 0] }}
        transition={{ duration: 1.5, delay: burst.delay, repeat: Infinity, ease: "easeOut", repeatDelay: 1.5 }}
      />
      {particles.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute left-0 top-0 w-1.5 h-1.5 rounded-full will-change-transform"
          style={{ backgroundColor: burst.color, boxShadow: `0 0 12px ${burst.color}` }}
          animate={{ x: [0, pos.x], y: [0, pos.y], opacity: [1, 0] }}
          transition={{ duration: 1.5, delay: burst.delay, repeat: Infinity, ease: "easeOut", repeatDelay: 1.5 }}
        />
      ))}
    </div>
  );
};
