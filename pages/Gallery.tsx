import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: 'https://picsum.photos/seed/batcave/800/600', title: 'The Bat Cave', category: 'Premium Studio' },
  { src: 'https://picsum.photos/seed/heritage/800/600', title: 'Stacked Shelves', category: 'Raopura Heritage' },
  { src: 'https://picsum.photos/seed/shoes/800/600', title: 'Footwear Wall', category: 'Studio Gear' },
  { src: 'https://picsum.photos/seed/repair/800/600', title: 'Master at Work', category: 'Workshop' },
  { src: 'https://picsum.photos/seed/store/800/600', title: 'Showroom Floor', category: 'Gotri Studio' },
  { src: 'https://picsum.photos/seed/trophies/800/600', title: 'Awards & Glory', category: 'Trophies' },
];

export const Gallery: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
       <div className="bg-diamond-navy py-16 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="font-sport text-5xl font-black text-white uppercase italic mb-2">Inside Access</h1>
          <p className="text-gray-400 uppercase tracking-widest text-sm">From 1954 to Present Day</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              key={idx} 
              className="group relative aspect-[4/3] overflow-hidden bg-gray-900 cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-diamond-gold text-xs font-bold uppercase tracking-wider block mb-1">{img.category}</span>
                  <h3 className="text-white font-sport text-2xl uppercase italic leading-none">{img.title}</h3>
                </div>
              </div>
              {/* Border Frame effect */}
              <div className="absolute inset-4 border border-white/20 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};