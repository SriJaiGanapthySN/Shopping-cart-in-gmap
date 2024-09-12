import { useState, useEffect, useContext } from "react";
import fashion from "../constants/fashion.json";
import { useNavigate } from "react-router-dom";

const Fashion = () => {
  const [fashions, setFashion] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDeals = () => {
      setLoading(true);
      setFashion(fashion.data);
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
    navigate(`/searchresults?q=${encodeURIComponent("fashion")}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Fashion</h1>

      <div className="grid grid-cols-2 gap-8 pb-4 justify-center place-items-center cursor-pointer ">
        {fashions.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4  flex-shrink-0 w-full h-full "
            onClick={handleSearch}
          >
            <img
              src={category.product_photo}
              alt={category.product_title}
              className="w-full h-48 object-contain rounded-md mb-4"
            />
            <h2 className="max-sm:text-xs text-lg font-semibold mb-2 text-center">
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

export default Fashion;
