import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronDown, Check } from 'lucide-react';

interface Jersey {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
}

const ShopPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const jerseys: Jersey[] = [
        {
            id: 1,
            name: "HOS Home Kit 2024",
            price: 1499,
            image: "https://images.unsplash.com/photo-1577212017184-80cc0d07d4b2?q=80&w=1000",
            description: "Official House of Sports Home Kit. Black with gold accents."
        },
        {
            id: 2,
            name: "HOS Away Kit 2024",
            price: 1499,
            image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1000",
            description: "The sleek white Away Kit. Breathable and lightweight."
        },
        {
            id: 3,
            name: "Training Top",
            price: 999,
            image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000",
            description: "High-performance training gear for everyday sessions."
        },
        {
            id: 4,
            name: "Goalkeeper Kit",
            price: 1599,
            image: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=1000",
            description: "Stand out in the box with our vibrant keeper kit."
        }
    ];

    const [expandedId, setExpandedId] = useState<number | null>(null);
    const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({});

    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    const toggleExpand = (id: number) => {
        if (expandedId === id) {
            setExpandedId(null);
        } else {
            setExpandedId(id);
        }
    };

    const handleSizeSelect = (id: number, size: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedSizes(prev => ({ ...prev, [id]: size }));
    };

    const handleBuyNow = (jersey: Jersey, e: React.MouseEvent) => {
        e.stopPropagation();
        const size = selectedSizes[jersey.id];
        if (!size) {
            alert("Please select a size first!");
            return;
        }

        const message = `Hello, I would like to buy the ${jersey.name} in size ${size}. Price: ₹${jersey.price}`;
        const whatsappUrl = `https://wa.me/918076930593?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
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
                        <h1 className="text-4xl md:text-6xl font-syncopate font-bold mb-6">OFFICIAL STORE</h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Wear the badge. Represent the community. High-quality kits for every player.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {jerseys.map((jersey, index) => (
                            <motion.div
                                key={jersey.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => toggleExpand(jersey.id)}
                                className={`bg-gray-900 rounded-3xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-white/10 transition-all border border-gray-800 ${expandedId === jersey.id ? 'col-span-1 md:col-span-2' : ''}`}
                            >
                                <div className={`relative ${expandedId === jersey.id ? 'h-64' : 'h-80'}`}>
                                    <img
                                        src={jersey.image}
                                        alt={jersey.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                                    <div className="absolute bottom-6 left-6 right-6">
                                        <h3 className="text-xl font-bold font-syncopate mb-2">{jersey.name}</h3>
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-300 font-mono">₹{jersey.price}</p>
                                            <motion.div
                                                animate={{ rotate: expandedId === jersey.id ? 180 : 0 }}
                                                className="bg-white/10 p-2 rounded-full backdrop-blur-md"
                                            >
                                                <ChevronDown size={20} />
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {expandedId === jersey.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="p-6 bg-gray-900 border-t border-gray-800"
                                        >
                                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                                {jersey.description}
                                            </p>

                                            <div className="mb-8">
                                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Select Size</p>
                                                <div className="flex flex-wrap gap-3">
                                                    {sizes.map((size) => (
                                                        <button
                                                            key={size}
                                                            onClick={(e) => handleSizeSelect(jersey.id, size, e)}
                                                            className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${selectedSizes[jersey.id] === size
                                                                    ? 'bg-white text-black scale-110 shadow-lg'
                                                                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                                                }`}
                                                        >
                                                            {size}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <button
                                                onClick={(e) => handleBuyNow(jersey, e)}
                                                className="w-full bg-white text-black py-4 rounded-xl font-bold font-syncopate tracking-wider hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group"
                                            >
                                                <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
                                                BUY NOW
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ShopPage;
