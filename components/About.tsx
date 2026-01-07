
import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400 mb-6 block">OUR ORIGIN</span>
          <h2 className="text-4xl md:text-6xl font-syncopate font-bold mb-10 leading-tight">
            NOT JUST A <br />
            PLATFORM, <br />
            A COMMUNITY.
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              House of Sports (HOS) started as a simple response to a clear gap in the sports ecosystem. 
              While interest in sports was growing, access to structured play, good facilities, and real 
              sporting communities was still limited.
            </p>
            <p>
              HOS was built to change that. It focuses on bringing people together through sport, 
              offering consistent opportunities to play while encouraging discipline, fairness, 
              and long-term growth.
            </p>
            <p className="font-bold text-black italic">
              Today, HOS is a growing ecosystem where athletes, enthusiasts, and beginners 
              come together to play, compete, and grow, both on and off the field.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-3xl">
            <img 
              src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=1000" 
              alt="Community Focus"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block max-w-xs">
            <div className="text-4xl font-syncopate font-bold mb-2">500+</div>
            <div className="text-sm text-gray-500 tracking-widest uppercase">Registered Athletes in our network</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
