import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Layout, ShieldCheck, Zap, TrendingUp, Trophy, Play } from 'lucide-react';

const AboutPage: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const usps = [
        { title: 'Community-First Model', icon: Users, description: 'HOS is not just a booking platform—it’s a sports community where players return regularly and grow together.' },
        { title: 'Structured Yet Flexible', icon: Layout, description: 'From casual pickups to competitive matches, players can choose how serious or relaxed they want their game to be.' },
        { title: 'Fair Play & Discipline', icon: ShieldCheck, description: 'Strong emphasis on sportsmanship, safety, and respect, both on and off the field.' },
        { title: 'Accessible for All', icon: Zap, description: 'Beginners, intermediates, and advanced players all have space within the HOS ecosystem.' },
        { title: 'Player-Driven Growth', icon: TrendingUp, description: 'Teams, captains, and regular players are actively involved in shaping games and experiences.' },
        { title: 'Tournaments & Leagues', icon: Trophy, description: 'Regular competitive events and leagues for those looking to test their skills at the highest level.' },
    ];

    return (
        <div className="bg-black min-h-screen text-white pt-20">
            {/* Hero Content */}
            <section className="relative py-20 px-6 border-b border-gray-900">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-syncopate font-bold mb-8 leading-tight">
                            MORE THAN <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">JUST A GAME</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl">
                            House of Sports started as a response to a gap. We are building the infrastructure for community, discipline, and growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Story */}
            <section className="py-24 px-6 bg-white text-black">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl font-syncopate font-bold">OUR ORIGIN</h2>
                        <div className="w-20 h-1 bg-black"></div>
                        <p className="text-lg leading-relaxed text-gray-700">
                            House of Sports (HOS) started as a simple response to a clear gap in the sports ecosystem. While interest in sports was growing, access to structured play, good facilities, and real sporting communities was still limited. Many passionate players simply lacked the right environment to play, improve, and feel a sense of belonging.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-700">
                            HOS was built to change that. It focuses on bringing people together through sport, offering consistent opportunities to play while encouraging discipline, fairness, and long-term growth.
                        </p>
                        <p className="text-lg font-bold">
                            Today, HOS is a growing sports community where athletes, enthusiasts, and beginners come together to play, compete, and grow, both on and off the field.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6">
                        {/* Video Placeholder 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-100 rounded-[2rem] h-64 relative overflow-hidden group cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                                    <Play size={24} className="text-black" fill="black" />
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6">
                                <p className="text-white font-bold text-lg drop-shadow-md">The Beginning</p>
                                <p className="text-white/80 text-sm">Documentary Short</p>
                            </div>
                        </motion.div>

                        {/* Video Placeholder 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-gray-100 rounded-[2rem] h-64 relative overflow-hidden group cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                                    <Play size={24} className="text-black" fill="black" />
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6">
                                <p className="text-white font-bold text-lg drop-shadow-md">Building the Community</p>
                                <p className="text-white/80 text-sm">Behind the Scenes</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values / USPs Grid (Moved from Home) */}
            <section className="py-24 px-6 bg-black text-white">
                <div className="container mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-syncopate font-bold mb-4">OUR CORE PILLARS</h2>
                        <p className="text-gray-400">The foundation of the HOS ecosystem.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {usps.map((usp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:bg-gray-800 transition-colors"
                            >
                                <div className="mb-6 bg-black w-14 h-14 rounded-xl flex items-center justify-center border border-gray-700">
                                    <usp.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{usp.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {usp.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
