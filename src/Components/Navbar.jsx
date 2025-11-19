import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-vedara-light/90 backdrop-blur-md z-50 border-b border-stone-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-serif text-3xl font-bold text-vedara-green tracking-wider">VEDARA</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-600 hover:text-vedara-green transition font-medium">Our Approach</a>
            <a href="#" className="text-gray-600 hover:text-vedara-green transition font-medium">Programs</a>
            <a href="#" className="text-gray-600 hover:text-vedara-green transition font-medium">Science</a>
            <a href="#" className="text-gray-600 hover:text-vedara-green transition font-medium">Login</a>
            <button className="bg-vedara-clay hover:bg-orange-800 text-white px-6 py-2.5 rounded-md font-bold transition duration-300">
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-vedara-green">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-vedara-light border-b border-stone-200 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-vedara-sand rounded-md">Our Approach</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-vedara-sand rounded-md">Programs</a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-vedara-sand rounded-md">Science</a>
            <button className="w-full mt-4 bg-vedara-clay text-white px-6 py-3 rounded-md font-bold">
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;