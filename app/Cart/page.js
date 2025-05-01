'use client';
import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { useRouter } from 'next/navigation';

function Page() {
  const { cart, removeFromCart, updateCart, placeOrder } = useContext(CartContext);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const router = useRouter();

  const handleAddressChange = (e) => {
    const selected = e.target.value;
    setSelectedAddress(selected);
    if (selected === "go") {
      router.push('/address');
    }
  };

  const plceOrder = () => {
    router.push('/place');
    setTimeout(() => {
      placeOrder();
    }, 100); // ممكن تخليها أقل أو أكثر حسب السرعة
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const itemPrice = parseFloat(item.price) || 0;
      const itemQuantity = item.quantity || 1;
      return total + (itemPrice * itemQuantity);
    }, 0);
  };

  const tax = calculateSubtotal() * 0.02;
  const total = calculateSubtotal() + tax;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) return;
    const updated = cart.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    updateCart(updated);
  };

  return (
    <div className='py-10'>
      <div className='sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-y-7 lg:flex lg:flex-row lg:gap-x-30 lg:items-start w-full'>
        <div className='sm:w-full lg:w-1/2'>
          <div className='flex justify-between'>
            <h1 className='text-2xl capitalize px-2'>
              your <span className='capitalize text-orange-700'>Cart</span>
            </h1>
            <span className='px-2'>{cart.length} items</span>
          </div>
          <div className='w-full bg-gray-500 h-[1px]'></div>

          <div className='product-cart'>
            {isPlacingOrder ? (
              <p className="text-xl px-2 mt-10">Placing your order...</p>
            ) : cart.length === 0 ? (
              <h1 className='capitalize text-2xl font-semibold mt-10 px-2'>
                your cart is empty....
              </h1>
            ) : (
              <table className="w-full text-sm text-left">
                <thead className="border-b border-gray-400">
                  <tr>
                    <th className="p-2 ">Product Detail</th>
                    <th className="p-2 whitespace-nowrap">Price</th>
                    <th className="p-2 whitespace-nowrap">Quantity</th>
                    <th className="p-2 whitespace-nowrap">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={item.id || index} className="border-b border-gray-200">
                      <td className="py-4 px-2 flex items-center gap-4 min-w-[150px] sm:gap-4">
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                        <div className="text-sm">
                          <p className="capitalize">{item.title}</p>
                          <p
                            className="text-red-600 cursor-pointer text-xs mt-1"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-2">${parseFloat(item.price).toFixed(2)}</td>
                      <td className="py-4 px-2">
                        <div className="flex items-center border border-gray-400">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 text-lg">
                            <i className="fa-solid fa-caret-left"></i>
                          </button>
                          <span className="px-3">{item.quantity || 1}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 text-lg">
                            <i className="fa-solid fa-caret-right"></i>
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-2">${(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        <div className='sm:mt-10 lg:mt-0 sm:w-full lg:w-1/3 bg-gray-200 p-4 capitalize text-2xl border-b-gray-600 h-auto'>
          <h1>Order Summary</h1>
          <div className='w-full bg-gray-500 h-[1px]'></div>

          <div className='flex flex-col gap-y-1'>
            <div className='flex flex-col w-full overflow-hidden'>
              <label htmlFor="address" className="font-thin text-sm mt-2 uppercase">
                Select address
              </label>
              <select
                id="address"
                name="address"
                value={selectedAddress}
                onChange={handleAddressChange}
                className="bg-white outline-0 p-1 text-sm w-full max-w-full sm:text-base"
              >
                <option value="" disabled>Select Address</option>
                <option value="go">+Add new Address</option>
              </select>
            </div>

            <label htmlFor="promo" className='font-thin text-sm mt-2 uppercase'>
              Promo code
            </label>
            <input
              type="text"
              id="promo"
              name="promo"
              placeholder="Enter Your Promo code"
              className='bg-white outline-0 p-1 text-sm w-full'
            />
            <button className='bg-orange-500 capitalize text-white w-32 p-1 mt-3'>
              Apply
            </button>

            <div className='w-full bg-gray-500 h-[1px] mt-2'></div>

            <div className="detail text-sm">
              <div className="flex justify-between p-2">
                <p>Subtotal</p>
                <p>${calculateSubtotal().toFixed(2)}</p>
              </div>
              <div className="flex justify-between p-2">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between p-2">
                <p>Tax (2%)</p>
                <p>${tax.toFixed(2)}</p>
              </div>
              <div className="flex justify-between p-2 font-bold">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <button
                className='bg-orange-500 w-full text-white text-2xl capitalize cursor-pointer'
                onClick={plceOrder}
              >
                place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
