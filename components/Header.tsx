
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Trophy } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'USPs', href: '#usp' },
    { name: 'Play', href: '#play' },
    { name: 'Community', href: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-black text-white p-2 rounded-lg">
            <Trophy size={24} />
          </div>
          <span className="font-syncopate font-bold text-xl tracking-tight">HOS</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-widest hover:text-gray-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-black text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest hover:bg-gray-800 transition-colors">
            JOIN NOW
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-lg font-bold uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-black text-white px-6 py-4 rounded-xl font-bold text-lg uppercase">
            JOIN COMMUNITY
          </button>
        </div>
      </motion.div>
    </header>
  );
};
