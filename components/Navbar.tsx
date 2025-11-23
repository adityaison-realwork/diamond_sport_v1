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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
        ? 'bg-diamond-navy shadow-lg py-2 border-b-4 border-diamond-gold' 
        : 'bg-diamond-navy/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group relative z-50">
          <div className="relative">
            <Diamond className="w-8 h-8 text-diamond-gold fill-diamond-gold transition-transform group-hover:scale-110 duration-300" />
            <motion.div 
              className="absolute inset-0 bg-diamond-gold blur-lg opacity-0 group-hover:opacity-50"
              layoutId="glow"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-sport font-bold text-white leading-none uppercase italic tracking-tighter">
              Diamond<span className="text-diamond-gold">Sports</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-4 py-2 group"
              >
                {isActive && (
                  <motion.div
                    layoutId="navBackground"
                    className="absolute inset-0 bg-white skew-x-[-12deg]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 font-sport font-bold uppercase tracking-wider text-sm transition-colors ${
                  isActive ? 'text-diamond-navy' : 'text-gray-300 group-hover:text-white'
                }`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
          <Link
             to="/contact"
             className="ml-6 px-6 py-2 bg-diamond-gold text-diamond-navy font-sport font-bold text-sm uppercase tracking-wider hover:bg-white transition-all skew-x-[-12deg] hover:scale-105 active:scale-95"
          >
            <span className="inline-block skew-x-[12deg]">Visit Store</span>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div 
        initial={false}
        animate={isOpen ? { x: 0 } : { x: '100%' }}
        className="fixed inset-0 bg-diamond-navy z-40 lg:hidden flex flex-col pt-24 px-8 gap-6"
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="text-3xl font-sport font-bold text-white uppercase tracking-wider hover:text-diamond-gold transition-colors italic"
          >
            {item.label}
          </Link>
        ))}
        <Link
            to="/contact"
            className="text-3xl font-sport font-bold text-diamond-gold uppercase tracking-wider italic"
          >
            Visit Store
          </Link>
      </motion.div>
    </header>
  );
};