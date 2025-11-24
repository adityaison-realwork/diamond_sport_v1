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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Design Variables based on State
  const navbarClasses = scrolled
    ? 'bg-white shadow-lg py-3 border-b border-gray-100'
    : 'bg-transparent py-6';
    
  const logoTextMain = scrolled ? 'text-diamond-navy' : 'text-white';
  const logoTextSub = scrolled ? 'text-diamond-gold' : 'text-diamond-gold';
  const logoIcon = scrolled ? 'text-diamond-navy' : 'text-white';
  
  const navItemBase = scrolled ? 'text-diamond-navy' : 'text-white';
  const navItemHover = 'hover:text-diamond-gold';
  
  const mobileBg = 'bg-diamond-navy';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${navbarClasses}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group relative z-50">
          <div className="relative">
            <Diamond className={`w-8 h-8 ${logoIcon} fill-current transition-colors duration-300 group-hover:scale-110`} />
            {/* Glow effect only visible on dark header */}
            {!scrolled && (
               <motion.div 
                className="absolute inset-0 bg-white blur-lg opacity-0 group-hover:opacity-30"
                layoutId="glow"
              />
            )}
          </div>
          <div className="flex flex-col">
            <h1 className={`text-2xl font-sport font-bold leading-none uppercase italic tracking-tighter transition-colors duration-300 ${logoTextMain}`}>
              Diamond<span className={logoTextSub}>Sports</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-4 py-2 group overflow-hidden"
              >
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="navUnderline"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${scrolled ? 'bg-diamond-navy' : 'bg-diamond-gold'}`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                <span className={`relative z-10 font-sport font-bold uppercase tracking-widest text-sm transition-colors duration-300 ${isActive ? 'text-diamond-gold' : `${navItemBase} ${navItemHover}`}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
          
          <Link
             to="/contact"
             className={`ml-6 px-6 py-2 font-sport font-bold text-sm uppercase tracking-wider transition-all skew-x-[-12deg] hover:scale-105 active:scale-95 border-2 ${scrolled ? 'border-diamond-navy text-diamond-navy hover:bg-diamond-navy hover:text-white' : 'border-white text-white hover:bg-white hover:text-diamond-navy'}`}
          >
            <span className="inline-block skew-x-[12deg]">Visit Store</span>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 z-50 transition-colors ${scrolled ? 'text-diamond-navy' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div 
        initial={false}
        animate={isOpen ? { x: 0 } : { x: '100%' }}
        className={`fixed inset-0 ${mobileBg} z-40 lg:hidden flex flex-col pt-28 px-8 gap-6`}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="text-3xl font-sport font-bold text-white uppercase tracking-wider hover:text-diamond-gold transition-colors italic border-b border-white/10 pb-4"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-3xl font-sport font-bold text-diamond-gold uppercase tracking-wider italic pt-4"
          >
            Visit Store
          </Link>
      </motion.div>
    </header>
  );
};