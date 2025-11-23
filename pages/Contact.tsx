import React from 'react';
import { Phone, Mail, Clock, MapPin, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-diamond-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-sport text-5xl md:text-7xl font-black mb-4 uppercase italic">Store Locator</h1>
          <p className="text-diamond-gold font-bold tracking-widest uppercase">Vadodara, Gujarat</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Branch 1 */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white shadow-2xl overflow-hidden group"
          >
             <div className="bg-diamond-light p-8 border-b border-gray-200">
                <span className="text-gray-400 font-sport font-bold text-6xl absolute top-4 right-4 opacity-20 select-none">01</span>
                <h2 className="text-3xl font-sport font-black text-diamond-navy uppercase italic mb-1">The Heritage Store</h2>
                <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">Raopura / Kothi</span>
             </div>
            
            <div className="p-8 space-y-6">
               <p className="text-gray-600 font-medium border-l-4 border-diamond-gold pl-4 italic">
                The flagship location. Heart of the city. Best for bulk orders and trophies.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-diamond-light p-2 rounded"><MapPin size={20} className="text-diamond-navy"/></div>
                  <p className="text-sm font-medium text-gray-800 leading-tight">Raopura Road, Opposite Khadi Gramodyog, Near Kothi Kacheri.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-diamond-light p-2 rounded"><Phone size={20} className="text-diamond-navy"/></div>
                  <p className="text-sm font-bold text-diamond-navy">+91 94276 02221</p>
                </div>
                 <div className="flex items-center gap-4">
                  <div className="bg-diamond-light p-2 rounded"><Clock size={20} className="text-diamond-navy"/></div>
                  <p className="text-sm font-medium text-gray-600">10:00 AM – 8:30 PM (Mon-Sat)</p>
                </div>
              </div>

              <button className="w-full bg-gray-900 text-white py-4 font-sport font-bold uppercase hover:bg-diamond-gold hover:text-diamond-navy transition-colors flex items-center justify-center gap-2">
                <Navigation size={18} /> View on Map
              </button>
            </div>
          </motion.div>

          {/* Branch 2 */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-diamond-navy text-white shadow-2xl overflow-hidden group relative"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-diamond-gold rounded-full blur-3xl opacity-10"></div>
             <div className="p-8 border-b border-gray-700/50 bg-black/20">
                <span className="text-white font-sport font-bold text-6xl absolute top-4 right-4 opacity-10 select-none">02</span>
                <h2 className="text-3xl font-sport font-black text-diamond-gold uppercase italic mb-1">The Studio</h2>
                <span className="bg-diamond-gold text-diamond-navy text-xs font-bold px-2 py-1 uppercase tracking-wider">Gotri / Vasna</span>
             </div>

            <div className="p-8 space-y-6">
               <p className="text-gray-400 font-medium border-l-4 border-white pl-4 italic">
                 Modern upscale showroom. Try treadmills, swing bats. The premium experience.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded"><MapPin size={20} className="text-diamond-gold"/></div>
                  <p className="text-sm font-medium text-gray-300 leading-tight">101, Labh Icon, Near Bansal Mall, 30-Meter Gotri-Vasna Road.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-2 rounded"><Phone size={20} className="text-diamond-gold"/></div>
                  <p className="text-sm font-bold text-white">+91 99799 56111</p>
                </div>
                 <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-2 rounded"><Clock size={20} className="text-diamond-gold"/></div>
                  <p className="text-sm font-medium text-gray-400">10:00 AM – 8:30 PM (Mon-Sat)</p>
                </div>
              </div>

              <button className="w-full bg-diamond-gold text-diamond-navy py-4 font-sport font-bold uppercase hover:bg-white transition-colors flex items-center justify-center gap-2">
                <Navigation size={18} /> View on Map
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};