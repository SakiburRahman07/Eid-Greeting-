"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface Props {
  scrollYProgress: MotionValue<number>;
}

export const Scene7FancyCard = ({ scrollYProgress }: Props) => {
  const containerY = useTransform(scrollYProgress, [0.85, 0.95], ["100vh", "0vh"]);
  const cardRotateX = useTransform(scrollYProgress, [0.93, 1], [-80, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0.9, 0.95], [0, 1]);
  const flapRotateX = useTransform(scrollYProgress, [0.9, 0.95], [0, -180]);
  const letterY = useTransform(scrollYProgress, [0.95, 1], ["0%", "-60%"]);

  return (
    <motion.div 
      className="absolute inset-0 pointer-events-auto flex items-center justify-center z-40 perspective-[1000px]"
      style={{ y: containerY, opacity: cardOpacity }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-none" />

      <motion.div 
        className="relative w-[320px] h-[220px] md:w-[500px] md:h-[350px]"
        style={{ rotateX: cardRotateX, transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 bg-[#0c1222] border border-[#d4af37]/30 rounded-md shadow-2xl" />

        <motion.div 
          className="absolute inset-x-4 top-4 bottom-4 bg-[#f8f5e6] rounded-sm shadow-inner flex flex-col items-center justify-center p-6 md:p-10 text-center"
          style={{ y: letterY, zIndex: 10 }}
        >
          <svg className="w-12 h-12 md:w-16 md:h-16 text-[#d4af37] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#d4af37" fillOpacity="0.3"/>
          </svg>
          <h2 className="text-2xl md:text-3xl font-serif text-[#1a1c29] mb-4">Eid Mubarak</h2>
          <p className="text-[#3c3f58] text-sm md:text-base font-light italic">
            &quot;Sending you warm wishes and happiness on this blessed day. May your prayers be answered and your joy be multiplied.&quot;
          </p>
          <div className="mt-8 pt-4 border-t border-[#d4af37]/40 w-full text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8a7f5d]">With Love & Prayers</span>
          </div>
        </motion.div>

        <div 
          className="absolute inset-0 bg-[#121c33] border-t border-[#d4af37]/30 rounded-b-md"
          style={{ clipPath: "polygon(0% 40%, 50% 70%, 100% 40%, 100% 100%, 0% 100%)", zIndex: 20 }}
        />

        <motion.div 
          className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-[#16213d] to-[#0c1222] origin-top border-b border-[#d4af37]/50 rounded-t-md"
          style={{ 
            clipPath: "polygon(0% 0%, 100% 0%, 50% 50%)", rotateX: flapRotateX, zIndex: 30, backfaceVisibility: "hidden"
          }}
        >
          <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#d4af37] shadow-[0_4px_10px_rgba(0,0,0,0.5)] flex items-center justify-center border-2 border-[#b8952b]">
            <span className="text-[#ffeeb5] text-xs font-serif">EID</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute inset-x-0 top-0 h-full bg-[#0a0f1c] origin-top opacity-0"
          style={{ 
            clipPath: "polygon(0% 0%, 100% 0%, 50% 50%)", rotateX: flapRotateX, zIndex: 5,
            opacity: useTransform(flapRotateX, (v) => v <= -90 ? 1 : 0)
          }}
        />
      </motion.div>
      
      <motion.div 
        className="fixed bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest uppercase flex flex-col items-center"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 0.95], [1, 0.5, 0.5, 0]) }}
      >
        <span className="mb-2">Scroll Down</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-[1px] h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </motion.div>
  );
};
