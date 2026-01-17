import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import founderPic from '../assets/founder_pic.jpeg';

const Timeline = () => {
  const containerRef = useRef(null);

  // Simplified Wave Path
  // Scale: 1200x600 coordinate system (Reduced height)
  const pathDefinitionDesktop = `
    M 50 450
    C 200 450, 200 150, 400 150
    C 600 150, 600 550, 800 550
    C 1000 550, 1000 250, 1150 250
  `;

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1,
      transition: { 
        duration: 3, 
        ease: "easeInOut",
        delay: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1, 
      y: 0,
      transition: { delay: 0.5 + (custom * 0.2), duration: 0.5 }
    })
  };

  return (
    <section ref={containerRef} className="bg-black text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 w-full">
        <h2 className="font-primary text-6xl md:text-7xl mb-8 text-center">The story so far</h2>

        {/* Desktop / Landscape View */}
        <div className="relative w-full max-w-[1400px] mx-auto h-[600px] hidden md:block mt-10">
            
            {/* The Winding Line */}
            <svg className="absolute top-0 left-0 w-full h-full overflow-visible" viewBox="0 0 1200 600" preserveAspectRatio="none">
               <motion.path
                  d={pathDefinitionDesktop}
                  fill="none"
                  stroke="white"
                  strokeWidth="4"
                  variants={pathVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
               />
            </svg>

            {/* Milestones - Repositioned for simplified path */}
            
            {/* 1. 2020: Start Low */}
            <motion.div custom={0} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[70%] left-[2%] w-48 text-center"
            >
                <div className="w-4 h-4 bg-white rounded-full mb-2 mx-auto border-2 border-black box-content relative z-20"></div>
                <div className="font-primary text-sm md:text-base uppercase">2020<br/>I Discovered LinkedIn</div>
            </motion.div>

            {/* 2. 2021: Rising */}
            <motion.div custom={1} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[45%] left-[10%] w-48 text-center"
            >
                 <div className="w-4 h-4 bg-white rounded-full mb-2 mx-auto border-2 border-black box-content relative z-20"></div>
                 <div className="font-primary text-sm md:text-base uppercase">2021<br/>Started working on my<br/>own personal brand</div>
            </motion.div>

            {/* 3. 2022: Peak 1 */}
            <motion.div custom={2} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[18%] left-[20%] w-48 text-center"
            >
                 <div className="w-4 h-4 bg-white rounded-full mb-2 mx-auto border-2 border-black box-content relative z-20"></div>
                 <div className="font-primary text-sm md:text-base uppercase">2022<br/>Account grew and I<br/>got inbound leads</div>
            </motion.div>

            {/* 4. 2023: Peak Plateau */}
            <motion.div custom={3} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[18%] left-[32%] w-48 text-center"
            >
                 <div className="w-4 h-4 bg-white rounded-full mb-2 mx-auto border-2 border-black box-content relative z-20"></div>
                 <div className="font-primary text-sm md:text-base uppercase">2023<br/>People asked<br/>'Can you do this for me?'</div>
            </motion.div>

            {/* 5. 2024: Start Descent (Founder) */}
            <motion.div custom={4} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[35%] left-[40%] w-56 text-center"
            >
                 <div className="w-4 h-4 bg-white rounded-full mb-2 mx-auto border-2 border-black box-content relative z-20"></div>
                 <div className="font-primary text-lg font-bold text-brand-yellow uppercase">2024<br/>Rare Elephant<br/>Media was Born</div>
            </motion.div>
             {/* Founder Image near 2024 */}
             <motion.div 
               initial={{ opacity: 0, scale: 0 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 1.5, duration: 0.5 }}
               className="absolute top-[12%] left-[43%] w-32 h-32 z-10"
             >
                 <img src={founderPic} alt="Founder" className="w-full h-full object-cover rounded-full border-2 border-white shadow-xl" />
             </motion.div>


            {/* 6. Hired New Team: Deep Descent */}
            <motion.div custom={5} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[60%] left-[50%] w-48 text-center"
            >
                 <div className="w-4 h-4 bg-white rounded-full mb-2 mx-auto border-2 border-black box-content relative z-20"></div>
                 <div className="font-primary text-sm md:text-base uppercase">Hired New Team<br/>Members</div>
            </motion.div>

             {/* 7. Onboarded: Bottom */}
             <motion.div custom={6} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[85%] left-[58%] w-48 text-center"
            >
                 <div className="w-4 h-4 bg-white rounded-full mb-2 mx-auto border-2 border-black box-content relative z-20"></div>
                 <div className="font-primary text-sm md:text-base uppercase">Onboarded<br/>First Set of<br/>Clients</div>
            </motion.div>

            {/* 8. International Payment: Bottom Plateau */}
            <motion.div custom={7} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[85%] left-[70%] w-48 text-center"
            >
                 <div className="w-4 h-4 bg-white rounded-full mb-2 mx-auto border-2 border-black box-content relative z-20"></div>
                 <div className="font-primary text-sm md:text-base uppercase">Got my first<br/>international<br/>payment</div>
            </motion.div>

            {/* 9. SOPs: Rising */}
            <motion.div custom={8} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[65%] left-[80%] w-48 text-center"
            >
                 <div className="w-4 h-4 bg-white rounded-full mb-2 mx-auto border-2 border-black box-content relative z-20"></div>
                 <div className="font-primary text-sm md:text-base uppercase">Built SOPs,<br/>Website &<br/>Structures</div>
            </motion.div>

             {/* 10. Retainer: Rising Higher */}
             <motion.div custom={9} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[45%] left-[88%] w-48 text-center"
            >
                 <div className="w-4 h-4 bg-white rounded-full mb-2 mx-auto border-2 border-black box-content relative z-20"></div>
                 <div className="font-primary text-sm md:text-base uppercase">Landed our<br/>Biggest Retainer</div>
            </motion.div>

            {/* 11. Niched Down: High End */}
            <motion.div custom={10} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="absolute top-[25%] left-[95%] w-56 text-right -translate-x-1/2"
            >
                 <div className="w-4 h-4 bg-white rounded-full mb-2 ml-auto mr-0 md:mx-auto border-2 border-black box-content relative z-20"></div>
                 <div className="font-primary text-sm md:text-base uppercase">Niched down &<br/>Upskilled</div>
            </motion.div>

             {/* 12. Learning: Hired Excellent (Combined/Simplified for space if needed, keeping 12th item) */}
              <motion.div custom={11} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
               className="absolute top-[10%] left-[85%] w-48 text-center"
             >
                  {/* Placing this "Constantly Learning" or "Hired Excellent" above loop */}
                   <div className="w-4 h-4 bg-white rounded-full mb-2 mx-auto border-2 border-black box-content relative z-20"></div>
                   <div className="font-primary text-sm md:text-base uppercase">Constantly<br/>Learning & Growing</div>
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
