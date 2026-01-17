import React from 'react';
import founderPic from '../assets/founder_pic.jpeg';

const Timeline = () => {
    // Coordinates based on 1000x800 viewBox to match the "Mountain Trail" shape
    const milestones = [
        // Left side descent
        { year: '2020', title: 'I DISCOVERED LINKEDIN', x: 140, y: 180, align: 'right' },
        { year: '2021', title: 'STARTED WORKING ON MY\nOWN PERSONAL BRAND', x: 160, y: 300, align: 'right' },
        { year: '2022', title: 'ACCOUNT GREW AND I\nGOT INBOUND LEADS', x: 250, y: 480, align: 'left/bottom' },
        
        // Bottom curve
        { year: '2023', title: "PEOPLE ASKED\n'CAN YOU DO THIS\nFOR ME?'", x: 290, y: 580, align: 'right' },
        { year: '2024', title: 'RARE ELEPHANT\nMEDIA WAS BORN', x: 280, y: 700, align: 'left', founder: true },

        // Climb up middle
        { year: '', title: 'HIRED NEW TEAM\nMEMBERS', x: 500, y: 460, align: 'top' },
        { year: '', title: 'ONBOARDED\nFIRST SET OF\nCLIENTS', x: 580, y: 610, align: 'bottom' },

        // Climb up right
        { year: '', title: 'BUILT AN SOP,\nWEBSITE, CHANNEL,\nAND STRUCTURES', x: 650, y: 350, align: 'top' },
        { year: '', title: 'GOT MY FIRST\nINTERNATIONAL\nCLIENT PAYMENT\nIN DOLLARS', x: 765, y: 585, align: 'bottom' },
        
        // Final ascent
        { year: '', title: 'LANDED OUR\nBIGGEST RETAINER\nCLIENT', x: 840, y: 360, align: 'right' },
        { year: '', title: 'NICHED DOWN AND\nUPSKILLED TO MAKE\nOUR SERVICES EVEN\nBETTER', x: 880, y: 250, align: 'right' },
        { year: '', title: 'CONSTANTLY\nLEARNING AND\nGROWING', x: 950, y: 150, align: 'top' },
    ];

  return (
    <section className="bg-black text-white py-20 relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 relative z-10 w-full">
        <h2 className="font-oswald text-5xl md:text-8xl -mb-20 text-left tracking-tighter px-40">The story so far</h2>

        {/* Desktop Replica Layout */}
        <div className="hidden md:block relative w-full main-container mx-auto h-[800px] px-5">
            {/* Mountain Trail Path - Smoothed */}
            <svg className="absolute top-0 left-0 w-full h-full overflow-visible" viewBox="0 0 1000 800" preserveAspectRatio="none">
                 <path 
                    d="M -50 150 
                       C 50 150, 100 150, 140 180
                       C 180 210, 160 300, 140 400
                       C 120 500, 200 480, 250 480
                       C 320 480, 280 650, 280 700
                       C 280 780, 400 750, 450 600
                       C 490 480, 500 450, 520 450
                       C 550 450, 550 500, 550 550
                       C 550 620, 580 620, 600 600
                       C 630 570, 640 400, 650 350
                       C 660 300, 700 300, 720 350
                       C 740 400, 740 500, 740 550
                       C 740 600, 780 600, 800 550
                       C 820 500, 800 450, 820 400
                       C 840 350, 860 300, 880 250
                       C 910 180, 950 150, 1050 50"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                 />
            </svg>

            {milestones.map((item, index) => (
                <div 
                    key={index} 
                    className="absolute"
                    style={{ left: `${item.x / 10}%`, top: `${item.y / 8}%` }}
                >
                    {/* Founder Image at specific spot */}
                    {item.founder && (
                        <div className="absolute bottom-6 left-1/2 translate-x-36 translate-y-32 w-48 h-48 z-20">
                            <div className="w-full h-full rounded-full border-4 border-white overflow-hidden shadow-2xl">
                                <img src={founderPic} alt="Founder" className="w-full h-full object-cover grayscale-0" />
                            </div>
                        </div>
                    )}

                    {/* Dot */}
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-[3px] border-white bg-black z-10 box-content">
                        <div className="absolute inset-0 m-auto w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Text Label */}
                    <div className={`absolute w-64 text-sm font-bold uppercase font-primary tracking-wide leading-tight whitespace-pre-line
                        ${item.align === 'right' ? 'left-8 -top-2 text-left' : ''}
                        ${item.align === 'left' ? 'right-8 -top-2 text-right' : ''}
                        ${item.align === 'left/bottom' ? 'right-8 top-4 text-right' : ''}
                        ${item.align === 'top' ? '-top-24 left-1/2 -translate-x-1/2 text-center' : ''}
                        ${item.align === 'bottom' ? 'top-8 left-1/2 -translate-x-1/2 text-center' : ''}
                    `}>
                        {item.year && <span className="block text-lg mb-1">{item.year}</span>}
                        {item.title}
                    </div>
                </div>
            ))}
        </div>

        {/* Mobile Vertical Fallback */}
        <div className="md:hidden space-y-10 pl-6 border-l-2 border-white/20 ml-4 mt-8">
             {milestones.map((item, index) => (
                <div key={index} className="relative">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-white bg-black"></div>
                    {item.year && <div className="font-oswald text-xl mb-1 text-white">{item.year}</div>}
                    <p className="text-white text-sm font-bold uppercase tracking-wide">{item.title.replace(/\n/g, ' ')}</p>
                    {item.founder && (
                        <div className="mt-4 w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                             <img src={founderPic} alt="Founder" className="w-full h-full object-cover" />
                        </div>
                    )}
                </div>
             ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
