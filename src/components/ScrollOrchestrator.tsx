"use client";

import { useScroll, useSpring, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Scene1HushBeforeEid } from "./scenes/Scene1_HushBeforeEid";
import { Scene2SignsInDark } from "./scenes/Scene2_SignsInDark";
import { Scene3MoonSighting } from "./scenes/Scene3_MoonSighting";
import { Scene4WorldResponds } from "./scenes/Scene4_WorldResponds";
import { Scene5HumanWarmth } from "./scenes/Scene5_HumanWarmth";
import { Scene6Calligraphy } from "./scenes/Scene6_Calligraphy";
import { Scene7Crescendo } from "./scenes/Scene7_Crescendo";
import { Scene8EidMubarak } from "./scenes/Scene8_EidMubarak";
import { Scene9DescentIntimacy } from "./scenes/Scene9_DescentIntimacy";
import { Scene10KeepsakeFinale } from "./scenes/Scene10_KeepsakeFinale";
import { Scene11PostFinaleCharm } from "./scenes/Scene11_PostFinaleCharm";

export const ScrollOrchestrator = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth the scroll progress to create a cinematic, buttery feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40, // Softer stiffness for a gentler, more serene flow
    damping: 20,
    restDelta: 0.001
  });

  // Respect a11y: if user prefers reduced motion, bypass the spring simulation
  const progress = prefersReducedMotion ? scrollYProgress : smoothProgress;

  return (
    // Increase height substantially to handle 11 distinct chronological scenes
    <div ref={containerRef} className="relative w-full h-[2600vh] bg-[#020308] overflow-clip">
      
      {/* Film Grain Cinematic Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <Scene1HushBeforeEid scrollYProgress={progress} />
        <Scene2SignsInDark scrollYProgress={progress} />
        <Scene3MoonSighting scrollYProgress={progress} />
        <Scene4WorldResponds scrollYProgress={progress} />
        <Scene5HumanWarmth scrollYProgress={progress} />
        <Scene6Calligraphy scrollYProgress={progress} />
        <Scene7Crescendo scrollYProgress={progress} />
        <Scene8EidMubarak scrollYProgress={progress} />
        <Scene9DescentIntimacy scrollYProgress={progress} />
        <Scene10KeepsakeFinale scrollYProgress={progress} />
        <Scene11PostFinaleCharm scrollYProgress={progress} />
      </div>
    </div>
  );
};

export default ScrollOrchestrator;
