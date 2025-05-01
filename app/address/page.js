'use client';
import React, { useState } from 'react';
import Image from 'next/image';

function Page() {
  // حالة لتخزين بيانات العنوان
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    pinCode: '',
    address: '',
    city: '',
    state: ''
  });

  // دالة للتعامل مع التغييرات في المدخلات
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // دالة لمعالجة إرسال النموذج
  const submit = (e) => {
    e.preventDefault();
    // هنا يمكنك إرسال البيانات إلى الخادم أو حفظها في سياق أو ما شابه.
    console.log(formData); // يمكن هنا عرض البيانات في الـ console للتحقق منها
    // يمكنك هنا إضافة أي إجراء آخر مثل توجيه المستخدم لصفحة أخرى أو إعلامه بتأكيد الحفظ.
  };

  return (
    <div className='px-30 py-10'>
      <h1 className='capitalize text-2xl font-medium mb-5'>
        Add shipping <span className='text-orange-600 font-bold'>Address</span>
      </h1>

      <div className='flex justify-between '>
        <div className='w-1/2'>
          <form className='flex flex-col space-y-4' onSubmit={submit}>
            <input
              type='text'
              placeholder='Full name'
              name='fullName'
              className='outline-0 border border-gray-500 p-1 rounded-md w-1/2'
              value={formData.fullName} // ربط القيمة مع formData
              onChange={handleInputChange}
            />
            <input
              type='text'
              placeholder='Phone number'
              name='phoneNumber'
              className='outline-0 border border-gray-500 p-1 rounded-md w-1/2'
              value={formData.phoneNumber} // ربط القيمة مع formData
              onChange={handleInputChange}
            />
            <input
              type='text'
              placeholder='Pin code'
              name='pinCode'
              className='outline-0 border border-gray-500 p-1 rounded-md w-1/2'
              value={formData.pinCode} // ربط القيمة مع formData
              onChange={handleInputChange}
            />
            <input
              type='text'
              placeholder='Address (area and street)'
              name='address'
              className='outline-0 border border-gray-500 p-1 rounded-md w-1/2'
              value={formData.address} // ربط القيمة مع formData
              onChange={handleInputChange}
            />

            <div className='flex gap-4 w-1/2'>
              <input
                type='text'
                placeholder='City/District/Town'
                name='city'
                className='outline-0 border border-gray-500 p-1 rounded-md w-1/2'
                value={formData.city} // ربط القيمة مع formData
                onChange={handleInputChange}
              />
              <input
                type='text'
                placeholder='State'
                name='state'
                className='outline-0 border border-gray-500 p-1 rounded-md w-1/2'
                value={formData.state} // ربط القيمة مع formData
                onChange={handleInputChange}
              />
            </div>

            <button className='bg-orange-600 uppercase text-white p-1 rounded-md hover:bg-orange-700 w-1/2'>
              Save Address
            </button>
          </form>
        </div>

        <div className='w-1/2'>
          <div className='w-400 h-400'>
            <Image src="/i.jpg" width={200} height={500} alt='address' className='w-[500px] h-[300px] object-contain'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
