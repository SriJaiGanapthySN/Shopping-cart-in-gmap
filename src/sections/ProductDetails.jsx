import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { ShopContext } from "./ShopContext";
import added from "../assets/icons/checked.png";

const ProductDetails = () => {
  const { state } = useLocation();
  const { addToCart } = useContext(ShopContext);
  const [message, setMessage] = useState("");
  const product = state?.product;

  if (!product) {
    return <p>Product not found.</p>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    console.log("called");
    setMessage("Added to cart!");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="flex justify-center w-full p-2">
      <div className="p-6 bg-white shadow-lg rounded-lg  max-w-sm mx-auto mt-8 flex flex-col gap-5 lg:min-w-[900px] 2xl:min-w-[1440px] md:min-w-[600px]">
        <img
          src={product.product_photo}
          alt={product.product_title}
          className=" h-64 object-contain mx-auto mb-4 max-w-sm md:min-w-md shadow-sm"
        />
        <h2 className="text-2xl font-semibold mb-4 text-gray-600 ">
          {product.product_title}
        </h2>
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-bold text-blue-600">
            <del>{product.product_original_price}</del> {product.product_price}
          </p>
          <p className="text-xl text-yellow-500 font-bold">
            Rating: {product.product_star_rating}⭐
          </p>
        </div>
        <p className="text-gray-600 mb-4">
          Total Ratings: {product.product_num_ratings}
        </p>
        <p>{product.delivery}</p>
        <div className="flex flex-col items-center">
          <button
            className="text-lg font-semibold bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-slate-300 hover:text-blue-700 transition"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          {message && (
            <div className="flex items-center mt-4 bg-green-100 text-green-700 p-3 rounded-lg shadow-md">
              <img src={added} alt="Added" className="w-6 h-6 mr-2" />
              <p className="text-md font-medium">{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
