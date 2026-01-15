import logo from '../assets/SPWebDevs Logo.png';
import backgroundShape from '../assets/Background Shape.png';
import heroImage from '../assets/Hero Page.png';

const Hero = () => {
  return (
    <section className="min-h-screen bg-white text-black flex items-center justify-center pl-40 pr-40 relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6 z-10">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="SPWebDevs Logo" className="h-auto w-48 object-contain" />
          </div>

          <h1 className="font-primary text-xl md:text-5xl font-bold uppercase leading-snug md:leading-relaxed">
            Web & Digital <br/>
            Marketing<br/>
            SEO Marketing Strategies
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
            <button className="bg-brand-yellow font-primary text-black px-6 py-4 rounded-full text-xl font-bold hover:scale-105 transition-transform w-full shadow-md">
              Who we are
            </button>
            <button className="bg-brand-yellow font-primary text-black px-6 py-4 rounded-full text-xl font-bold hover:scale-105 transition-transform w-full shadow-md">
              What we do
            </button>
            <button className="bg-brand-yellow font-primary text-black px-6 py-4 rounded-full text-xl font-bold hover:scale-105 transition-transform w-full shadow-md">
              Results & Wins
            </button>
             <button className="bg-brand-yellow font-primary text-black px-6 py-4 rounded-full text-xl font-bold hover:scale-105 transition-transform w-full shadow-md">
              Why choose us?
            </button>
          </div>
        </div>

        {/* Right Content - Image Placeholder */}
        <div className="relative z-10 flex justify-center items-center">
            {/* This simulates the laptop image area */}
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center z-20 mt-20">
                 {/* Main Hero Image */}
                 <img 
                    src={heroImage} 
                    alt="Hero" 
                    className="w-full h-full object-cover rounded-full z-20 shadow-xl"
                 />

                 {/* "YOUR SEAT!" Arrow and Text */}
                <div className="absolute -top-10 right-0 flex flex-col items-center rotate-6 z-30">
                    <h2 className="font-primary text-5xl font-bold text-black mb-2">YOUR SEAT!</h2>
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="5" className="rotate-90">
                        <path d="M10,10 Q50,50 90,90" />
                        <path d="M70,80 L90,90 L80,70" />
                    </svg>
                </div>
            </div>
          
            {/* The Background Shape Image */}
             <img 
                src={backgroundShape} 
                alt="Decorative Shape" 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-none -z-10 object-contain pt-20" 
             />
        </div>
      </div>
      
       {/* Decorative Shapes can be added here */}
    </section>
  );
};

export default Hero;
