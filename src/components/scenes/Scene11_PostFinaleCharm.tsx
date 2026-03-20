"use client";

import { motion, useTransform, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const Scene11PostFinaleCharm = ({ scrollYProgress }: { scrollYProgress: any }) => {
  // Scene 11 is the very end (98% to 100%)
  const opacity = useTransform(scrollYProgress, [0.97, 0.99], [0, 1]);
  const yOffset = useTransform(scrollYProgress, [0.97, 0.99], ["20px", "0px"]);

  return (
    <motion.div 
      style={{ opacity, y: yOffset }}
      className="absolute bottom-24 md:bottom-12 left-0 w-full z-[80] flex flex-col items-center justify-center pointer-events-auto"
    >
      <button 
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: 'Eid Mubarak',
              text: 'May this Eid bring joy to your heart, peace to your home, and light to your soul.',
              url: window.location.href,
            });
          } else {
            // Fallback copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
          }
        }}
        className="group flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <span className="text-white/50 text-xs font-light tracking-widest uppercase transition-colors group-hover:text-amber-200">
          Send this blessing onward
        </span>
        <motion.div 
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/40 group-hover:text-amber-400">
             <path d="M12 5V19M12 19L5 12M12 19L19 12" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </button>
    </motion.div>
  );
};
