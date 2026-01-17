import React from 'react';
import { User, FlaskConical, Zap } from 'lucide-react';

const Process = () => {
  return (
    <section className="relative w-full bg-white overflow-visible font-sans z-20">
      <div className="max-w-7xl mx-auto relative min-h-[1000px]">
        
        {/* SVG Road Path */}
        <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                {/* 
                    Path Logic:
                    Start Top Left (x=250, y=0)
                    Down to y=100
                    Curve Right to Horizontal (x=500ish)
                    Curve Down
                    Vertical Down to y=500
                    Curve Left
                    Horizontal Left to x=250
                    Curve Down
                    Vertical Down to End
                */}
                <path 
                    d="M 280 0 
                       L 280 200 
                       Q 280 350 430 350 
                       L 550 350 
                       Q 700 350 700 500 
                       L 700 1500"
                    fill="none"
                    stroke="black"
                    strokeWidth="70"
                    strokeLinecap="butt"
                />
                 {/* Yellow dashed line */}
                 <path 
                    d="M 280 0 
                       L 280 200 
                       Q 280 350 430 350 
                       L 550 350 
                       Q 700 350 700 500 
                       L 700 1500"
                    fill="none"
                    stroke="Orange"
                    strokeWidth="4"
                    strokeDasharray="25 25"
                    strokeLinecap="butt"
                />
            </svg>
        </div>

        {/* Title Section - Bottom Leftish */}
        <div className="absolute bottom-[100px] left-[5%] md:left-[10%] z-10">
            <div className="relative">
                 {/* Yellow blob backing */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[120%] bg-[orange] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -rotate-6 z-0 mix-blend-multiply"></div>
                <h2 className="relative text-6xl md:text-8xl font-bold font-oswald text-black leading-tight z-10 text-center">
                    How do we <br /> do it?
                </h2>
            </div>
        </div>

        {/* Step 1 */}
        <div className="absolute top-[50px] left-[380px] md:left-[400px] max-w-lg">
            <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="ml-10 bg-white p-2 rounded-lg shrink-0">
                    <User className="w-12 h-12 text-black fill-black" strokeWidth={1.5} />
                </div>
                <div>
                   <h3 className="text-3xl font-bold font-oswald text-black mb-2 uppercase tracking-wide">1-ON-1 STORY DISCOVERY CALLS</h3>
                   <p className="text-lg text-gray-700 leading-relaxed font-sans">
                      We first understand your story and create a clear brief of your journey, your brand's voice and your goals.
                   </p>
                </div>
            </div>
        </div>

        {/* Step 2 */}
        <div className="absolute mt-10 top-[400px] left-[24%] md:right-[15%] max-w-lg">
             <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-white p-2 rounded-lg shrink-0">
                   <FlaskConical className="ml-20 w-12 h-12 text-black fill-black" strokeWidth={1.5} />
                </div>
                <div>
                   <h3 className=" text-3xl font-bold font-oswald text-black mb-2 uppercase tracking-wide">EXPERIMENTAL STRATEGIES</h3>
                   <p className="text-lg text-gray-700 leading-relaxed font-sans">
                      Your audience is more diverse than you think – so it's important to build a range of strategies and find out what works.
                   </p>
                </div>
            </div>
        </div>

        {/* Step 3 */}
        <div className="absolute top-[660px] right-[2%] max-w-md text-left">
           <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-white p-2 rounded-lg shrink-0 ml-36">
                   <Zap className="w-12 h-12 text-black fill-black" strokeWidth={1.5} />
                </div>
                <div>
                   <h3 className="text-3xl font-bold font-oswald text-black mb-2 uppercase tracking-wide">DOUBLE-DOWN!!</h3>
                   <p className="text-lg text-gray-700 leading-relaxed font-sans">
                      Once we know what sticks and who it appeals to, it's time to go all-in and double down on the all the strategies that worked in the trial and error phase.    
                   </p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
