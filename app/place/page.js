'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();

  // التوجيه بعد 3 ثواني
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/my-order');
    }, 2000); // 3000 ميلي ثانية = 3 ثواني

    return () => clearTimeout(timer); // تنظيف التايمر
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        {/* دائرة تحميل */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* الخلفية الرصاصي */}
          <div className="absolute inset-0 rounded-full border-4 border-gray-300"></div>
          
          {/* الجزء الأخضر اللي بيدور */}
          <div className="absolute inset-0 rounded-full border-4 border-t-green-500 border-transparent animate-spin"></div>

          {/* علامة الصح */}
          <i className="fas fa-check text-green-500 text-4xl z-10"></i>
        </div>

        {/* النص */}
        <h1 className="mt-6 text-xl font-semibold text-gray-700 text-center capitalize">
          order placed successfully
        </h1>
      </div>
    </div>
  );
}

export default Page;
