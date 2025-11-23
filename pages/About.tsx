import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-diamond-navy text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-mesh opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-diamond-gold font-bold tracking-[0.3em] uppercase text-sm mb-2 block">Since 1954</span>
          <h1 className="font-sport text-6xl md:text-7xl font-black uppercase italic">Our Heritage</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Legacy Section */}
        <div className="flex flex-col lg:flex-row gap-16 mb-24 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-sport font-bold text-diamond-navy mb-6 uppercase italic">70 Years of Excellence</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-medium">
              <p>
                Diamond Sports is not merely a retail outlet; it is a cornerstone of Vadodara’s sporting history. Currently managed by the **Acharya Family**, we have fueled the dreams of athletes for over 7 decades.
              </p>
              <p className="border-l-4 border-diamond-gold pl-6 py-2 italic text-diamond-navy text-xl">
                "Customer Centricity over Profit."
              </p>
              <p>
                This philosophy drives us. Whether you need transparency, expert guidance, or professional-grade equipment, we are the transparent bridge between you and your game.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <div className="relative">
                <div className="absolute inset-0 bg-diamond-gold translate-x-4 translate-y-4 rounded-sm"></div>
                <img src="https://picsum.photos/seed/sportshistory/600/400" alt="Old Shop" className="relative z-10 w-full h-auto object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl" />
             </div>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-10 hover:bg-diamond-navy hover:text-white transition-colors group duration-300">
            <span className="text-6xl font-sport font-black opacity-10 mb-4 block">01</span>
            <h3 className="text-2xl font-sport font-bold mb-2 uppercase italic text-diamond-navy group-hover:text-diamond-gold">The Heritage Store</h3>
            <p className="mb-4 font-bold text-sm tracking-wider">RAOPURA ROAD</p>
            <p className="text-sm leading-relaxed opacity-80">
              The original flagship. Known among institutions and schools. The hub for bulk orders and trophies.
            </p>
          </div>
           <div className="bg-gray-100 p-10 hover:bg-diamond-navy hover:text-white transition-colors group duration-300">
            <span className="text-6xl font-sport font-black opacity-10 mb-4 block">02</span>
            <h3 className="text-2xl font-sport font-bold mb-2 uppercase italic text-diamond-navy group-hover:text-diamond-gold">The Studio</h3>
            <p className="mb-4 font-bold text-sm tracking-wider">GOTRI-VASNA ROAD</p>
             <p className="text-sm leading-relaxed opacity-80">
              A modern upscale showroom. Designed for the "touch and feel" experience. Spacious layout for trying out premium gear.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};