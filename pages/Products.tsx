import React from 'react';
import { ProductCategory } from '../types';
import { CircleDashed, Dumbbell, Activity, Trophy, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const products: ProductCategory[] = [
  {
    id: 'cricket',
    title: 'Cricket',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1000',
    items: [
      { name: 'English Willow Bats', description: 'Entry-level to Player Grade (Grains 8+)', priceRange: '₹4,500 – ₹55,000' },
      { name: 'Kashmir Willow Bats', description: 'Durable bats for practice & club cricket', priceRange: '₹1,200 – ₹4,000' },
      { name: 'Protective Gear', description: 'Pads, gloves, helmets', priceRange: '₹800 – ₹6,000' },
      { name: 'Leather Balls', description: 'Club standard to SG Test Match', priceRange: '₹300 – ₹2,500' },
      { name: 'Kit Bags', description: 'Shoulder bags to Wheelie Coffins', priceRange: '₹800 – ₹8,000' },
    ]
  },
  {
    id: 'badminton',
    title: 'Badminton',
    icon: CircleDashed,
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1000',
    items: [
      { name: 'Pro Rackets', description: 'Carbon-graphite (Yonex/Li-Ning)', priceRange: '₹3,000 – ₹18,000' },
      { name: 'Shuttlecocks', description: 'Nylon (Mavis) & Feather (AS-2)', priceRange: '₹600 – ₹1,800' },
      { name: 'Court Shoes', description: 'Non-marking gum sole', priceRange: '₹2,500 – ₹7,000' },
    ]
  },
  {
    id: 'teams',
    title: 'Team Sports',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1000',
    items: [
      { name: 'Football', description: 'Training & PU Match balls', priceRange: '₹400 – ₹2,500' },
      { name: 'Basketball', description: 'Rubber outdoor & Indoor leather', priceRange: '₹600 – ₹4,000' },
      { name: 'Volleyball', description: 'Shooting and smash balls', priceRange: '₹500 – ₹1,800' },
    ]
  },
  {
    id: 'fitness',
    title: 'Fitness HQ',
    icon: Dumbbell,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000',
    items: [
      { name: 'Weights', description: 'Hex dumbbells & plates', priceRange: '₹200 – ₹300 / kg' },
      { name: 'Accessories', description: 'Mats, bands, gloves', priceRange: '₹300 – ₹2,500' },
      { name: 'Machines', description: 'Treadmills & bikes', priceRange: '₹15k – ₹50k+' },
    ]
  },
  {
    id: 'indoor',
    title: 'Recreation',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1534158914592-062992bbe900?q=80&w=1000',
    items: [
      { name: 'Table Tennis', description: 'Rackets (GKI/Stag)', priceRange: '₹500 – ₹3,000' },
      { name: 'Skating', description: 'Inline, quads & safety kits', priceRange: '₹1,500 – ₹5,000' },
      { name: 'Carrom', description: 'Waterproof boards', priceRange: 'Inquire' },
    ]
  }
];

export const Products: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
       <div className="bg-diamond-navy relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-sport text-6xl md:text-7xl font-black text-white uppercase italic mb-2 tracking-tighter">
            The <span className="text-diamond-gold">Armory</span>
          </h1>
          <p className="text-gray-300 font-medium text-lg max-w-2xl mx-auto">
            Authorized Dealer: SG • SS • GM • MRF • Yonex • Li-Ning • Nivia
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((category, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={category.id} 
              className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200 group hover:border-diamond-gold transition-colors duration-300"
            >
              {/* Header Image */}
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-diamond-navy/80 z-10 group-hover:bg-diamond-navy/60 transition-colors"></div>
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover absolute inset-0 z-0 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 z-20 p-6 w-full">
                  <div className="flex justify-between items-end">
                     <h2 className="text-4xl font-sport font-bold text-white uppercase italic">{category.title}</h2>
                     <category.icon className="text-diamond-gold w-10 h-10 mb-1" />
                  </div>
                </div>
              </div>

              {/* List */}
              <div className="p-6 bg-white">
                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-dashed border-gray-200 pb-3 last:border-0 hover:bg-gray-50 p-2 rounded transition-colors">
                      <div>
                        <h4 className="font-bold text-diamond-navy uppercase text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-500">{item.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="block font-sport font-bold text-diamond-accent text-lg">
                          {item.priceRange}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <p className="text-gray-500 italic mb-4">*Inventory moves fast. Call us to check availability.</p>
           <button className="bg-diamond-navy text-white px-8 py-3 font-sport font-bold uppercase tracking-wider rounded-full hover:bg-diamond-gold hover:text-diamond-navy transition-colors">
             Download Full Catalog
           </button>
        </div>
      </div>
    </div>
  );
};