import React, { createContext, useState } from "react";

export const ShopContext = createContext();


export const Provider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(false);

  const handleUser = () => {
    setUser(!user);
  }
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.asin === product.asin
      );
      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].count++;
        return updatedItems;
      } else {
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
    <ShopContext.Provider value={{ cartItems, addToCart, removeFromCart, user, handleUser }}>
      {children}
    </ShopContext.Provider>
  );
};
