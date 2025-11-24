import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Diamond } from 'lucide-react';
import { NavItem } from '../types';
import { motion } from 'framer-motion';

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

  // Dynamic classes based on scroll state
  const navBgClass = scrolled 
    ? 'bg-white shadow-md py-3' 
    : 'bg-transparent py-6';

  const textColorClass = scrolled 
    ? 'text-diamond-navy' 
    : 'text-white';
    
  const logoColorClass = scrolled
    ? 'text-diamond-navy'
    : 'text-white';
    
  const accentColorClass = scrolled
    ? 'text-diamond-gold' // Gold on white bg
    : 'text-diamond-gold'; // Gold on dark/transparent bg

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 group relative z-50">
          <div className="relative">
            <Diamond className={`w-8 h-8 transition-colors duration-300 ${accentColorClass} fill-current`} />
          </div>
          <div className="flex flex-col">
            <h1 className={`text-2xl font-sport font-bold leading-none uppercase italic tracking-tighter transition-colors duration-300 ${logoColorClass}`}>
              Diamond<span className={accentColorClass}>Sports</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative group py-2"
              >
                <span className={`relative z-10 font-sport font-bold uppercase tracking-widest text-sm transition-colors duration-300 ${
                  isActive 
                    ? 'text-diamond-gold' 
                    : `${textColorClass} hover:text-diamond-gold`
                }`}>
                  {item.label}
                </span>
                {/* Underline effect */}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-diamond-gold transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}`}></span>
              </Link>
            );
          })}
          
          {/* CTA Button */}
          <Link
             to="/contact"
             className={`ml-4 px-6 py-2 border-2 font-sport font-bold text-sm uppercase tracking-wider transition-all skew-x-[-12deg] hover:scale-105 active:scale-95 ${
               scrolled 
                ? 'border-diamond-navy text-diamond-navy hover:bg-diamond-navy hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-diamond-navy'
             }`}
          >
            <span className="inline-block skew-x-[12deg]">Visit Store</span>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 z-50 transition-colors duration-300 ${textColorClass}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <motion.div 
        initial={false}
        animate={isOpen ? { x: 0 } : { x: '100%' }}
        className="fixed inset-0 bg-diamond-navy z-40 lg:hidden flex flex-col pt-32 px-10 gap-8"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
    </header>
  );
};