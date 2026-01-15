import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import founderPic from '../assets/founder_pic.jpeg';

const Timeline = () => {
  const containerRef = useRef(null);

  // Complex Winding Path based on the uploaded image
  // Scale: 1200x900 coordinate system to accommodate the vertical range
  const pathDefinitionDesktop = `
    M 50 150
    C 150 150, 50 400, 100 400
    S 50 650, 150 650
    S 250 500, 250 500
    S 250 800, 350 800
    S 450 450, 450 450
    S 550 550, 650 650
    S 750 350, 750 350
    S 850 500, 900 500
    S 950 300, 1000 300
    S 1050 150, 1100 150
    S 1150 50, 1200 50
  `;

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1,
      transition: { 
        duration: 4, 
        ease: "easeInOut",
        delay: 0.5 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (custom) => ({
      opacity: 1, 
      scale: 1,
      transition: { delay: 1 + (custom * 0.3), duration: 0.5 }
    })
  };

  return (
    <section ref={containerRef} className="bg-black text-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 w-full">
        <h2 className="font-primary text-6xl md:text-7xl mb-12 text-center">The story so far</h2>

        {/* Desktop / Landscape View */}
        <div className="relative w-full max-w-[1400px] mx-auto h-[900px] hidden md:block scale-90 origin-top">
            
            {/* The Winding Line */}
            <svg className="absolute top-0 left-0 w-full h-full overflow-visible" viewBox="0 0 1200 900" preserveAspectRatio="none">
               <motion.path
                  d={pathDefinitionDesktop}
                  fill="none"
                  stroke="white"
                  strokeWidth="6"
                  variants={pathVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
               />
            </svg>

            {/* Milestones */}
            
            {/* 1. 2020: Top Left */}
            <motion.div custom={0} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[14%] left-[6%] w-48"
            >
                <div className="w-5 h-5 bg-white rounded-full mb-2 border-4 border-black box-content relative z-20"></div>
                <div className="font-primary text-xl uppercase">2020 I Discovered LinkedIn</div>
            </motion.div>

            {/* 2. 2021: Mid Left */}
            <motion.div custom={1} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[42%] left-[9%] w-56"
            >
                 <div className="w-5 h-5 bg-white rounded-full mb-2 border-4 border-black box-content relative z-20"></div>
                 <div className="font-primary text-xl uppercase">2021<br/>Started working on my<br/>own personal brand</div>
            </motion.div>

            {/* 3. 2022: Low Left */}
            <motion.div custom={2} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[70%] left-[5%] w-56"
            >
                 <div className="w-5 h-5 bg-white rounded-full mb-2 border-4 border-black box-content relative z-20"></div>
                 <div className="font-primary text-xl uppercase">2022<br/>Account grew and I<br/>got inbound leads</div>
            </motion.div>

            {/* 4. 2023: Mid Left Inner */}
            <motion.div custom={3} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[54%] left-[22%] w-48"
            >
                 <div className="w-5 h-5 bg-white rounded-full mb-2 border-4 border-black box-content relative z-20"></div>
                 <div className="font-primary text-xl uppercase">2023<br/>People asked<br/>'Can you do this<br/>for me?'</div>
            </motion.div>

            {/* 5. 2024: Bottom Dip (Founder Image) */}
            <motion.div custom={4} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[82%] left-[28%] w-60"
            >
                 <div className="relative">
                    <div className="w-5 h-5 bg-white rounded-full mb-2 border-4 border-black box-content relative z-20"></div>
                    <div className="font-primary text-xl uppercase mb-2">2024<br/>Rare Elephant<br/>Media was Born</div>
                 </div>
            </motion.div>
             {/* Founder Image Floating near 2024 */}
             <motion.div 
               initial={{ opacity: 0, scale: 0 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 2.5, duration: 0.5 }}
               className="absolute top-[80%] left-[28%] w-48 h-48 z-10 translate-x-12 translate-y-4"
             >
                 <img src={founderPic} alt="Founder" className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl" />
             </motion.div>


            {/* 6. Hired New Team: Mid Center */}
            <motion.div custom={5} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[48%] left-[38%] w-48"
            >
                 <div className="w-5 h-5 bg-white rounded-full mb-2 border-4 border-black box-content relative z-20"></div>
                 <div className="font-primary text-lg uppercase">Hired New Team<br/>Members</div>
            </motion.div>
             <motion.div custom={6} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[65%] left-[38%] w-48"
            >
                 <div className="w-5 h-5 bg-white rounded-full mb-2 border-4 border-black box-content relative z-20"></div>
                 <div className="font-primary text-lg uppercase">Onboarded<br/>First Set of<br/>Clients</div>
            </motion.div>

            {/* 7. International Payment: Low Mid Right */}
            <motion.div custom={7} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[70%] left-[55%] w-48"
            >
                 <div className="w-5 h-5 bg-white rounded-full mb-2 border-4 border-black box-content relative z-20"></div>
                 <div className="font-primary text-lg uppercase">Got my first<br/>international<br/>client payment<br/>in dollars</div>
            </motion.div>

            {/* 8. SOPs: Mid Right */}
            <motion.div custom={8} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[38%] left-[62%] w-48"
            >
                 <div className="w-5 h-5 bg-white rounded-full mb-2 border-4 border-black box-content relative z-20"></div>
                 <div className="font-primary text-lg uppercase">Built an SOP,<br/>Website, Channel,<br/>and Structures</div>
            </motion.div>

             {/* 9. Retainer: Mid Upper Right */}
             <motion.div custom={9} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[55%] left-[75%] w-48"
            >
                 <div className="w-5 h-5 bg-white rounded-full mb-2 border-4 border-black box-content relative z-20"></div>
                 <div className="font-primary text-lg uppercase">Landed our<br/>Biggest Retainer<br/>Client</div>
            </motion.div>

            {/* 10. Niched Down: Upper Right */}
            <motion.div custom={10} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[32%] left-[83%] w-56"
            >
                 <div className="w-5 h-5 bg-white rounded-full mb-2 border-4 border-black box-content relative z-20"></div>
                 <div className="font-primary text-lg uppercase">Niched down and<br/>upskilled to make<br/>our services even<br/>better</div>
            </motion.div>

             {/* 11. Hired Excellent: High Right */}
             <motion.div custom={11} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[16%] left-[90%] w-56 -translate-x-full text-right"
            >
                 <div className="w-5 h-5 bg-white rounded-full mb-2 ml-auto border-4 border-black box-content relative z-20"></div>
                 <div className="font-primary text-lg uppercase">Hired Excellent<br/>People into the<br/>team again (and<br/>had to fire too!)</div>
            </motion.div>
            
             {/* 12. Learning: Top Right */}
             <motion.div custom={12} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[5%] left-[95%] w-48 text-right -translate-x-12"
            >
                 <div className="w-5 h-5 bg-white rounded-full mb-2 ml-auto border-4 border-black box-content relative z-20"></div>
                 <div className="font-primary text-lg uppercase">Constantly<br/>Learning and<br/>Growing</div>
            </motion.div>

        </div>

        {/* Mobile View / Vertical Fallback (Simplified) */}
        <div className="md:hidden relative border-l-4 border-white ml-6 pl-8 space-y-8 pb-12">
            <div><h3 className="font-primary text-2xl">2020</h3><p>I Discovered LinkedIn</p></div>
            <div><h3 className="font-primary text-2xl">2021</h3><p>Started working on my personal brand</p></div>
            <div><h3 className="font-primary text-2xl">2022</h3><p>Account grew, inbound leads</p></div>
            <div><h3 className="font-primary text-2xl">2023</h3><p>Can you do this for me?</p></div>
            <div><h3 className="font-primary text-2xl">2024</h3><p>Rare Elephant Media Born</p></div>
            <div><h3 className="font-primary text-xl">Growth</h3><p>Hired team, First Intl Client</p></div>
            <div><h3 className="font-primary text-xl">Systems</h3><p>SOPs, Structures, Retainers</p></div>
            <div><h3 className="font-primary text-xl">Future</h3><p>Niched down, Learning & Growing</p></div>
        </div>
      </div>
    </section>
  );
};


export default Timeline;
