import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import officeImage from '../assets/office_elephant_logo.png';
import spLogo from '../assets/founder_pic.jpeg';

const CTA = () => {
  return (
    <section className="relative w-full bg-[#FD7F2C] overflow-hidden">
      {/* Top Wave Shape - Smooth transition from previous white section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 4 900 90" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-12 relative z-10 flex flex-col md:flex-row items-center md:items-end gap-12 md:gap-0">
        
        {/* Left Content - Image with Arch */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start relative z-10">
             <div className="relative group">
                {/* Decorative Elements around image */}
                <div className="absolute -inset-4 bg-white/20 rounded-t-[200px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="bg-black p-3 rounded-t-[200px] shadow-2xl transform transition-transform duration-500 hover:-translate-y-2 relative max-w-[320px] mx-auto md:mx-0">
                    <div className="rounded-t-[170px] overflow-hidden bg-gray-800 aspect-[3/4] relative">
                         <img 
                            src={spLogo} 
                            alt="SG Siddhi-explains-Tech Logo" 
                            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                         />
                    </div>
                </div>
             </div>
        </div>

        {/* Right Content - Text & CTA */}
        <div className="w-full md:w-1/2 text-center md:text-right space-y-8 md:mb-12">
            <h2 className="text-5xl md:text-7xl font-bold font-oswald text-black leading-[1.1] tracking-tight">
                We can't wait to <br/> 
                <span className="text-white drop-shadow-md">see you grow!</span>
            </h2>
             
            <p className="text-xl text-black/80 font-medium font-sans max-w-lg ml-auto mr-auto md:mr-0">
                Ready to take your business to the next level? Let's build something amazing together.
            </p>

            <button className="group relative bg-black text-white text-xl font-bold py-4 px-12 rounded-full shadow-xl hover:shadow-2xl hover:bg-white hover:text-black transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Let's Talk!</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0"></div>
            </button>
        </div>
      </div>

      {/* Footer Section - Integrated cleanly */}
      <div className="border-t border-black/10 bg-[#e66f20]/50 backdrop-blur-sm mt-12">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
               
               {/* Left: Copyright / Links */}
               <div className="text-black/70 text-sm font-medium">
                  © {new Date().getFullYear()} SG Siddhi-explains-Tech. All rights reserved.
               </div>

               {/* Right: Socials & Logo */}
               <div className="flex items-center gap-6">

                    
                    <div className="flex gap-3">
                        <SocialLink href="#" icon={<Linkedin size={20} />} color="group-hover:text-[#0077b5]" />
                        <SocialLink href="#" icon={<Instagram size={20} />} color="group-hover:text-[#E1306C]" />
                        <SocialLink href="#" icon={<Mail size={20} />} color="group-hover:text-[#EA4335]" />
                    </div>
               </div>
          </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, color }) => (
    <a 
        href={href} 
        className={`bg-white p-3 rounded-full text-black shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
    >
        <span className={`transition-colors duration-300 ${color}`}>
            {icon}
        </span>
    </a>
);

export default CTA;
