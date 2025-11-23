import React from 'react';
import { ServiceItem } from '../types';
import { Hammer, PenTool, Medal, Shirt, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const services: ServiceItem[] = [
  {
    title: 'Bat Knocking & Repair',
    description: 'Mechanical mallet knocking to compress fibers. Handle replacement, toe guards, and threading.',
    price: '₹200 – ₹1,500',
    icon: Hammer
  },
  {
    title: 'Precision Stringing',
    description: 'Digital & manual stringing for Badminton/Tennis. Authorized Yonex/Li-Ning stringers.',
    price: '₹200 + String Cost',
    icon: PenTool
  },
  {
    title: 'Trophies & Customization',
    description: 'Metal engraving, sticker printing, and custom shield fabrication for tournaments.',
    price: 'Starts @ ₹50',
    icon: Medal
  },
  {
    title: 'Jersey Personalization',
    description: 'Sublimation or vinyl printing of names, numbers, and team logos. Team bulk orders.',
    price: '₹150 – ₹300 / pc',
    icon: Shirt
  }
];

export const Services: React.FC = () => {
  return (
    <div className="bg-diamond-light min-h-screen">
      <div className="bg-diamond-navy text-white py-20 relative overflow-hidden">
        <Wrench className="absolute -right-10 -bottom-10 text-white opacity-5 w-96 h-96 rotate-45" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="border-l-8 border-diamond-gold pl-6">
            <h1 className="font-sport text-6xl font-black uppercase italic mb-2">The Workshop</h1>
            <p className="text-xl text-gray-300 font-light">Expert maintenance. Professional grade machines. Quick turnaround.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div 
              whileHover={{ scale: 1.02 }}
              key={index} 
              className="bg-white p-8 shadow-lg border-b-4 border-diamond-navy hover:border-diamond-gold transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-gray-50 w-24 h-full -skew-x-12 translate-x-12"></div>
              
              <div className="relative z-10 flex gap-6 items-start">
                <div className="bg-diamond-light p-4 rounded-lg group-hover:bg-diamond-gold transition-colors">
                  <service.icon className="w-8 h-8 text-diamond-navy" />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h3 className="text-2xl font-sport font-bold text-diamond-navy uppercase italic">{service.title}</h3>
                    <span className="bg-diamond-navy text-white text-xs font-bold px-3 py-1 skew-x-[-12deg]">
                      <span className="block skew-x-[12deg]">{service.price}</span>
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium leading-relaxed border-t border-gray-100 pt-2">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-diamond-navy rounded-2xl p-10 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-stripe opacity-10"></div>
          <h3 className="text-3xl font-sport font-bold mb-4 uppercase italic relative z-10">Urgent Repair?</h3>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto relative z-10">
            We offer 24-hour turnaround for emergency racket stringing and minor bat repairs at our Gotri Studio.
          </p>
          <a href="#/contact" className="inline-block bg-diamond-gold text-diamond-navy font-bold uppercase px-8 py-3 hover:bg-white transition-colors skew-x-[-12deg] relative z-10">
            <span className="block skew-x-[12deg]">Get Directions</span>
          </a>
        </div>
      </div>
    </div>
  );
};