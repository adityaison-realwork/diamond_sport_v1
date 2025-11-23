import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Medal, ShieldCheck, Zap, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Marquee = () => (
  <div className="bg-diamond-gold overflow-hidden py-3 whitespace-nowrap border-y-4 border-black relative z-20 rotate-1 scale-105 shadow-lg">
    <div className="inline-block animate-marquee">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="text-diamond-navy font-sport font-black text-xl mx-8 uppercase tracking-widest">
          Cricket • Football • Badminton • Fitness • Running •
        </span>
      ))}
    </div>
  </div>
);

export const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden bg-diamond-light">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-diamond-navy overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-10 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-diamond-navy via-diamond-navy/90 to-transparent z-10"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0 lg:left-1/3">
           <img
            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop"
            alt="Cricket Stadium"
            className="w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
               <span className="bg-diamond-gold text-diamond-navy font-bold px-3 py-1 text-sm uppercase skew-x-[-12deg] shadow-neon">
                 <span className="inline-block skew-x-[12deg]">Est. 1954</span>
               </span>
               <span className="text-gray-400 font-sport uppercase tracking-widest text-sm">Vadodara, Gujarat</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="font-sport font-black text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-6 uppercase italic">
              Unleash <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-diamond-gold to-yellow-200">Your Game</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 font-light border-l-4 border-diamond-gold pl-6">
              From heritage wholesaling to a state-of-the-art retail studio. The ultimate destination for pros and beginners alike.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
              <Link to="/products" className="group relative inline-block">
                <div className="absolute inset-0 bg-diamond-gold translate-y-2 translate-x-2 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
                <div className="relative bg-white border-2 border-diamond-gold px-8 py-4 text-diamond-navy font-sport font-black text-xl uppercase tracking-wider hover:bg-diamond-gold transition-colors">
                  Explore Gear
                </div>
              </Link>
              <Link to="/contact" className="group flex items-center gap-3 text-white font-sport font-bold text-xl uppercase tracking-wider hover:text-diamond-gold transition-colors px-6 py-4">
                Locate Stores <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Element decoration */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 hidden lg:block text-diamond-gold opacity-20"
        >
          <Activity size={200} />
        </motion.div>
      </section>

      <Marquee />

      {/* Philosophy / Intro */}
      <section className="py-24 bg-white relative">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-diamond-gold skew-x-[-6deg] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&w=2070&auto=format&fit=crop" 
                alt="Sports Equipment" 
                className="relative w-full h-[500px] object-cover shadow-2xl skew-x-[-3deg] grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-10 -left-6 bg-diamond-navy text-white p-6 skew-x-[-3deg] shadow-xl border-l-4 border-diamond-gold">
                <p className="font-sport font-bold text-3xl skew-x-[3deg]">Customer Centricity<br/>Over Profit</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-diamond-accent font-bold uppercase tracking-widest mb-2">Who We Are</h4>
              <h2 className="text-5xl md:text-6xl font-sport font-bold text-diamond-navy mb-6 leading-tight">
                LEGACY MEETS <span className="text-stroke text-transparent bg-clip-text bg-gradient-to-br from-diamond-navy to-black" style={{ WebkitTextStroke: '1px #0f172a'}}>PERFORMANCE</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
                Established in 1954, Diamond Sports isn't just a shop; it's a cornerstone of Vadodara’s sporting history. Managed by the Acharya family for generations.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We bridge the gap. From a ₹50 rubber ball to a ₹50,000 professional English Willow bat, we serve the dreamer and the achiever with equal passion.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 border-l-4 border-diamond-navy">
                  <h3 className="font-sport font-bold text-2xl text-diamond-navy">Heritage Store</h3>
                  <p className="text-sm text-gray-500">Raopura • The Original</p>
                </div>
                <div className="bg-diamond-navy p-4 border-l-4 border-diamond-gold text-white">
                  <h3 className="font-sport font-bold text-2xl text-diamond-gold">The Studio</h3>
                  <p className="text-sm text-gray-400">Gotri • Premium Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Dynamic Cards */}
      <section className="py-24 bg-diamond-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-diamond-gold/5 -skew-x-12 transform origin-top-right"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-sport font-bold mb-4 uppercase italic">Why Play With Us?</h2>
            <div className="w-24 h-2 bg-diamond-gold mx-auto skew-x-[-20deg]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Trophy, title: "Authentic Brands", desc: "Authorized dealer for SG, SS, GM, Yonex. No fakes, just performance." },
              { icon: ShieldCheck, title: "Expert Guidance", desc: "We don't sell you the most expensive gear. We sell you the right gear." },
              { icon: Zap, title: "Pro Services", desc: "Machine knocking, racket stringing, and custom repairs. We keep you in the game." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 group hover:bg-white/10 transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-diamond-gold w-20 h-20 translate-x-10 -translate-y-10 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <feature.icon className="w-16 h-16 text-diamond-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl font-sport font-bold mb-4 uppercase italic">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-200">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-diamond-gold relative">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-sport font-black text-diamond-navy uppercase leading-none mb-2">Ready to Level Up?</h2>
            <p className="text-diamond-navy/80 font-bold text-xl">Experience the equipment first-hand at our studios.</p>
          </div>
          <Link to="/contact" className="bg-diamond-navy text-white px-10 py-5 font-sport font-bold text-xl uppercase tracking-wider shadow-2xl hover:bg-black transition-colors -skew-x-12 transform hover:scale-105 active:scale-95">
            <span className="block skew-x-12">Find A Store</span>
          </Link>
        </div>
      </section>
    </div>
  );
};