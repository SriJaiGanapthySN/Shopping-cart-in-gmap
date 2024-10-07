import { useState, useEffect, useRef } from "react";
import smartphones from "../constants/smartphones.json";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Smartphones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDeals = () => {
      setLoading(true);
      setPhones(smartphones.data);
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
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading...
      </div>
    );
  }
  const handleSearch = () => {
    navigate(`/searchresults?q=${encodeURIComponent("phone")}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Smartphones</h1>
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
        <div className="flex gap-8 overflow-x-auto pb-4 cursor-pointer ">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto no-scrollbar p-4 w-full scroll-smooth"
          >
            {phones.map((category, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 w-80 flex-shrink-0 md:w-1/2 lg:w-1/3 text "
                onClick={handleSearch}
              >
                <img
                  src={category.product_photo}
                  alt={category.product_title}
                  className="w-full h-48 object-contain rounded-md mb-4"
                />
                <h2 className="text-lg font-semibold mb-2 text-center md:w-3/4 lg:w-1/2 mx-auto">
                  {category.product_title}
                </h2>
                <p className="text-yellow-500 font-medium mb-2 text-center">
                  Rating: {category.product_star_rating}⭐
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smartphones;
