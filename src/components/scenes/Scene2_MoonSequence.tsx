"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { SCROLL_TIMINGS } from "@/lib/config";

export const Scene2MoonSequence = ({ scrollYProgress }: MotionValue<number> | any) => {
  const p = scrollYProgress as MotionValue<number>;
  const [start, end] = SCROLL_TIMINGS.moonRise;
  
  const moonY = useTransform(p, [start, end, 1], ["80vh", "15vh", "-10vh"]);
  const moonScale = useTransform(p, [start, end], [1.1, 1]);
  const moonGlowOpacity = useTransform(p, [start, end], [0.2, 1]); // Glow brightens

  return (
    <motion.div 
      className="absolute inset-0 w-full h-full pointer-events-none flex justify-center z-10 will-change-transform"
      style={{ y: moonY, scale: moonScale }}
    >
      <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 top-0 mt-8">
        {/* Soft magical backdrop bloom */}
        <motion.div 
          className="absolute inset-[-50%] bg-[#ffea8e] rounded-full blur-[140px] mix-blend-screen"
          style={{ opacity: moonGlowOpacity }}
        />
        
        {/* Core Moon SVG with Texture */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full drop-shadow-[0_0_40px_rgba(255,215,0,0.8)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="moonRadiance" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#FFF5C4" />
              <stop offset="85%" stopColor="#FFC837" />
              <stop offset="100%" stopColor="#DF9F2A" />
            </radialGradient>
            <filter id="craterTexture">
              <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" result="noise" />
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 0.9 0 0 0  0 0.6 0 0 0  0 0 0 0.15 0" in="noise" result="coloredNoise" />
              <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="texture" />
              <feBlend mode="multiply" in="texture" in2="SourceGraphic" />
            </filter>
          </defs>
          
          {/* Base crescent */}
          <path d="M50 5A45 45 0 1 0 95 50 35 35 0 1 1 50 5Z" fill="url(#moonRadiance)" />
          {/* Texture Overlay */}
          <path d="M50 5A45 45 0 1 0 95 50 35 35 0 1 1 50 5Z" fill="#FFF" filter="url(#craterTexture)" opacity="0.6" />
        </svg>

        {/* Delicate Hanging Star Ornament */}
        <motion.svg
          viewBox="0 0 50 50"
          className="absolute top-[15%] right-[25%] w-10 h-10 text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.9)] origin-top will-change-transform"
          animate={{ rotate: [-6, 6, -6], y: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M25 0L31.5 16.5L49 19.5L35 30.5L39.5 48L25 39.5L10.5 48L15 30.5L1 19.5L18.5 16.5L25 0Z" fill="currentColor" />
          <line x1="25" y1="-25" x2="25" y2="0" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" className="opacity-80" />
        </motion.svg>
      </div>
    </motion.div>
  );
};
