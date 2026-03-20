"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { SCROLL_TIMINGS } from "@/lib/config";

export const Scene3KidsSequence = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const p = scrollYProgress;
  const [eStart, eEnd] = SCROLL_TIMINGS.kidsEnter;
  const [pStart, pEnd] = SCROLL_TIMINGS.kidsPoint;

  // Cinematic Walk In
  const kidsX = useTransform(p, [eStart, eEnd], ["-50vw", "10vw"]);
  const kidsOpacity = useTransform(p, [eStart, eStart + 0.05], [0, 1]);
  
  // Pointing Gesture with organic timing
  // Point up smoothly, hold, then lower back slightly as scroll continues heavily
  const armRotate = useTransform(p, [pStart, pEnd, 0.6], [0, -50, -40]);
  
  // Magic flare when fingers hit the perfect angle
  const handTouchGlowOpacity = useTransform(
    p, 
    [pStart + 0.04, pEnd, 0.55], 
    [0, 1, 0]
  );
  
  const auraScale = useTransform(p, [pStart + 0.04, pEnd], [0.5, 1.5]);

  return (
    <motion.div 
      className="absolute bottom-0 left-0 w-full h-[60vh] pointer-events-none z-20 flex items-end will-change-transform"
      style={{ opacity: kidsOpacity }}
    >
      <motion.div 
        className="relative w-64 h-80 xl:w-96 xl:h-[30rem] ml-4 md:ml-12 mb-[-8%] drop-shadow-2xl"
        style={{ x: kidsX }}
      >
        {/* Kid 1 (Taller, pointing) Silhouette */}
        <svg viewBox="0 0 200 300" className="absolute bottom-0 w-48 h-[18rem] md:w-64 md:h-[24rem] xl:w-80 xl:h-[30rem] text-[#050810]" xmlns="http://www.w3.org/2000/svg">
          {/* Main Body */}
          <path d="M100 80C111.046 80 120 71.0457 120 60C120 48.9543 111.046 40 100 40C88.9543 40 80 48.9543 80 60C80 71.0457 88.9543 80 100 80Z" fill="currentColor"/>
          <path d="M130 140C130 110 115 90 95 90C75 90 60 110 60 140V220H130V140Z" fill="currentColor"/>
          <path d="M70 220H90V300H70V220Z" fill="currentColor"/>
          <path d="M100 220H120V300H100V220Z" fill="currentColor"/>
          
          {/* Animated Right Arm */}
          <motion.g style={{ rotate: armRotate, originX: "30%", originY: "20%" }} className="origin-[110px_100px] will-change-transform">
            <path d="M110 100C120 100 150 120 160 140V145C150 140 125 115 110 115V100Z" fill="currentColor"/>
            <path d="M160 135L175 145L165 150Z" fill="currentColor"/>
            
            {/* The Magic Touch Point */}
            <motion.circle 
              cx="175" cy="145" r="8" 
              fill="#FFFFFF" 
              style={{ opacity: handTouchGlowOpacity, scale: auraScale }}
              className="drop-shadow-[0_0_20px_rgba(255,255,255,1)] mix-blend-screen"
            />
            {/* Second core glow */}
            <motion.circle 
              cx="175" cy="145" r="3" 
              fill="#FFF" 
              style={{ opacity: handTouchGlowOpacity }}
            />
          </motion.g>

          <path d="M60 100C50 100 40 130 45 150L60 120V100Z" fill="currentColor"/>
        </svg>

        {/* Kid 2 (Smaller, looking up) Silhouette */}
        <svg viewBox="0 0 150 200" className="absolute bottom-0 -right-4 w-32 h-[12rem] md:w-40 md:h-[15rem] xl:w-56 xl:h-[20rem] text-[#050810]" xmlns="http://www.w3.org/2000/svg">
          <path d="M75 50C83.2843 50 90 43.2843 90 35C90 26.7157 83.2843 20 75 20C66.7157 20 60 26.7157 60 35C60 43.2843 66.7157 50 75 50Z" fill="currentColor"/>
          <path d="M95 90C95 65 85 55 70 55C55 55 45 65 45 90V150H95V90Z" fill="currentColor"/>
          <path d="M50 150H65V200H50V150Z" fill="currentColor"/>
          <path d="M75 150H90V200H75V150Z" fill="currentColor"/>
          <path d="M45 65C35 65 30 85 35 100L45 80V65Z" fill="currentColor"/>
          <path d="M95 65C105 65 110 85 105 100L95 80V65Z" fill="currentColor"/>
        </svg>
      </motion.div>
    </motion.div>
  );
};
