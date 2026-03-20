"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { SCROLL_TIMINGS } from "@/lib/config";

export const Scene7FancyCard = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const p = scrollYProgress;
  const [start, end] = SCROLL_TIMINGS.card;

  const containerY = useTransform(p, [start, start + 0.05], ["100vh", "0vh"]);
  const cardRotateX = useTransform(p, [start + 0.05, end], [-85, 0]);
  const cardOpacity = useTransform(p, [start + 0.03, start + 0.08], [0, 1]);
  
  const flapRotateX = useTransform(p, [start + 0.04, start + 0.09], [0, -180]);
  const letterY = useTransform(p, [start + 0.08, end], ["0%", "-55%"]);

  return (
    <motion.div 
      className="absolute inset-0 pointer-events-auto flex items-center justify-center z-40 perspective-[1500px]"
      style={{ y: containerY, opacity: cardOpacity }}
    >
      {/* Super dark vignette to focus card */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-none" />

      <motion.div 
        className="relative w-[340px] h-[240px] md:w-[600px] md:h-[400px] drop-shadow-2xl"
        style={{ rotateX: cardRotateX, transformStyle: "preserve-3d" }}
      >
        {/* Envelope Back */}
        <div className="absolute inset-0 bg-[#070b14] border border-[#d4af37]/40 rounded-lg shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a2c4e] to-transparent opacity-30" />
        </div>

        {/* The Luxury Letter Card */}
        <motion.div 
          className="absolute inset-x-3 top-3 bottom-3 bg-[#fdfbf3] rounded-sm shadow-inner overflow-hidden flex flex-col items-center justify-center p-6 md:p-12 text-center"
          style={{ y: letterY, zIndex: 10, border: "2px solid #d4af37" }}
        >
          {/* Subtle Arabesque Pattern Background inside Card */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M20 0l-5 15H0l12 10-5 15 13-10 13 10-5-15 12-10H25z%22 fill=%22%23d4af37%22 fill-rule=%22evenodd%22/%3E%3C/svg%3E')", backgroundSize: "60px" }} />

          <svg className="w-12 h-12 md:w-20 md:h-20 text-[#d4af37] mb-6 drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#d4af37" fillOpacity="0.2"/>
          </svg>
          
          <h2 className="text-3xl md:text-5xl font-serif text-[#0f111a] tracking-wide mb-6">Eid Mubarak</h2>
          
          <p className="text-[#3c3f58] text-sm md:text-xl font-light italic leading-relaxed max-w-[85%]">
            "Sending you warm wishes and happiness on this blessed day. May your prayers be answered and your joy be multiplied."
          </p>
          
          <div className="mt-10 pt-6 border-t border-[#d4af37]/30 w-full text-center">
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#8a7f5d] font-semibold">With Love & Prayers</span>
          </div>
        </motion.div>

        {/* Envelope Pocket Front */}
        <div 
          className="absolute inset-0 bg-[#0d1526] border-t border-[#d4af37]/40 rounded-b-lg shadow-[0_-5px_20px_rgba(0,0,0,0.5)]"
          style={{ clipPath: "polygon(0% 45%, 50% 75%, 100% 45%, 100% 100%, 0% 100%)", zIndex: 20 }}
        >
           <div className="absolute inset-0 border-b-2 border-l-2 border-r-2 border-[#d4af37]/20 rounded-b-lg" />
        </div>

        {/* Top Flap */}
        <motion.div 
          className="absolute inset-x-0 top-0 h-[65%] bg-gradient-to-b from-[#182544] to-[#0c1222] origin-top border-b border-[#d4af37]/60 rounded-t-lg shadow-xl"
          style={{ 
            clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)", rotateX: flapRotateX, zIndex: 30, backfaceVisibility: "hidden"
          }}
        >
          {/* Gold Wax Seal */}
          <div className="absolute left-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#ffd700] to-[#b8952b] shadow-[0_5px_15px_rgba(0,0,0,0.6)] flex items-center justify-center border-2 border-[#ffea8e] z-40">
            <span className="text-[#594200] text-sm md:text-base font-serif font-bold tracking-widest drop-shadow-sm">EID</span>
          </div>
        </motion.div>
        
        {/* Flap inside backface */}
        <motion.div 
          className="absolute inset-x-0 top-0 h-[65%] bg-[#0a0f1c] origin-top opacity-0 rounded-t-lg border-t border-[#d4af37]/20"
          style={{ 
            clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)", rotateX: flapRotateX, zIndex: 5,
            opacity: useTransform(flapRotateX, (v) => v <= -90 ? 1 : 0)
          }}
        />
      </motion.div>
      
      {/* Cinematic scroll down hint indicator */}
      <motion.div 
        className="fixed bottom-8 left-1/2 -translate-x-1/2 text-[#d4af37]/70 text-xs tracking-[0.3em] uppercase flex flex-col items-center"
        style={{ opacity: useTransform(p, [start, end - 0.05, end], [0, 1, 0]) }}
      >
        <span className="mb-3 font-semibold">Keep Scrolling</span>
        <motion.div 
          animate={{ height: ["0px", "40px", "0px"], y: [0, 20, 40] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[2px] bg-gradient-to-b from-[#d4af37] to-transparent origin-top"
        />
      </motion.div>

    </motion.div>
  );
};
