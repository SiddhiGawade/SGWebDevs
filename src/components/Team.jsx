import React from 'react';

const TeamMember = ({ name, role, rotation, placeholderColor }) => (
    <div className={`flex flex-col items-center relative group ${rotation}`}>
        {/* White scribble effect (simulated with border/shadow for now) */}
        <div className="relative">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-black relative z-10 bg-white">
                {/* Placeholder Image */}
                 <div className={`w-full h-full ${placeholderColor} flex items-center justify-center text-4xl font-bold opacity-50`}>
                    {name.charAt(0)}
                 </div>
            </div>
             {/* Decorative white scribble behind */}
            <div className="absolute top-[-10px] left-[-10px] w-52 h-52 border-[6px] border-white rounded-[40%_60%_70%_30%/40%_50%_60%_50%] z-0 transform rotate-12 transition-transform duration-300 group-hover:rotate-45"></div>
            
             {/* Shine/Star elements */}
             <div className="absolute -top-4 -right-4 text-white text-4xl animate-pulse">✨</div>
        </div>
        
        {/* Name and Role path text effect - Simplified for web implementation */}
        <div className="mt-8 text-center relative">
             <div className="font-hand font-bold text-2xl -rotate-6">{name}</div>
             <div className="font-primary text-xl uppercase tracking-tighter">({role})</div>
             {/* Curved text path simulation using transform */}
        </div>
    </div>
);

const Team = () => {
    const team = [
        { name: "Debadrita Sarkar", role: "Writer", color: "bg-pink-200", rot: "-rotate-2" },
        { name: "Vijay Duseja", role: "Designer", color: "bg-blue-200", rot: "rotate-1" },
        { name: "Richa Adani", role: "Founder & Strategist", color: "bg-purple-200", rot: "-rotate-1" },
        { name: "Nisarg Gandhi", role: "Editor", color: "bg-green-200", rot: "rotate-2" },
    ];

  return (
    <section className="bg-brand-yellow py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
            <h2 className="font-primary text-5xl md:text-7xl text-center mb-20 text-black">
                Meet the <span className="font-hand">(tiny but mighty)</span> Team
            </h2>

            <div className="flex flex-wrap justify-center gap-16 md:gap-8">
                {team.map((member, index) => (
                    <TeamMember 
                        key={index} 
                        name={member.name} 
                        role={member.role} 
                        rotation={member.rot} 
                        placeholderColor={member.color}
                    />
                ))}
            </div>

            {/* Bottom Quote */}
             <div className="mt-24 max-w-4xl mx-auto text-center font-primary uppercase text-3xl md:text-5xl leading-tight">
                <span className="text-8xl font-serif align-top">“</span>
                YOU WON'T BE HANDED OFF TO AN ACCOUNT MANAGER AND FORGOTTEN. EVERYTHING WE DO IS HANDCRAFTED.
            </div>
        </div>
    </section>
  );
};

export default Team;
