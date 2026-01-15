import logo from '../assets/SPWebDevs Logo.png';

const Hero = () => {
  return (
    <section className="min-h-screen bg-white text-black flex items-center justify-center pl-40 pr-40 relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6 z-10">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="SPWebDevs Logo" className="h-40 w-auto object-contain" />
          </div>

          <h1 className="font-primary text-xl md:text-5xl font-bold uppercase leading-tight">
            Web & Digital <br/>
            Marketing<br/>
            SEO Marketing Strategies
          </h1>

          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-yellow font-primary text-black px-8 py-3 rounded-full text-xl font-bold hover:scale-105 transition-transform">
              Who we are
            </button>
            <button className="bg-brand-yellow font-primary text-black px-8 py-3 rounded-full text-xl font-bold hover:scale-105 transition-transform">
              What we do
            </button>
            <button className="bg-brand-yellow font-primary text-black px-8 py-3 rounded-full text-xl font-bold hover:scale-105 transition-transform">
              Results & Wins
            </button>
             <button className="bg-brand-yellow font-primary text-black px-8 py-3 rounded-full text-xl font-bold hover:scale-105 transition-transform">
              Why choose us?
            </button>
          </div>
        </div>

        {/* Right Content - Image Placeholder */}
        <div className="relative z-10">
            {/* This simulates the laptop image area */}
            <div className="relative w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-gray-400">Laptop Image Placeholder</span>
                
                 {/* "YOUR SEAT!" Arrow and Text */}
                <div className="absolute -top-10 right-10 flex flex-col items-center rotate-6">
                    <h2 className="font-primary text-5xl font-bold text-black mb-2">YOUR SEAT!</h2>
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="5" className="rotate-90">
                        <path d="M10,10 Q50,50 90,90" />
                        <path d="M70,80 L90,90 L80,70" />
                    </svg>
                </div>
            </div>
          
            {/* The Black Shape in background */}
             <div className="absolute top-0 right-0 w-full h-full bg-black -z-10 rounded-[3rem] rotate-3 scale-110 opacity-10"></div>
        </div>
      </div>
      
       {/* Decorative Shapes can be added here */}
    </section>
  );
};

export default Hero;
