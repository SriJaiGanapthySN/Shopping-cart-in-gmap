import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.asin === product.asin
      );
      if (existingItemIndex > -1) {
        // Increase the count of the existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].count++;
        return updatedItems;
      } else {
        // Add new item with count 1
        console.log([...prevItems, { ...product, count: 1 }]);
        return [...prevItems, { ...product, count: 1 }];
      }
    });
  };

  const removeFromCart = (asin) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.asin === asin
      );
      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        if (updatedItems[existingItemIndex].count > 1) {
          updatedItems[existingItemIndex].count -= 1;
          return updatedItems;
        } else {
          return prevItems.filter((item) => item.asin !== asin);
        }
      }
      return prevItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
