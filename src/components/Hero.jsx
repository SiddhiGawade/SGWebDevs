import logo from '../assets/SPWebDevs Logo.png';
import backgroundShape from '../assets/Background Shape.png';
import heroImage from '../assets/Hero Page.png';
import { motion } from 'framer-motion';

const Hero = () => {
  const typingContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const typingLetter = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger effect for buttons
        delayChildren: 1.5,   // Wait for typing to mostly finish
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const TypingText = ({ text, className }) => (
    <motion.div
      variants={typingContainer}
      initial="hidden"
      animate="show"
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={typingLetter}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <section className="min-h-screen bg-white text-black flex items-center justify-center pl-40 pr-40 relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <img src={logo} alt="SPWebDevs Logo" className="h-auto w-48 object-contain" />
          </motion.div>

          {/* Typing Animation for Heading */}
          <div className="font-primary text-xl md:text-5xl font-bold uppercase leading-snug md:leading-relaxed">
            <TypingText text="Web & Digital" className="block" />
            <TypingText text="Marketing" className="block text-brand-yellow" /> {/* Highlighted for visual variety if needed, or keep standard */}
            <TypingText text="SEO Marketing Strategies" className="block" />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg"
          >
            <motion.button variants={itemVariants} className="bg-gradient-to-r from-orange-500 to-yellow-500 font-primary text-black px-6 py-4 rounded-full text-xl font-bold hover:scale-105 hover:shadow-lg transition-all w-full shadow-md">
              Who we are
            </motion.button>
            <motion.button variants={itemVariants} className="bg-gradient-to-r from-orange-500 to-yellow-500 font-primary text-black px-6 py-4 rounded-full text-xl font-bold hover:scale-105 hover:shadow-lg transition-all w-full shadow-md">
              What we do
            </motion.button>
            <motion.button variants={itemVariants} className="bg-gradient-to-r from-orange-500 to-yellow-500 font-primary text-black px-6 py-4 rounded-full text-xl font-bold hover:scale-105 hover:shadow-lg transition-all w-full shadow-md">
              Results & Wins
            </motion.button>
             <motion.button variants={itemVariants} className="bg-gradient-to-r from-orange-500 to-yellow-500 font-primary text-black px-6 py-4 rounded-full text-xl font-bold hover:scale-105 hover:shadow-lg transition-all w-full shadow-md">
              Why choose us?
            </motion.button>
          </motion.div>
        </div>

        {/* Right Content - Image Placeholder */}
        <div className="relative z-10 flex justify-center items-center">
            {/* This simulates the laptop image area */}
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center z-20 mt-20">
                 {/* Main Hero Image */}
                 <motion.img 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    src={heroImage} 
                    alt="Hero" 
                    className="w-full h-full object-cover rounded-full z-20 shadow-xl"
                 />

                 {/* "YOUR SEAT!" Arrow and Text */}
                <motion.div 
                    animate={floatAnimation}
                    className="absolute -top-10 right-0 flex flex-col items-center rotate-6 z-30"
                >
                    <h2 className="font-primary text-5xl font-bold text-black mb-2">YOUR SEAT!</h2>
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="5" className="rotate-90">
                        <path d="M10,10 Q50,50 90,90" />
                        <path d="M70,80 L90,90 L80,70" />
                    </svg>
                </motion.div>
            </div>
          
            {/* The Background Shape Image */}
             <motion.img 
                initial={{ opacity: 0, rotate: -10, x: "-50%", y: "-50%" }}
                animate={{ opacity: 1, rotate: 0, x: "-50%", y: "-50%" }}
                transition={{ duration: 1, delay: 0.5 }}
                src={backgroundShape} 
                alt="Decorative Shape" 
                className="absolute top-1/2 left-1/2 w-[120%] max-w-none -z-10 object-contain pt-20" 
             />
        </div>
      </div>
      
       {/* Decorative Shapes can be added here */}
    </section>
  );
};

export default Hero;
