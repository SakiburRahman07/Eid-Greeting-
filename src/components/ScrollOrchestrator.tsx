"use client";

import { useScroll, useSpring, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Scene1Atmosphere } from "./scenes/Scene1_Atmosphere";
import { Scene2MoonSequence } from "./scenes/Scene2_MoonSequence";
import { Scene3KidsSequence } from "./scenes/Scene3_KidsSequence";
import { Scene4Fireworks } from "./scenes/Scene4_Fireworks";
import { Scene5Lanterns } from "./scenes/Scene5_Lanterns";
import { Scene6Typography } from "./scenes/Scene6_Typography";
import { Scene7FancyCard } from "./scenes/Scene7_FancyCard";

export const ScrollOrchestrator = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth the scroll progress to create a cinematic, buttery feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });

  // Respect a11y: if user prefers reduced motion, bypass the spring simulation
  const progress = prefersReducedMotion ? scrollYProgress : smoothProgress;

  return (
    <div ref={containerRef} className="relative w-full h-[1400vh] bg-[#03040c] overflow-clip">
      
      {/* Film Grain Cinematic Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <Scene1Atmosphere scrollYProgress={progress} />
        <Scene2MoonSequence scrollYProgress={progress} />
        <Scene3KidsSequence scrollYProgress={progress} />
        <Scene4Fireworks scrollYProgress={progress} />
        <Scene5Lanterns scrollYProgress={progress} />
        <Scene6Typography scrollYProgress={progress} />
        <Scene7FancyCard scrollYProgress={progress} />
      </div>
    </div>
  );
};

export default ScrollOrchestrator;
