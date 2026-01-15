import React from 'react';

const FounderNote = () => {
  return (
    <section className="bg-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
            
            {/* Header with Highlight */}
            <div className="text-center mb-10 relative inline-block left-1/2 -translate-x-1/2">
                <h2 className="font-primary text-4xl md:text-5xl relative z-10">
                    Who we are <span className="font-hand text-3xl md:text-4xl align-middle ml-2 transform -rotate-2 inline-block">(founder's note)</span>
                </h2>
                {/* Yellow Highlight for "founder's note" */}
                <div className="absolute top-0 right-[-10px] w-[300px] h-[50px] bg-brand-yellow rounded-full -z-0 rotate-[-2deg] opacity-80 mix-blend-multiply hidden md:block"></div>
                 {/* Mobile highlight fallback */}
                 <div className="absolute top-[35px] right-0 w-[150px] h-[30px] bg-brand-yellow rounded-full -z-0 rotate-[-2deg] opacity-80 mix-blend-multiply md:hidden"></div>
            </div>

            {/* The Whiteboard Card */}
            <div className="max-w-5xl mx-auto bg-white border-4 border-gray-200 rounded-xl shadow-xl transform rotate-1 p-6 md:p-8 relative">
                {/* Marker Tray simulation */}
                <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-1/3 h-3 bg-gray-300 rounded-b-lg shadow-md"></div>
                
                <div className="font-hand text-xl md:text-2xl leading-relaxed space-y-4 text-gray-800">
                    <p>
                        SpWeb@Devs isn't just a company, it's our exciting journey that began in 2020. We started as freelancer, passionate about digital creativity. Driven by the belief that anyone, regardless of their background, can succeed, we grew into a full-fledged agency. Each project we dive into carries our heartfelt dedication to breaking barriers and creating opportunities.
                        SPWeb@Devs is more than a brand, it's a story of hard work, overcoming challenges, and a commitment to making the digital world open to everyone. Come be part of our adventure, where every success story is filled with innovation and endless possibilities!
                    </p>
                   

                    <p>
                        So I built SPWebDevs to do one thing exceptionally well: Web Development.
                    </p>
                    <p>
                        We're called SPWebDevs for a reason. We value quiet power. Long-term trust. Thoughtful moves. And showing up in a way that feels calm, confident, and unforgettable just like the clients we serve. This isn't about going viral. It's about building something real & sustainable.
                    </p>
                </div>
            </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-yellow rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-black rounded-full blur-3xl opacity-5"></div>
    </section>
  );
};

export default FounderNote;
