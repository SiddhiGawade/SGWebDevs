import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // SVG Path definition for a wavy line
  const pathDefinition = "M10,0 C100,200 800,200 900,400 C1000,600 200,600 100,800 C0,1000 800,1000 900,1200";

  return (
    <section ref={containerRef} className="bg-black text-white min-h-[150vh] relative py-20 overflow-hidden">
      <div className="container mx-auto relative z-10 px-4">
        <h2 className="font-primary text-6xl md:text-7xl mb-20 text-center md:text-left">The story so far</h2>

        <div className="relative h-[1200px] w-full max-w-5xl mx-auto">
            {/* The Wavy Line */}
            <svg className="absolute top-0 left-0 w-full h-full overflow-visible" viewBox="0 0 1000 1200" preserveAspectRatio="none">
               <motion.path
                  d={pathDefinition}
                  fill="none"
                  stroke="white"
                  strokeWidth="8"
                  style={{ pathLength: scrollYProgress }}
               />
               {/* Background line for reference (optional) */}
                <path
                  d={pathDefinition}
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeOpacity="0.2"
               />
            </svg>

            {/* Milestones - Positioned absolutely based on the curve approximation */}
            {/* 2020 */}
            <div className="absolute top-[5%] left-[5%] md:left-[10%] w-64">
                <div className="font-primary text-4xl mb-2">2020</div>
                <p className="font-secondary text-lg">I Discovered LinkedIn</p>
                <div className="w-6 h-6 bg-white rounded-full absolute -left-8 top-2 border-4 border-black"></div>
            </div>

            {/* 2021 */}
            <div className="absolute top-[25%] right-[5%] md:right-[15%] text-right w-64">
                <div className="font-primary text-4xl mb-2">2021</div>
                <p className="font-secondary text-lg">Started working on my<br/>own personal brand</p>
                 <div className="w-6 h-6 bg-white rounded-full absolute -right-8 top-2 border-4 border-black"></div>
            </div>

            {/* 2022 */}
            <div className="absolute top-[50%] left-[5%] md:left-[20%] w-64">
                 <div className="font-primary text-4xl mb-2">2022</div>
                <p className="font-secondary text-lg">Account grew and I<br/>got inbound leads</p>
                 <div className="w-6 h-6 bg-white rounded-full absolute -left-8 top-2 border-4 border-black"></div>
            </div>

            {/* 2023 */}
             <div className="absolute top-[70%] right-[5%] md:right-[25%] text-right w-64">
                 <div className="font-primary text-4xl mb-2">2023</div>
                <p className="font-secondary text-lg">People asked<br/>'Can you do this for me?'</p>
                 <div className="w-6 h-6 bg-white rounded-full absolute -right-8 top-2 border-4 border-black"></div>
            </div>
            
             {/* 2024 */}
             <div className="absolute top-[90%] left-[5%] md:left-[30%] w-64">
                 <div className="font-primary text-4xl mb-2">2024</div>
                <p className="font-secondary text-lg">Rare Elephant</p>
                 <div className="w-6 h-6 bg-white rounded-full absolute -left-8 top-2 border-4 border-black"></div>
            </div>
            
            {/* Image Placeholder */}
            <div className="absolute top-[80%] left-[30%] w-48 h-48 bg-gray-800 rounded-full border-4 border-white overflow-hidden transform rotate-6 z-20">
               <div className="w-full h-full bg-gray-600 flex items-center justify-center text-center text-xs p-2">
                   Founder Image Placeholder
               </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;
