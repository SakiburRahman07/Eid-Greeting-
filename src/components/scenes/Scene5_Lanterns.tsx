"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  scrollYProgress: MotionValue<number>;
}

export const Scene5Lanterns = ({ scrollYProgress }: Props) => {
  const lanternsOpacity = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0]);
  const containerY = useTransform(scrollYProgress, [0.55, 0.8], ["100vh", "-100vh"]);

  const [lanternData, setLanternData] = useState<{ id: number; left: string; size: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const newLanterns = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 80 + 10}%`,
      size: Math.random() * 0.8 + 0.4,
      delay: Math.random() * 2,
      duration: Math.random() * 4 + 4,
    }));
    setLanternData(newLanterns);
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none z-20"
      style={{ opacity: lanternsOpacity, y: containerY }}
    >
      {lanternData.map((l) => (
        <motion.div
          key={l.id}
          className="absolute"
          style={{ left: l.left, bottom: "-200px", transform: `scale(${l.size})` }}
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: l.duration, repeat: Infinity, ease: "easeInOut", delay: l.delay }}
        >
          <LanternSVG />
        </motion.div>
      ))}
    </motion.div>
  );
};

const LanternSVG = () => (
  <div className="relative w-16 h-24 flex flex-col items-center">
    <div className="absolute inset-0 bg-[#FFAA00] blur-xl opacity-60 rounded-full" />
    <svg viewBox="0 0 100 150" className="relative w-full h-full text-[#DF9F2A] drop-shadow-[0_0_10px_rgba(255,170,0,0.8)]">
      <path d="M40 10H60V20H40z" fill="currentColor"/>
      <path d="M30 20 L70 20 L80 40 L20 40 Z" fill="currentColor"/>
      <path d="M25 40 L75 40 L65 110 L35 110 Z" fill="rgba(255, 230, 150, 0.4)" stroke="currentColor" strokeWidth="2"/>
      <line x1="40" y1="40" x2="45" y2="110" stroke="currentColor" strokeWidth="2"/>
      <line x1="60" y1="40" x2="55" y2="110" stroke="currentColor" strokeWidth="2"/>
      <path d="M30 110 L70 110 L60 130 L40 130 Z" fill="currentColor"/>
      <path d="M50 130 V145" stroke="currentColor" strokeWidth="2"/>
      <path d="M45 150 L50 145 L55 150" stroke="currentColor" fill="transparent" strokeWidth="1.5"/>
      <circle cx="50" cy="80" r="10" fill="#FFF5C4">
        <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  </div>
);
