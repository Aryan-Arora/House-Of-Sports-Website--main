import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from '../components/Hero';
import { StatsSection } from '../components/StatsSection';
import { USPSection } from '../components/USPSection';
import { SportCategories } from '../components/SportCategories';
import { VenueGrid } from '../components/VenueGrid';
import { SportType } from '../types';

export const HomePage: React.FC = () => {
    const [selectedSport, setSelectedSport] = useState<SportType>('Football');

    return (
        <main>
            <section id="home">
                <Hero />
            </section>

            <section id="stats">
                <StatsSection />
            </section>

            <section id="usp" className="py-20 bg-white text-black">
                <USPSection />
            </section>

            <section id="play" className="py-20 bg-black text-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-syncopate font-bold mb-4">CHOOSE YOUR SPORT</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
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
    );
};
