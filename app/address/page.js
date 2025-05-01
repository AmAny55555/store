'use client';
import React, { useState } from 'react';
import Image from 'next/image';

function Page() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    pinCode: '',
    address: '',
    city: '',
    state: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='px-4 sm:px-8 py-10'>
      <h1 className='capitalize text-2xl font-medium mb-5'>
        Add shipping <span className='text-orange-600 font-bold'>Address</span>
      </h1>

      <div className='flex flex-col lg:flex-row gap-10'>
        {/* Form Section */}
        <div className='w-full lg:w-1/2'>
          <form className='flex flex-col space-y-4' onSubmit={submit}>
            <input
              type='text'
              placeholder='Full name'
              name='fullName'
              className='outline-0 border border-gray-500 p-2 rounded-md w-full'
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <input
              type='text'
              placeholder='Phone number'
              name='phoneNumber'
              className='outline-0 border border-gray-500 p-2 rounded-md w-full'
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <input
              type='text'
              placeholder='Pin code'
              name='pinCode'
              className='outline-0 border border-gray-500 p-2 rounded-md w-full'
              value={formData.pinCode}
              onChange={handleInputChange}
            />
            <input
              type='text'
              placeholder='Address (area and street)'
              name='address'
              className='outline-0 border border-gray-500 p-2 rounded-md w-full'
              value={formData.address}
              onChange={handleInputChange}
            />

            <div className='flex flex-col sm:flex-row gap-4'>
              <input
                type='text'
                placeholder='City/District/Town'
                name='city'
                className='outline-0 border border-gray-500 p-2 rounded-md w-full'
                value={formData.city}
                onChange={handleInputChange}
              />
              <input
                type='text'
                placeholder='State'
                name='state'
                className='outline-0 border border-gray-500 p-2 rounded-md w-full'
                value={formData.state}
                onChange={handleInputChange}
              />
            </div>

            <button className='bg-orange-600 uppercase text-white p-2 rounded-md hover:bg-orange-700 w-full sm:w-1/2'>
              Save Address
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className='w-full lg:w-1/2 flex justify-center items-center'>
          <div className='w-full max-w-md'>
            <Image
              src="/i.jpg"
              width={500}
              height={300}
              alt='address'
              className='w-full h-auto object-contain rounded-md'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
