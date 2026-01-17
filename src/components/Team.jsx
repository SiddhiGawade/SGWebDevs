import { motion } from 'framer-motion';
import team1 from '../assets/Team 1.png';
import team2 from '../assets/Team 2.png';
import team3 from '../assets/Team 3.png';
import team4 from '../assets/Team 4.png';

const memberVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        transition: { type: "spring", stiffness: 100, damping: 12 } 
    }
};

const TeamMember = ({ name, role, rotation, image }) => (
    <motion.div 
        variants={memberVariants}
        whileHover={{ scale: 1.05, rotate: 0, transition: { type: "spring", stiffness: 300 } }}
        className={`flex flex-col items-center relative group cursor-pointer ${rotation}`}
    >
        {/* White scribble effect (simulated with border/shadow for now) */}
        <div className="relative">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-black relative z-10 bg-white shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
             {/* Decorative white scribble behind */}
            <motion.div 
                animate={{ rotate: [12, 15, 12] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10px] left-[-10px] w-52 h-52 border-[6px] border-white rounded-[40%_60%_70%_30%/40%_50%_60%_50%] z-0"
            ></motion.div>
            
             {/* Shine/Star elements */}
             {/* <div className="absolute -top-4 -right-4 text-white text-4xl animate-pulse">  </div> */}
        </div>
        
        {/* Name and Role path text effect - Simplified for web implementation */}
        <div className="mt-8 text-center relative">
             <div className="font-hand font-bold text-2xl group-hover:text-brand-yellow transition-colors duration-300">{name}</div>
             <div className="font-primary text-xl uppercase tracking-tighter">({role})</div>
             {/* Curved text path simulation using transform */}
        </div>
    </motion.div>
);

const Team = () => {
    const team = [
        { name: "Debadrita Sarkar", role: "Writer", image: team1, rot: "-rotate-2" },
        { name: "Vijay Duseja", role: "Designer", image: team2, rot: "rotate-1" },
        { name: "Richa Adani", role: "Founder & Strategist", image: team3, rot: "-rotate-1" },
        { name: "Nisarg Gandhi", role: "Editor", image: team4, rot: "rotate-2" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

  return (
    <section className="bg-[#FFA500] py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}    
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-primary text-4xl md:text-6xl text-center mb-20 text-black"
            >
                Meet the <span className="font-hand inline-block hover:rotate-3 transition-transform duration-300">(tiny but mighty)</span> Team
            </motion.h2>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-16 md:gap-8"
            >
                {team.map((member, index) => (
                    <TeamMember 
                        key={index} 
                        name={member.name} 
                        role={member.role} 
                        rotation={member.rot} 
                        image={member.image}
                    />
                ))}
            </motion.div>

            {/* Bottom Quote */}
             <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-20 max-w-4xl mx-auto text-center font-primary uppercase text-2xl md:text-5xl leading-tight"
            >
                <span className="text-2xl font-serif align-top text-white">“ </span>
                YOU WON'T BE HANDED OFF TO AN ACCOUNT MANAGER AND FORGOTTEN. EVERYTHING WE DO IS HANDCRAFTED.
                <span className="text-2xl font-serif align-top text-white"> ”</span>
            </motion.div>
        </div>
    </section>
  );
};

export default Team;
