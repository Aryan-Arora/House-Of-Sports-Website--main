import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

const CommunityPage: React.FC = () => {
    const [images, setImages] = useState<string[]>([
        "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=1000",
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000",
        "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1000"
    ]);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImages([imageUrl, ...images]);
        }
    };

    return (
        <main className="bg-black min-h-screen text-white pt-20">
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-syncopate font-bold mb-6">COMMUNITY GALLERY</h1>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                            Upload your favourite moment with us and get featured over here.
                        </p>

                        <div className="flex justify-center">
                            <label className="cursor-pointer bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-widest flex items-center gap-3 hover:scale-105 transition-all">
                                <Upload size={20} />
                                UPLOAD PHOTO
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageUpload}
                                />
                            </label>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {images.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="aspect-[4/5] relative group overflow-hidden rounded-2xl bg-gray-900"
                            >
                                <img
                                    src={img}
                                    alt={`Community moment ${index + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <ImageIcon className="text-white w-12 h-12" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CommunityPage;
