"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { SCROLL_TIMINGS, THEME_COLORS } from "@/lib/config";

export const Scene6Typography = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const p = scrollYProgress;
  const [start, end] = SCROLL_TIMINGS.typography;

  const opacity = useTransform(p, [start, start + 0.06, end - 0.05, end], [0, 1, 1, 0]);
  const scale = useTransform(p, [start, start + 0.1], [2.5, 1]);
  const blurVal = useTransform(p, [start, start + 0.08], [25, 0]);
  
  const subOpacity = useTransform(p, [start + 0.06, start + 0.1], [0, 1]);
  const letterSpacing = useTransform(p, [start, start + 0.12], ["0.5em", "0.15em"]);

  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center z-30 space-y-6 md:space-y-10 will-change-transform"
      style={{ opacity, scale }}
    >
      <motion.div style={{ filter: useTransform(blurVal, (v) => `blur(${v}px)`) }}>
        <h1 
          className="text-5xl md:text-8xl xl:text-9xl font-serif font-bold text-transparent bg-clip-text text-center px-4"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, #FFFFFF, ${THEME_COLORS.goldLight}, ${THEME_COLORS.goldPrimary})`,
            letterSpacing,
            filter: "drop-shadow(0px 10px 30px rgba(212, 175, 55, 0.4))"
          }}
        >
          EID MUBARAK
        </h1>
      </motion.div>
      <motion.div 
        style={{ opacity: subOpacity }}
        className="text-base md:text-2xl text-white/90 font-light tracking-[0.2em] md:tracking-[0.3em] uppercase text-center max-w-3xl px-6 mix-blend-screen"
      >
        May this beautiful occasion fill your heart with joy and your home with peace.
      </motion.div>

      {/* Decorative filigree divider under the text */}
      <motion.div 
        style={{ opacity: subOpacity }}
        className="w-48 md:w-96 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mt-8"
      />
    </motion.div>
  );
};
