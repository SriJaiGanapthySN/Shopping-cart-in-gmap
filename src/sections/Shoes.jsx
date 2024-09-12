import { useState, useEffect, useContext } from "react";
import shoes from "../constants/shoes.json";
import { useNavigate } from "react-router-dom";

const Shoes = () => {
  const [shoeslist, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDeals = () => {
      setLoading(true);
      setShoes(shoes.data);
      setLoading(false);
    };

    fetchDeals();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading...
      </div>
    );
  }

  const handleSearch = () => {
    navigate(`/searchresults?q=${encodeURIComponent("shoes")}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Shoes</h1>

      <div className="grid grid-cols-2 gap-8 pb-4 justify-center place-items-center cursor-pointer">
        {shoeslist.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 w-full flex-shrink-0"
            onClick={handleSearch}
          >
            <img
              src={category.product_photo}
              alt={category.product_title}
              className="w-full h-48 object-contain rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold mb-2 text-center">
              {category.product_title}
            </h2>
            <p className="text-yellow-500 font-medium mb-2 text-center">
              Rating: {category.product_star_rating}⭐
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoes;
