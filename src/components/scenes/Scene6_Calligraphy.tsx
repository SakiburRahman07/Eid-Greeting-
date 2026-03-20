"use client";

import { motion, useTransform } from "framer-motion";

export const Scene6Calligraphy = ({ scrollYProgress }: { scrollYProgress: any }) => {
  // Scene 6 corresponds to 55% to 75% scroll
  const opacity = useTransform(scrollYProgress, [0.52, 0.60, 0.70, 0.78], [0, 1, 1, 0]);

  // Calligraphy trace
  const pathLength = useTransform(scrollYProgress, [0.55, 0.68], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.62, 0.68], [0, 1]);

  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 z-40 pointer-events-none flex items-center justify-center"
    >
      <div className="relative w-full max-w-2xl aspect-video">
        
        {/* Glow behind the calligraphy */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.15),transparent)] mix-blend-screen rounded-full filter blur-[40px]"
          style={{ opacity: glowOpacity, scale: useTransform(scrollYProgress, [0.60, 0.70], [0.8, 1.2]) }}
        />

        {/* The Calligraphic SVG Line (Abstract ornament) */}
        <svg viewBox="0 0 400 200" className="w-full h-full drop-shadow-[0_0_8px_rgba(255,240,200,0.8)] fill-none">
          <defs>
             <linearGradient id="gold-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stopColor="#fff" />
               <stop offset="50%" stopColor="#fbbf24" />
               <stop offset="100%" stopColor="#d97706" />
             </linearGradient>
             <filter id="glow-filter">
               <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
               <feMerge>
                 <feMergeNode in="coloredBlur"/>
                 <feMergeNode in="SourceGraphic"/>
               </feMerge>
             </filter>
          </defs>
          <motion.path
            d="M 50,150 C 70,50 150,50 200,100 C 250,150 330,150 350,50"
            stroke="url(#gold-stroke)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#glow-filter)"
            style={{ pathLength }}
          />
          <motion.path
            d="M 120,80 C 140,40 180,60 170,110 C 160,160 250,180 280,110"
            stroke="url(#gold-stroke)"
            strokeWidth="1.5"
            strokeLinecap="round"
            filter="url(#glow-filter)"
            style={{ pathLength: useTransform(scrollYProgress, [0.58, 0.70], [0, 1]) }}
          />
        </svg>

        {/* Trailing light particles tracking the path roughly */}
         <motion.div 
            className="absolute w-4 h-4 bg-white rounded-full mix-blend-screen shadow-[0_0_20px_#fff,0_0_40px_#fbbf24]"
            style={{
               x: useTransform(scrollYProgress, [0.55, 0.68], ["10%", "90%"]),
               y: useTransform(scrollYProgress, [0.55, 0.61, 0.68], ["75%", "25%", "25%"]),
               opacity: useTransform(scrollYProgress, [0.55, 0.58, 0.66, 0.68], [0, 1, 1, 0])
            }}
         />
      </div>
    </motion.div>
  );
};
