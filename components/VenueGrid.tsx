
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, IndianRupee } from 'lucide-react';
import { VENUES } from '../constants';
import { SportType } from '../types';

interface Props {
  sport: SportType;
}

export const VenueGrid: React.FC<Props> = ({ sport }) => {
  const filteredVenues = VENUES.filter(v => v.sport === sport);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredVenues.map((venue, index) => (
        <motion.div
          key={venue.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          className="group cursor-pointer"
        >
          <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img 
                src={venue.imageUrl} 
                alt={venue.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-1">
                <Users size={14} className="text-black" />
                <span className="text-xs font-bold">{venue.monthlyPlayers} Players / mo</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <button className="w-full bg-white text-black py-3 rounded-xl font-bold uppercase text-xs tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform">
                  Book A Slot
                </button>
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold group-hover:text-gray-600 transition-colors">{venue.name}</h3>
                <div className="flex items-center text-green-600 font-bold">
                  <IndianRupee size={16} />
                  <span className="text-lg">{venue.price} <span className="text-xs text-gray-400 font-normal">/ pp</span></span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-sm mt-auto">
                <MapPin size={16} />
                <span>{venue.location}</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
