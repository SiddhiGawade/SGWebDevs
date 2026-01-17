import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import officeImage from '../assets/office_elephant_logo.png'; // Assuming the generated image is saved here
import spLogo from '../assets/SPWebDevs Logo.png';

const CTA = () => {
  return (
    <section className="relative w-full bg-[#FD7F2C] pt-20 px-6 font-sans overflow-hidden">
      {/* Top Left White Cutout - Matches shape from sample */}
      <div className="absolute top-0 left-0 w-[50%] h-[40%] bg-white rounded-br-[250px] z-10 hidden md:block"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-12 relative z-20">
        
        {/* Left Side - Image Container - Aligned to bottom */}
        <div className="w-full md:w-1/2 relative -mb-10"> {/* Negative margin to touch bottom/footer */}
             <div className="bg-black p-4 md:p-8 rounded-t-[150px] rounded-b-[0px] shadow-2xl overflow-hidden transform -rotate-0 hover:rotate-0 transition-transform duration-500">
                <div className="rounded-t-[130px]  overflow-hidden aspect-[3/4] relative">
                     <img 
                        src={officeImage} 
                        alt="Office" 
                        className="w-full h-full object-cover"
                     />
                     {/* Overlay to darken slightly if needed for text, though image is standalone here */}
                </div>
             </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 text-left space-y-8">
            <h2 className="text-6xl md:text-8xl font-bold font-oswald text-black leading-tight">
                We can't wait to see <br/> you grow!
            </h2>
             
            <p className="text-xl md:text-2xl text-black font-medium font-sans">
                Wondering how we can help tell YOUR story?
            </p>

            <button className="bg-white text-black text-xl font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Let's Talk!
            </button>
        </div>
      </div>

      {/* Footer Area within the yellow section */}
      <div className="max-w-7xl mx-auto mt-20 flex flex-col md:flex-row justify-between items-end border-t border-black/10 pt-10">
           {/* Placeholder for left side if any */}
           <div></div>

           {/* Brand & Socials */}
           <div className="flex flex-col items-end gap-4">
                <div className="flex items-center gap-2">
                    {/* SPWebDevs Logo */}
                    <div className="text-right">
                         <img src={spLogo} alt="SPWebDevs Logo" className="h-24 w-auto" />
                    </div>
                </div>
                
                <div className="flex items-center gap-4">
                    <a href="#" className="bg-[#0077b5] p-2 rounded text-white hover:opacity-90 transition-opacity">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-2 rounded text-white hover:opacity-90 transition-opacity">
                        <Instagram className="w-6 h-6" />
                    </a>
                     <a href="#" className="bg-[#0072C6] p-2 rounded text-white hover:opacity-90 transition-opacity">
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
           </div>
      </div>

    </section>
  );
};

export default CTA;
