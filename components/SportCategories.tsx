
import React from 'react';
import { motion } from 'framer-motion';
import { SportType } from '../types';

interface Props {
  selectedSport: SportType;
  onSelect: (sport: SportType) => void;
}

const sports: SportType[] = ['Football', 'Badminton', 'Volleyball', 'Basketball', 'Pickleball'];

export const SportCategories: React.FC<Props> = ({ selectedSport, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {sports.map((sport) => (
        <button
          key={sport}
          onClick={() => onSelect(sport)}
          className={`relative px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
            selectedSport === sport ? 'text-white' : 'text-gray-400 hover:text-black'
          }`}
        >
          <span className="relative z-10">{sport}</span>
          {selectedSport === sport && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-black rounded-full"
              transition={{ type: 'spring', duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};
