
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { USPSection } from './components/USPSection';
import { SportCategories } from './components/SportCategories';
import { VenueGrid } from './components/VenueGrid';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { SportType } from './types';

const App: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState<SportType>('Football');

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-black">
      <Header />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="stats">
          <StatsSection />
        </section>

        <section id="about" className="py-20 bg-white">
          <About />
        </section>

        <section id="usp" className="py-20 bg-[#F8F8F8]">
          <USPSection />
        </section>

        <section id="play" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-syncopate font-bold mb-4">CHOOSE YOUR SPORT</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our wide range of sporting activities across top-tier venues in the city.
              </p>
            </motion.div>

            <SportCategories 
              selectedSport={selectedSport} 
              onSelect={setSelectedSport} 
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSport}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-12"
              >
                <VenueGrid sport={selectedSport} />
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
