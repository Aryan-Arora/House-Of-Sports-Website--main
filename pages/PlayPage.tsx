import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SportCategories } from '../components/SportCategories';
import { VenueGrid } from '../components/VenueGrid';
import { SportType } from '../types';

const PlayPage: React.FC = () => {
    const [selectedSport, setSelectedSport] = useState<SportType>('Football');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="bg-black min-h-screen text-white pt-20">
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-syncopate font-bold mb-4">CHOOSE YOUR SPORT</h1>
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

export default PlayPage;
