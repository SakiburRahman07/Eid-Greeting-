"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface Props {
  scrollYProgress: MotionValue<number>;
}

export const Scene3KidsSequence = ({ scrollYProgress }: Props) => {
  const kidsX = useTransform(scrollYProgress, [0.2, 0.35], ["-40vw", "10vw"]);
  const kidsOpacity = useTransform(scrollYProgress, [0.2, 0.25], [0, 1]);
  const armRotate = useTransform(scrollYProgress, [0.35, 0.45], [0, -45]);
  const handTouchGlowOpacity = useTransform(scrollYProgress, [0.42, 0.47, 0.52], [0, 1, 0]);

  return (
    <motion.div 
      className="absolute bottom-0 left-0 w-full h-[60vh] pointer-events-none z-20 flex items-end"
      style={{ opacity: kidsOpacity }}
    >
      <motion.div 
        className="relative w-64 h-80 xl:w-96 xl:h-[30rem] ml-4 md:ml-12 mb-[-5%]"
        style={{ x: kidsX }}
      >
        {/* Kid 1 (Taller, pointing) Silhouette */}
        <svg viewBox="0 0 200 300" className="absolute bottom-0 w-48 h-[18rem] md:w-64 md:h-[24rem] xl:w-80 xl:h-[30rem] text-[#050810]" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 80C111.046 80 120 71.0457 120 60C120 48.9543 111.046 40 100 40C88.9543 40 80 48.9543 80 60C80 71.0457 88.9543 80 100 80Z" fill="currentColor"/>
          <path d="M130 140C130 110 115 90 95 90C75 90 60 110 60 140V220H130V140Z" fill="currentColor"/>
          <path d="M70 220H90V300H70V220Z" fill="currentColor"/>
          <path d="M100 220H120V300H100V220Z" fill="currentColor"/>
          <motion.g style={{ rotate: armRotate, originX: "30%", originY: "20%" }} className="origin-[110px_100px]">
            <path d="M110 100C120 100 150 120 160 140V145C150 140 125 115 110 115V100Z" fill="currentColor"/>
            <path d="M160 135L175 145L165 150Z" fill="currentColor"/>
            <motion.circle cx="175" cy="145" r="5" fill="#FFF" style={{ opacity: handTouchGlowOpacity }} className="drop-shadow-[0_0_15px_rgba(255,255,255,1)]" />
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
