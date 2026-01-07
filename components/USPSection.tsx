
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Layout, ShieldCheck, Zap, TrendingUp } from 'lucide-react';
import { USPS } from '../constants';

const iconMap: any = {
  Users: Users,
  Layout: Layout,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  TrendingUp: TrendingUp,
};

export const USPSection: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-syncopate font-bold mb-6">WHY HOS?</h2>
        <div className="w-20 h-1 bg-black mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {USPS.map((usp, index) => {
          const IconComponent = iconMap[usp.icon];
          return (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2rem] border border-gray-100 hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-colors">
                <IconComponent size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{usp.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                {usp.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
