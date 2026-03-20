"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

export const Scene10KeepsakeFinale = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  // Scene 10 is the core finale from 94% to 99%
  const opacity = useTransform(scrollYProgress, [0.92, 0.95], [0, 1]);

  // Card revealing animation via scroll
  const cardScale = useTransform(scrollYProgress, [0.93, 0.97], [0.9, 1]);
  const cardY = useTransform(scrollYProgress, [0.93, 0.97], ["10%", "0%"]);

  // Envelope / Cover opening (using rotateX for a 3D effect)
  const coverRotateX = useTransform(scrollYProgress, [0.95, 0.98], [0, -180]);
  const innerContentOpacity = useTransform(scrollYProgress, [0.96, 0.98], [0, 1]);
  // Use a tiny amount of spring or just pure scroll transform
  
  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 z-[70] flex flex-col items-center justify-center perspective-[1200px]"
    >
      <motion.div 
        style={{ scale: cardScale, y: cardY }}
        className="relative w-[85vw] md:w-full max-w-[320px] sm:max-w-md aspect-[3/4] md:aspect-square md:max-w-xl mx-auto"
      >
        {/* The Card Back / Envelope Base */}
        <div className="absolute inset-0 bg-[#fbf8f1] rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#e5d9c5] overflow-hidden flex items-center justify-center p-6 md:p-8 text-center text-[#4a3f35]">
           <motion.div style={{ opacity: innerContentOpacity }} className="flex flex-col items-center justify-center gap-6 h-full">
             <div className="w-16 h-1 bg-[#d4af37] rounded-full mx-auto" />
             <p className="font-serif text-base sm:text-lg md:text-2xl italic leading-relaxed">
               &quot;May this Eid bring joy to your heart, peace to your home, and light to your soul.&quot;
             </p>
             <div className="w-16 h-1 bg-[#d4af37] rounded-full mx-auto" />
             <div className="mt-2 md:mt-4 flex flex-col items-center">
               <p className="text-[10px] md:text-sm tracking-widest uppercase text-[#8b7355]">
                 With Warmest Wishes,
               </p>
               <p className="font-serif text-base md:text-xl italic mt-1 text-[#4a3f35]">
                 Sakib
               </p>
             </div>
           </motion.div>

           {/* Inner subtle pattern */}
           <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        </div>

        {/* The Card Flap / Cover */}
        <motion.div 
           className="absolute top-0 left-0 w-full h-1/2 bg-[#f4ebd8] rounded-t-lg origin-top z-10 border-b border-[#e5d9c5] shadow-md flex items-end justify-center pb-4"
           style={{ rotateX: coverRotateX, transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
        >
           <div className="w-12 h-12 rounded-full border border-[#d4af37] flex items-center justify-center bg-[#fbf8f1] shadow-sm pointer-events-none">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5">
                 <path d="M12 2L15 10H23L16.5 15.5L19 23L12 18L5 23L7.5 15.5L1 10H9L12 2Z" fill="#d4af37" fillOpacity="0.2" />
              </svg>
           </div>
        </motion.div>
        
        {/* Decorative corner pieces for the base */}
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#d4af37]/40 rounded-tl pointer-events-none" />
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#d4af37]/40 rounded-tr pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#d4af37]/40 rounded-bl pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#d4af37]/40 rounded-br pointer-events-none" />

      </motion.div>
    </motion.div>
  );
};
