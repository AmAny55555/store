'use client';
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  // ✅ تحميل البيانات من localStorage مع التأمين
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart');
      try {
        const parsedCart = JSON.parse(storedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        } else {
          setCart([]);
        }
      } catch (error) {
        setCart([]);
      }

      const storedOrders = localStorage.getItem('orders');
      try {
        const parsedOrders = JSON.parse(storedOrders);
        if (Array.isArray(parsedOrders)) {
          setOrders(parsedOrders);
        } else {
          setOrders([]);
        }
      } catch (error) {
        setOrders([]);
      }
    }
  }, []);

  // ✅ حفظ cart عند التحديث
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // ✅ حفظ orders عند التحديث
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  // ✅ تأكيد الطلب
  const placeOrder = () => {
    if (cart.length === 0) return;

    const order = {
      id: Date.now(),
      items: [...cart],
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      date: new Date().toISOString(),
      method: 'cod',
      payment: 'pending',
    };

    setOrders((prevOrders) => [...prevOrders, order]);
    setCart([]);
    localStorage.removeItem('cart');
  };

  // ✅ إضافة منتج للسلة
  const addToCart = (product) => {
    setCart((prevCart) => {
      const item = prevCart.find((item) => item.id === product.id);
      if (item) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ حذف منتج من السلة
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // ✅ تحديث السلة بالكامل
  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCart,
        orders,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
