"use client";

import { useScroll } from "framer-motion";
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
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative w-full h-[1200vh] bg-[#0a0b10] overflow-clip">
      {/* Fixed viewport container to hold all scenes */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <Scene1Atmosphere scrollYProgress={scrollYProgress} />
        <Scene2MoonSequence scrollYProgress={scrollYProgress} />
        <Scene3KidsSequence scrollYProgress={scrollYProgress} />
        <Scene4Fireworks scrollYProgress={scrollYProgress} />
        <Scene5Lanterns scrollYProgress={scrollYProgress} />
        <Scene6Typography scrollYProgress={scrollYProgress} />
        <Scene7FancyCard scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
};

export default ScrollOrchestrator;
