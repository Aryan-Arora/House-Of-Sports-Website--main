
import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

export const StatsSection: React.FC = () => {
  return (
    <div className="bg-white text-black py-24 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-syncopate font-bold mb-4">{stat.value}</div>
              <div className="text-gray-600 text-sm tracking-widest uppercase font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
