import { useState, useEffect } from 'react';
import topDeals from '../constants/topDeals.json';


const TopDeals = () => {
    const [deals, setDeals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDeals = () => {
            setLoading(true);
            setDeals(topDeals.deals);
            setLoading(false);
        };

        fetchDeals();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-8">Top Deals</h1>
            <div className="flex gap-4 overflow-x-auto no-scrollbar p-4 w-full ">
                {deals.map((deal, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-4 min-w-[200px] max-w-[400px] flex-shrink-0 flex flex-col items-center md:w-3/4 lg:w-1/2"
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
    );
};

export default TopDeals;
