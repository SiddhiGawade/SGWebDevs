import React from 'react';
import { motion } from 'framer-motion';

const FounderNote = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    }
  };

  const highlightVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 0.8, 
      transition: { delay: 0.5, duration: 0.8, ease: "circOut" } 
    }
  };

  return (
    <section className="bg-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
            
            {/* Header with Highlight */}
            <div className="text-center mb-10 relative inline-block left-1/2 -translate-x-1/2">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-primary text-4xl md:text-5xl relative z-10"
                >
                    Who we are <span className="font-hand text-3xl md:text-4xl align-middle ml-2 transform -rotate-2 inline-block">(founder's note)</span>
                </motion.h2>
                {/* Yellow Highlight for "founder's note" */}
                <motion.div 
                    variants={highlightVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="absolute top-0 right-[-10px] w-[300px] h-[50px] bg-brand-yellow rounded-full -z-0 rotate-[-2deg] opacity-80 mix-blend-multiply hidden md:block origin-left"
                ></motion.div>
                 {/* Mobile highlight fallback */}
                 <motion.div 
                    variants={highlightVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="absolute top-[35px] right-0 w-[150px] h-[30px] bg-brand-yellow rounded-full -z-0 rotate-[-2deg] opacity-80 mix-blend-multiply md:hidden origin-left"
                 ></motion.div>
            </div>

            {/* The Whiteboard Card */}
            <motion.div 
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-5xl mx-auto bg-white border-2 border-black rounded-xl shadow-[0_0_0_6px_#ffffff,0_0_0_9px_#000000,0_20px_25px_-5px_rgb(0,0,0,0.1)] p-6 md:p-8 relative"
            >
                {/* Marker Tray simulation */}
                <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-1/3 h-3 bg-gray-900 rounded-b-lg shadow-md"></div>
                
                <div className="font-hand text-xl md:text-2xl leading-relaxed space-y-4 text-gray-800">
                    <motion.p variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        SG Siddhi-explains-Tech isn't just a company, it's our exciting journey that began in 2020. We started as freelancer, passionate about digital creativity. Driven by the belief that anyone, regardless of their background, can succeed, we grew into a full-fledged agency. Each project we dive into carries our heartfelt dedication to breaking barriers and creating opportunities.
                        SG Siddhi-explains-Tech is more than a brand, it's a story of hard work, overcoming challenges, and a commitment to making the digital world open to everyone. Come be part of our adventure, where every success story is filled with innovation and endless possibilities!
                    </motion.p>
                   

                    <motion.p variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
                        So I built SG Siddhi-explains-Tech to do one thing exceptionally well: Web Development.
                    </motion.p>
                    <motion.p variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.6 }}>
                        We're called SG Siddhi-explains-Tech for a reason. We value quiet power. Long-term trust. Thoughtful moves. And showing up in a way that feels calm, confident, and unforgettable just like the clients we serve. This isn't about going viral. It's about building something real & sustainable.
                    </motion.p>
                </div>
            </motion.div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-yellow rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-black rounded-full blur-3xl opacity-5"></div>
    </section>
  );
};

export default FounderNote;
