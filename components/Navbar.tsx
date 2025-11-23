import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Diamond } from 'lucide-react';
import { NavItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Reviews', path: '/reviews' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Design Logic:
  // Top ( !scrolled ): Transparent background, White text.
  // Scrolled ( scrolled ): White background, Navy text, Shadow.
  const isTop = !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isTop 
          ? 'bg-transparent py-6' 
          : 'bg-white shadow-md py-3'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className={`p-2 rounded-lg transition-all duration-500 ${isTop ? 'bg-white/10 backdrop-blur-sm' : 'bg-diamond-navy'}`}>
            <Diamond className={`w-7 h-7 transition-colors duration-500 ${isTop ? 'text-white' : 'text-diamond-gold'}`} />
          </div>
          <div className="flex flex-col">
            <h1 className={`text-2xl font-sport font-bold leading-none uppercase tracking-tighter transition-colors duration-500 ${isTop ? 'text-white' : 'text-diamond-navy'}`}>
              Diamond<span className={`${isTop ? 'text-white/80' : 'text-diamond-gold'}`}>Sports</span>
            </h1>
            <span className={`text-[0.6rem] font-bold tracking-[0.25em] uppercase transition-colors duration-500 ${isTop ? 'text-gray-300' : 'text-gray-500'}`}>
              Vadodara
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative group"
              >
                <span className={`font-sport font-bold uppercase tracking-widest text-sm transition-colors duration-300 ${
                  isActive
                    ? (isTop ? 'text-white' : 'text-diamond-gold')
                    : (isTop ? 'text-white hover:text-white/80' : 'text-diamond-navy hover:text-diamond-gold')
                }`}>
                  {item.label}
                </span>
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'} ${isTop ? 'bg-white' : 'bg-diamond-gold'}`}></span>
              </Link>
            );
          })}
          
          <Link
             to="/contact"
             className={`ml-4 px-6 py-2 border-2 font-sport font-bold text-sm uppercase tracking-wider skew-x-[-12deg] transition-all duration-300 hover:scale-105 active:scale-95 ${
                isTop
                    ? 'border-white text-white hover:bg-white hover:text-diamond-navy'
                    : 'border-diamond-navy text-diamond-navy hover:bg-diamond-navy hover:text-white'
             }`}
          >
            <span className="inline-block skew-x-[12deg]">Visit Store</span>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 z-50 transition-colors duration-300 ${isTop ? 'text-white' : 'text-diamond-navy'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} className={scrolled ? 'text-diamond-navy' : 'text-white'} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "tween", ease: "circOut", duration: 0.3 }}
            className="fixed inset-0 bg-diamond-navy z-40 lg:hidden flex flex-col pt-28 px-8 gap-6 shadow-2xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-3xl font-sport font-bold text-white uppercase tracking-wider hover:text-diamond-gold transition-colors italic border-b border-white/10 pb-4"
              >
                {item.label}
              </Link>
            ))}
            <Link
                to="/contact"
                className="text-3xl font-sport font-bold text-diamond-gold uppercase tracking-wider italic mt-4"
              >
                Visit Store
              </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};