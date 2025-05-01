'use client';
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function Page() {
  const { orders } = useContext(CartContext);

  return (
    <div className="p-4 sm:p-6 md:p-10 font-thin text-lg">
      <h1 className="capitalize text-2xl font-semibold mb-6 ">My Orders</h1>

      {orders.length === 0 ? (
        <div className="flex justify-center items-center text-center capitalize font-semibold mt-10">
          You haven't placed any orders yet...
        </div>
      ) : (
        orders.map((order, idx) => (
          <div key={order.id || idx} className="my-4 py-4 px-4 border-t border-gray-400">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-sm capitalize">
              
          
              <div className="flex items-start gap-4 w-full md:w-1/2">
                <div className="text-red-500 bg-red-100 p-2 rounded-full">
                  <i className="fa-solid fa-gift"></i>
                </div>
                <div className="text-black flex flex-col">
                  <p className="font-medium text-wrap">{order.items[0]?.title}</p>
                  <p className="mt-1">Items: {order.items[0]?.quantity}</p>
                </div>
              </div>

       
              <div className="text-sm text-gray-700 font-semibold">
                ${parseFloat(order.items[0]?.price).toFixed(2)}
              </div>

            
              <div className="text-sm text-gray-600 flex flex-col gap-1">
                <p>Method: {order.method}</p>
                <p>Date: {order.date}</p>
                <p>Payment: {order.payment}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Page;
