'use client';
import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { useRouter } from 'next/navigation';
import Select from 'react-select';

function Page() {
  const { cart, removeFromCart, updateCart, placeOrder } = useContext(CartContext);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const router = useRouter();

  const handleAddressChange = (selected) => {
    setSelectedAddress(selected);
    if (selected?.value === 'go') {
      router.push('/address');
    }
  };

  const plceOrder = () => {
    router.push('/place');
    setTimeout(() => {
      placeOrder();
    }, 100);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const itemPrice = parseFloat(item.price) || 0;
      const itemQuantity = item.quantity || 1;
      return total + itemPrice * itemQuantity;
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

  const customStyles = {
    control: (base) => ({
      ...base,
      padding: '0.5rem',
      borderRadius: '0.375rem',
      border: '1px solid #D1D5DB',
      backgroundColor: '#E5E7EB',
      minHeight: '40px',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#D1D5DB',
      },
    }),
    valueContainer: (base) => ({
      ...base,
      padding: '0px 8px',
    }),
    input: (base) => ({
      ...base,
      margin: 0,
      padding: 0,
    }),
    placeholder: (base) => ({
      ...base,
      color: '#6B7280',
      fontSize: '0.875rem',
    }),
    singleValue: (base) => ({
      ...base,
      fontSize: '0.875rem',
      color: '#111827',
    }),
    dropdownIndicator: (base) => ({
      ...base,
      padding: 4,
      color: '#6B7280',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    menu: (base) => ({
      ...base,
      fontSize: '0.875rem',
      zIndex: 999,
    }),
  };

  const addressOptions = [
    { value: '', label: 'Select Address', isDisabled: true },
    { value: 'go', label: '+ Add new Address' },
  ];

  return (
    <div className='py-10 px-4 sm:px-6'>
      <div className='flex flex-col gap-y-7 lg:flex-row lg:gap-x-10 w-full'>
        
        {/* Cart Section */}
        <div className='w-full lg:w-2/3'>
          <div className='flex justify-between items-center mb-4'>
            <h1 className='text-2xl capitalize'>
              your <span className='text-orange-700'>Cart</span>
            </h1>
            <span>{cart.length} items</span>
          </div>
          <div className='w-full bg-gray-300 h-[1px] mb-4'></div>

          <div className='product-cart'>
            {isPlacingOrder ? (
              <p className="text-xl mt-10">Placing your order...</p>
            ) : cart.length === 0 ? (
              <h1 className='capitalize text-2xl font-semibold mt-10'>
                your cart is empty....
              </h1>
            ) : (
              <table className="w-full text-sm text-left">
                <thead className="border-b border-gray-400">
                  <tr>
                    <th className="p-2">Product</th>
                    <th className="p-2">Price</th>
                    <th className="p-2">Quantity</th>
                    <th className="p-2">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={item.id || index} className="border-b border-gray-200">
                      <td className="py-4 px-2 flex items-center gap-4">
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                        <div className="text-sm max-w-[140px] sm:max-w-full">
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

        {/* Summary Section */}
        <div className='w-full lg:w-1/3 bg-gray-200 p-5 rounded-md'>
          <h1 className="text-xl font-semibold mb-3">Order Summary</h1>
          <div className='w-full bg-gray-400 h-[1px] mb-3'></div>

          <div className='flex flex-col gap-2 text-sm'>

            {/* Address Selector */}
            <div className="flex flex-col w-full">
              <label className="font-medium text-sm mb-1">Select address</label>
              <Select
                options={addressOptions}
                value={selectedAddress}
                onChange={handleAddressChange}
                styles={customStyles}
                placeholder="Select Address"
                isSearchable={false}
              />
            </div>

            {/* Promo Code */}
            <div className="mt-4">
              <label htmlFor="promo" className="font-medium text-sm mb-1 block">
                Promo code
              </label>
              <input
                type="text"
                id="promo"
                name="promo"
                placeholder="Enter your promo code"
                className='w-full p-2 border border-gray-300 rounded-md bg-gray-200'
              />
              <button className='bg-orange-500 text-white w-32 p-1 mt-3 rounded-md'>
                Apply
              </button>
            </div>

            {/* Divider */}
            <div className='w-full bg-gray-400 h-[1px] my-3'></div>

            {/* Price Details */}
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>${calculateSubtotal().toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between">
                <p>Tax (2%)</p>
                <p>${tax.toFixed(2)}</p>
              </div>
              <div className="flex justify-between font-bold">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
            </div>

            <button
              className='bg-orange-500 w-full text-white text-lg mt-4 py-2 rounded-md'
              onClick={plceOrder}
            >
              Place Order
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Page;
