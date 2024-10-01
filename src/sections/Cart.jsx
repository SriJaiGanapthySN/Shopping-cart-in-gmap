import { useContext } from 'react';
import { ShopContext } from './ShopContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart } = useContext(ShopContext);
    const navigate = useNavigate();

    const handleViewProduct = (product) => {
        console.log(product);
        navigate(`/product/${product.asin}`, { state: { product } });
    };


    return (
        <div className="p-6">
            {cartItems.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                    {cartItems.map((item) => (
                        <div key={item.asin} className="border p-4 rounded-lg shadow-md flex">
                            <img
                                src={item.product_photo}
                                alt={item.product_title}
                                className="w-20 h-20 object-contain rounded-md"
                            />
                            <div className="ml-4">
                                <p className="text-lg font-semibold text-gray-700 hover:text-blue-700 hover:cursor-pointer"
                                    onClick={() => handleViewProduct(item)}>{item.product_title}</p>
                                <p className="text-blue-500 font-medium text-md">{item.product_price}</p>
                                <p>Count: {item.count}</p>
                                <button
                                    onClick={() => removeFromCart(item.asin)}
                                    className="mt-2 bg-red-600 text-white p-2 rounded-lg "
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className='w-screen text-center'>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
