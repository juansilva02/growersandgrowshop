import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.name === product.name);
      if (existing) {
        return prev.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productName) => {
    setCart(prev => prev.filter(item => item.name !== productName));
  };

  const updateQuantity = (productName, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productName);
      return;
    }
    setCart(prev => prev.map(item =>
      item.name === productName ? { ...item, quantity } : item
    ));
  };

  const addToWishlist = (product) => {
    setWishlist(prev => {
      if (prev.find(item => item.name === product.name)) return prev;
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productName) => {
    setWishlist(prev => prev.filter(item => item.name !== productName));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[$.]/g, '').replace(',', '.'));
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      wishlist,
      addToCart,
      removeFromCart,
      updateQuantity,
      addToWishlist,
      removeFromWishlist,
      getTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};