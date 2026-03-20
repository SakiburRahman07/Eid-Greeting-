"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { useMemo } from "react";
import { SCROLL_TIMINGS } from "@/lib/config";

export const Scene5Lanterns = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const p = scrollYProgress;
  const [start, end] = SCROLL_TIMINGS.lanterns;
  
  const lanternsOpacity = useTransform(p, [start, start + 0.05, end - 0.1, end], [0, 1, 1, 0]);
  // Epic vertical shift tied to user's scroll depth
  const containerY = useTransform(p, [start, end], ["120vh", "-120vh"]);

  const lanternData = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${(Math.sin(i * 11) * 45 + 50).toFixed(2)}%`,
      size: (i % 4) * 0.2 + 0.5,
      delay: (i % 5) * 0.5,
      duration: (i % 3) + 4,
    }));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none z-20 will-change-transform"
      style={{ opacity: lanternsOpacity, y: containerY }}
    >
      {lanternData.map((l) => (
        <motion.div
          key={l.id}
          className="absolute will-change-transform"
          style={{ left: l.left, bottom: "-200px", transform: `scale(${l.size})` }}
          animate={{ x: [-25, 25, -25], rotate: [-2, 2, -2] }}
          transition={{ duration: l.duration, repeat: Infinity, ease: "easeInOut", delay: l.delay }}
        >
          <LanternSVG delay={l.delay} />
        </motion.div>
      ))}
    </motion.div>
  );
};

const LanternSVG = ({ delay }: { delay: number }) => (
  <div className="relative w-20 h-28 flex flex-col items-center">
    <div className="absolute inset-[-20%] bg-[#FFAA00] blur-2xl opacity-50 rounded-full mix-blend-screen" />
    <svg viewBox="0 0 100 150" className="relative w-full h-full text-[#DF9F2A] drop-shadow-[0_0_15px_rgba(255,170,0,0.9)]">
      {/* Intricate top cap */}
      <path d="M45 5H55V10H45z" fill="currentColor"/>
      <path d="M30 10 L70 10 L80 35 L20 35 Z" fill="currentColor"/>
      
      {/* Glass Body with texture */}
      <path d="M25 35 L75 35 L65 115 L35 115 Z" fill="rgba(255, 230, 150, 0.25)" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="40" y1="35" x2="45" y2="115" stroke="currentColor" strokeWidth="2.5" opacity="0.8"/>
      <line x1="60" y1="35" x2="55" y2="115" stroke="currentColor" strokeWidth="2.5" opacity="0.8"/>
      
      {/* Base */}
      <path d="M30 115 L70 115 L60 135 L40 135 Z" fill="currentColor"/>
      
      {/* Royal Tassel */}
      <path d="M50 135 V150" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M45 155 L50 150 L55 155" stroke="currentColor" fill="transparent" strokeWidth="2"/>

      {/* Internal Flickering Flame */}
      <circle cx="50" cy="85" r="10" fill="#FFF5C4">
        <animate attributeName="r" values="9;14;9" dur={`${2 + delay % 1}s`} repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;1;0.7" dur={`${2 + delay % 1}s`} repeatCount="indefinite" />
      </circle>
    </svg>
  </div>
);
