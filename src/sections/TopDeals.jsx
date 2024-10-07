import React, { useState, useEffect, useRef } from 'react';
import topDeals from '../constants/topDeals.json';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TopDeals = () => {
    const [deals, setDeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const fetchDeals = () => {
            setLoading(true);
            setDeals(topDeals.deals);
            setLoading(false);
        };

        fetchDeals();
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -200 : 200;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4 relative">
            <h1 className="text-3xl font-bold text-center mb-8">Top Deals</h1>
            <div className="relative">
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 rounded-full p-2 shadow-md z-10"
                >
                    <ChevronLeft size={24} color="white" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 rounded-full p-2 shadow-md z-10"
                >
                    <ChevronRight size={24} color="white" />
                </button>
                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto no-scrollbar p-4 w-full scroll-smooth"
                >
                    {deals.map((deal, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-4 w-56 sm:w-64 flex-shrink-0 flex flex-col items-center"
                        >
                            <h2 className="font-bold text-center mb-2 whitespace-normal break-words">{deal.deal_type}</h2>
                            <img
                                src={deal.deal_photo}
                                alt={deal.product_title}
                                className="w-full h-32 object-contain rounded-md mb-4"
                            />
                            <h2 className="text-lg font-semibold mb-2 text-center whitespace-normal break-words">
                                {deal.deal_title}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopDeals;