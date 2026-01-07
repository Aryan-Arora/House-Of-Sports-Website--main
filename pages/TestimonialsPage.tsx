import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Play, Quote } from 'lucide-react';

const TestimonialsPage: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const testimonials = [
        {
            id: 1,
            name: "Rohan Mehta",
            role: "Badminton Regular",
            content: "HOS isn't just about booking a court. It's the community. I found my regular playing group here, and now we play twice a week without fail. The vibe is unmatched.",
            rating: 5,
            avatar: "RM"
        },
        {
            id: 2,
            name: "Priya Sharma",
            role: "Football Captain",
            content: "The level of organization is impressive. From the turf quality to the matchmaking, everything is professional. My team has grown so much playing in the weekend leagues.",
            rating: 5,
            avatar: "PS"
        },
        {
            id: 3,
            name: "Arjun Singh",
            role: "Weekend Warrior",
            content: "I started as a beginner, intimidated by the sport. But the 'Accessible for All' approach is real. I felt welcomed, coached, and now I'm competing in intermediate brackets!",
            rating: 5,
            avatar: "AS"
        }
    ];

    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <section className="py-20 px-6 border-b border-gray-900">
                <div className="container mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-syncopate font-bold mb-6"
                    >
                        VOICES OF HOS
                    </motion.h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Real stories from the athletes, captains, and everyday players who make our community special.
                    </p>
                </div>
            </section>

            {/* Video Testimonials Section */}
            <section className="py-24 px-6 bg-white text-black">
                <div className="container mx-auto">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="bg-black text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Watch</div>
                        <h2 className="text-3xl font-bold font-syncopate">PLAYER STORIES</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Video Placeholder 1 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="aspect-video bg-gray-200 rounded-[2rem] relative overflow-hidden group cursor-pointer shadow-xl"
                        >
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center pl-1 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                    <Play size={32} className="text-black" fill="black" />
                                </div>
                            </div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="font-bold text-2xl drop-shadow-md">"I found my team here."</p>
                                <p className="text-white/90 font-medium">Rahul's Story • Football</p>
                            </div>
                        </motion.div>

                        {/* Video Placeholder 2 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="aspect-video bg-gray-200 rounded-[2rem] relative overflow-hidden group cursor-pointer shadow-xl"
                        >
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center pl-1 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                    <Play size={32} className="text-black" fill="black" />
                                </div>
                            </div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="font-bold text-2xl drop-shadow-md">"Competitive yet friendly."</p>
                                <p className="text-white/90 font-medium">Sarah's Story • Badminton</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Text Testimonials Grid */}
            <section className="py-24 px-6 bg-gray-50 text-black">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold font-syncopate mb-12 text-center">COMMUNITY REVIEWS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-3xl relative hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                            >
                                <Quote className="absolute top-8 right-8 text-gray-200 w-10 h-10" />

                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic font-medium">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold font-syncopate text-sm">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TestimonialsPage;
