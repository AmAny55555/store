'use client';
import React from 'react';
import { useCart } from './Context/CartContext';

function CartPage() {
  const { cartItems } = useCart();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">My Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {cartItems.map((item, index) => (
            <div key={index} className="border rounded p-4 shadow-md">
              <img src={item.image} alt={item.title} className="h-40 object-contain mx-auto mb-3" />
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-gray-600">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartPage;
