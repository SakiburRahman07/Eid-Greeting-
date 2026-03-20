"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface Props {
  scrollYProgress: MotionValue<number>;
}

export const Scene6Typography = ({ scrollYProgress }: Props) => {
  const opacity = useTransform(scrollYProgress, [0.72, 0.78, 0.88, 0.95], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.72, 0.85], [3, 1]);
  const blurVal = useTransform(scrollYProgress, [0.72, 0.78], [20, 0]);
  const subOpacity = useTransform(scrollYProgress, [0.78, 0.82], [0, 1]);

  return (
    <motion.div 
      className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center z-30 space-y-8"
      style={{ opacity, scale }}
    >
      <motion.div style={{ filter: useTransform(blurVal, (v) => `blur(${v}px)`) }}>
        <h1 className="text-6xl md:text-8xl xl:text-9xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5C4] via-[#FFD700] to-[#DF9F2A] drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]">
          EID MUBARAK
        </h1>
      </motion.div>
      <motion.div 
        style={{ opacity: subOpacity }}
        className="text-lg md:text-2xl text-white/80 font-light tracking-[0.3em] uppercase text-center max-w-2xl px-4"
      >
        May this beautiful occasion fill your heart with joy and your home with peace.
      </motion.div>
    </motion.div>
  );
};
