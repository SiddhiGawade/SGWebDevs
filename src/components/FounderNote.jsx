import React from 'react';

const FounderNote = () => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
            
            {/* Header with Highlight */}
            <div className="text-center mb-16 relative inline-block left-1/2 -translate-x-1/2">
                <h2 className="font-primary text-6xl md:text-7xl relative z-10">
                    Who we are <span className="font-hand text-5xl md:text-6xl align-middle ml-4 transform -rotate-2 inline-block">(founder's note)</span>
                </h2>
                {/* Yellow Highlight for "founder's note" */}
                <div className="absolute top-2 right-[-10px] w-[350px] h-[70px] bg-brand-yellow rounded-full -z-0 rotate-[-2deg] opacity-80 mix-blend-multiply hidden md:block"></div>
                 {/* Mobile highlight fallback */}
                 <div className="absolute top-[50px] right-0 w-[200px] h-[40px] bg-brand-yellow rounded-full -z-0 rotate-[-2deg] opacity-80 mix-blend-multiply md:hidden"></div>
            </div>

            {/* The Whiteboard Card */}
            <div className="max-w-4xl mx-auto bg-white border-8 border-gray-200 rounded-xl shadow-2xl transform rotate-1 p-8 md:p-12 relative">
                {/* Marker Tray simulation */}
                <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-1/2 h-4 bg-gray-300 rounded-b-lg shadow-md"></div>
                
                <div className="font-hand text-2xl md:text-3xl leading-relaxed space-y-6 text-gray-800">
                    <p>
                        Rare Elephant Media started with one person figuring LinkedIn out for herself. No big agency vision or a fancy office with a big team.
                    </p>
                    <p>
                        I spent years freelancing and slowly learning how to show up online in a way that felt real (and didn't make me want to delete everything two hours later). I tested, posted, deleted, posted again, and gradually I found my rhythm. Over the years, I realized that LinkedIn is more than social media.
                    </p>
                    <p className="font-bold">
                        It's a goldmine if you know how to use it right.
                    </p>
                    <p>
                        After seeing real results on my own profile of inbound leads & conversations with incredible people, it struck me that knowing how to make the best out of LinkedIn wasn't just a "nice-to-have" skill. It was a service the right people were desperate for.
                    </p>
                    <p>
                        So I built Rare Elephant Media to do one thing exceptionally well: LinkedIn.
                    </p>
                    <p>
                        We're called Rare Elephant for a reason. We value quiet power. Long-term trust. Thoughtful moves. And showing up in a way that feels calm, confident, and unforgettable just like the clients we serve. This isn't about going viral. It's about building something real & sustainable.
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
