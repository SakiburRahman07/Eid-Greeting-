"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface Props {
  scrollYProgress: MotionValue<number>;
}

export const Scene2MoonSequence = ({ scrollYProgress }: Props) => {
  const moonY = useTransform(scrollYProgress, [0, 0.2, 1], ["80vh", "15vh", "-10vh"]);
  const moonScale = useTransform(scrollYProgress, [0, 0.2], [1.2, 1]);
  const moonGlow = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <motion.div 
      className="absolute inset-0 w-full h-full pointer-events-none flex justify-center z-10"
      style={{ y: moonY, scale: moonScale }}
    >
      <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
        <motion.div 
          className="absolute inset-0 bg-[#ffd700] rounded-full blur-[100px]"
          style={{ opacity: moonGlow }}
        />
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full drop-shadow-[0_0_30px_rgba(255,215,0,0.6)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 5A45 45 0 1 0 95 50 35 35 0 1 1 50 5Z" fill="url(#moonGlowGradient)" />
          <path d="M50 5A45 45 0 1 0 95 50 35 35 0 1 1 50 5Z" fill="#FFF5C4" />
          <defs>
            <radialGradient id="moonGlowGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#FFEA8E" />
              <stop offset="100%" stopColor="#DF9F2A" />
            </radialGradient>
          </defs>
        </svg>
        <motion.svg
          viewBox="0 0 50 50"
          className="absolute top-[20%] right-[30%] w-8 h-8 text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.8)] origin-top"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M25 0L31.5 16.5L49 19.5L35 30.5L39.5 48L25 39.5L10.5 48L15 30.5L1 19.5L18.5 16.5L25 0Z" fill="currentColor" />
          <line x1="25" y1="-20" x2="25" y2="0" stroke="#FFD700" strokeWidth="1" />
        </motion.svg>
      </div>
    </motion.div>
  );
};
