import React from 'react';
import { Link } from 'react-router-dom';
import { Diamond, Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-8 border-t-4 border-diamond-gold">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Diamond className="w-8 h-8 text-diamond-gold fill-diamond-gold" />
              <div>
                <h3 className="text-2xl font-sport font-bold italic uppercase leading-none">Diamond<span className="text-diamond-gold">Sports</span></h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Vadodara's ultimate sports destination since 1954. Heritage values with modern performance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded hover:bg-diamond-gold hover:text-diamond-navy transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded hover:bg-diamond-gold hover:text-diamond-navy transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-sport font-bold text-xl uppercase italic mb-6">Navigate</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/products" className="hover:text-diamond-gold transition-colors">Equipment Inventory</Link></li>
              <li><Link to="/services" className="hover:text-diamond-gold transition-colors">Repair Services</Link></li>
              <li><Link to="/about" className="hover:text-diamond-gold transition-colors">Our History</Link></li>
              <li><Link to="/contact" className="hover:text-diamond-gold transition-colors">Store Locator</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-sport font-bold text-xl uppercase italic mb-6">Locations</h4>
            <div className="space-y-6 text-sm text-gray-400">
              <div>
                <h5 className="text-diamond-gold font-bold mb-1 uppercase">Heritage Store</h5>
                <p className="flex gap-2 items-start"><MapPin size={14} className="mt-1 flex-shrink-0"/> Raopura, Near Kothi Kacheri</p>
              </div>
              <div>
                <h5 className="text-diamond-gold font-bold mb-1 uppercase">The Studio</h5>
                <p className="flex gap-2 items-start"><MapPin size={14} className="mt-1 flex-shrink-0"/> Gotri-Vasna Road, Near Bansal Mall</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-sport font-bold text-xl uppercase italic mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-diamond-gold" />
                <span className="font-mono">+91 94276 02221</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-diamond-gold" />
                <span className="font-mono">+91 99799 56111</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-diamond-gold" />
                <span>diamond.sports1965@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-600 font-medium uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Diamond Sports Vadodara. Est 1954.</p>
        </div>
      </div>
    </footer>
  );
};