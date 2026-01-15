import React from 'react';

const ServiceCard = ({ title, tagline, description, imagePlaceholder }) => (
    <div className="bg-white rounded-xl overflow-hidden group hover:shadow-[0_0_0_8px_#FFF200] transition-shadow duration-300">
        {/* Image Area with yellow accent */}
        <div className="relative h-64 bg-gray-200 overflow-hidden">
             {/* Yellow shape behind */}
             <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-yellow/30 transform skew-x-12 translate-x-12"></div>
             
             {/* Actual Image Placeholder */}
             <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold">
                {imagePlaceholder} Image
             </div>
        </div>
        
        {/* Content */}
        <div className="p-8 text-center bg-black text-white h-full border-t-8 border-brand-yellow">
            <h3 className="font-primary text-3xl mb-4 uppercase">{title}</h3>
            <p className="font-bold mb-4 text-brand-yellow text-sm">{tagline}</p>
            <p className="font-secondary text-gray-300 text-sm">{description}</p>
        </div>
    </div>
);

const Services = () => {
    const services = [
        {
            title: "Personal Branding",
            tagline: "WE WRITE POSTS THAT SOUND LIKE YOU - BUT BETTER.",
            description: "",
            imagePlaceholder: "Person sitting at desk"
        },
        {
            title: "Lead Generation",
            tagline: "THOUGHTFUL OUTREACH THAT GETS REPLIES (AND BOOKED CALLS)",
            description: "",
            imagePlaceholder: "Two people talking"
        },
        {
            title: "Done-For-You LinkedIn",
            tagline: "YOUR LINKEDIN WORKS WHILE YOU LIVE YOUR LIFE",
            description: "",
            imagePlaceholder: "People working on laptops"
        }
    ];

  return (
    <section className="bg-black py-24">
        <div className="container mx-auto px-4">
            <h2 className="font-primary text-white text-6xl md:text-8xl text-center mb-20">
                What we do
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard 
                        key={index}
                        title={service.title}
                        tagline={service.tagline}
                        description={service.description}
                        imagePlaceholder={service.imagePlaceholder}
                    />
                ))}
            </div>
        </div>
    </section>
  );
};

export default Services;
