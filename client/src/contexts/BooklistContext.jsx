import React, { createContext, useContext, useState } from "react";

const BooklistContext = createContext();

export const useBooklist = () => useContext(BooklistContext);

export const BooklistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToWishlist = (book) => {
    if (!wishlist.find((b) => b.title === book.title)) {
      setWishlist([...wishlist, book]);
    }
  };

  const removeFromWishlist = (title) => {
    setWishlist((prev) => prev.filter((book) => book.title !== title));
  };

  const addToOrders = (book) => {
    setOrders((prev) => [...prev, book]);
  };

  const removeOrder = (title) => {
    setOrders((prev) => prev.filter((book) => book.title !== title));
  };

  return (
    <BooklistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        orders,
        addToOrders,
        removeOrder,
      }}
    >
      {children}
    </BooklistContext.Provider>
  );
};
