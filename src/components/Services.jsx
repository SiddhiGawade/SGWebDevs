import React from 'react';
import { motion } from 'framer-motion';
import whatWeDo1 from '../assets/WhatWeDo 1.png';
import whatWeDo2 from '../assets/WhatWeDo 2.png';
import whatWeDo3 from '../assets/WhatWeDo 3.png';

const ServiceCard = ({ title, tagline, description, imagePlaceholder }) => (
    <motion.div 
        variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
        }}
        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        className="bg-white rounded-xl overflow-hidden group hover:shadow-[0_0_0_8px_#FFA500] transition-shadow duration-300 h-full"
    >
        {/* Image Area with yellow accent */}
        <div className="relative h-58 bg-gray-200 overflow-hidden">
             {/* Yellow shape behind */}
             <div className="absolute top-0 right-0 w-2/3 h-full bg-[#FFA500] transform skew-x-12 translate-x-12"></div>
             
             {/* Actual Image */}
             <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                src={imagePlaceholder} 
                alt={title} 
                className="w-full h-full object-cover relative z-10" 
             />
        </div>
        
        {/* Content */}
        <div className="p-8 text-center bg-black text-white h-full">
            <h3 className="font-primary text-4xl mb-4 uppercase">{title}</h3>
            <p className="font-bold mb-4 text-white text-xl">{tagline}</p>
            <p className="font-secondary text-gray-300 text-sm">{description}</p>
        </div>
    </motion.div>
);

const Services = () => {
    const services = [
        {
            title: "Personal Branding",
            tagline: "WE WRITE POSTS THAT SOUND LIKE YOU - BUT BETTER.",
            description: "",
            imagePlaceholder: whatWeDo1
        },
        {
            title: "Lead Generation",
            tagline: "THOUGHTFUL OUTREACH THAT GETS REPLIES (AND BOOKED CALLS)",
            description: "",
            imagePlaceholder: whatWeDo2
        },
        {
            title: "Done-For-You LinkedIn",
            tagline: "YOUR LINKEDIN WORKS WHILE YOU LIVE YOUR LIFE",
            description: "",
            imagePlaceholder: whatWeDo3
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

  return (
    <section className="bg-black py-24 font-rounded overflow-hidden">
        <div className="container mx-auto px-4">
            <motion.h2 
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-primary text-white text-6xl md:text-8xl text-center mb-20"
            >
                What we do
            </motion.h2>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
                {services.map((service, index) => (
                    <ServiceCard 
                        key={index}
                        title={service.title}
                        tagline={service.tagline}
                        description={service.description}
                        imagePlaceholder={service.imagePlaceholder}
                    />
                ))}
            </motion.div>
        </div>
    </section>
  );
};

export default Services;
