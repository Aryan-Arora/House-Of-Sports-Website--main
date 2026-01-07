
import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center overflow-hidden bg-black text-white">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000" 
          alt="Sports Background"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 border border-white/30 rounded-full text-xs font-syncopate tracking-[0.2em] mb-6">
              EST. 2024 • THE ULTIMATE COMMUNITY
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-syncopate font-bold leading-tight mb-8">
              HOUSE OF <br />
              <span className="text-transparent border-text-stroke">SPORTS</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
          >
            Access structured play, premium facilities, and a real sporting community. 
            Join over 500+ players across badminton, football, and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="group bg-white text-black px-8 py-5 rounded-full font-bold text-sm tracking-widest flex items-center justify-center gap-3 hover:scale-105 transition-all">
              START PLAYING
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-transparent border border-white/30 backdrop-blur-md px-8 py-5 rounded-full font-bold text-sm tracking-widest flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
              <Play fill="white" size={16} />
              WATCH STORY
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-32 h-32 border border-white/20 rounded-full flex items-center justify-center"
        >
          <div className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center">
             <Trophy size={32} className="opacity-50" />
          </div>
        </motion.div>
      </div>
      
      <style>{`
        .border-text-stroke {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </div>
  );
};

import { Trophy } from 'lucide-react';
