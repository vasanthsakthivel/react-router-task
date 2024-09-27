import React, { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  // Add item to the cart
  const addToCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      updatedItems[productId] = (updatedItems[productId] || 0) + 1;
      return updatedItems;
    });
  };

  // Remove item from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[productId] > 0) {
        updatedItems[productId] -= 1;
        if (updatedItems[productId] === 0) {
          delete updatedItems[productId];
        }
      }
      return updatedItems;
    });
  };

  // Calculate total quantity of items in the cart
  const totalQuantity = Object.values(cartItems).reduce((total, qty) => total + qty, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
