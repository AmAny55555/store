'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import BuyButton from '../BuyButton';
import Link from 'next/link';  

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const FetchingData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error('Product not found');
        }

        const data = await res.json();
        setProducts(data);
        setLoading(false);

      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);  
      }
    };

    FetchingData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;  // إضافة حالة التحميل
  }

  if (error) {
    return <p>Error: {error}</p>;  // إضافة حالة الخطأ
  }

  return (
    <div className='p-20 w-full'>
      <h1 className='mb-7 font-semibold'>Popular Products</h1>
      <div className='products grid grid-cols-1 md:grid-cols-3 gap-y-10 lg:grid-cols-4 w-full justify-items-center items-center'>
        {products.map((product) => {
          return (
            <Link href={`/product/${product.id}`} key={product.id} className='flex flex-col gap-1'>
              <div className='w-[170px] h-[140px] p-8 flex justify-center items-center bg-gray-100 img relative'>
                <Image
                  src={product.image}
                  alt='img'
                  width={50}
                  height={50}
                  className='w-[160px] h-[100px] object-contain'
                />
                <div className='absolute right-2 top-1 shadow shadow-black bg-white w-6 h-6 cursor-pointer rounded-full flex items-center justify-center'>
                  <i className="fa-regular fa-heart"></i>
                </div>
              </div>
              <div className='w-44 flex flex-col justify-start'>
                <h3 className='font-semibold line-clamp-1'>{product.title}</h3>
                <h3 className='line-clamp-1 text-gray-700 text-sm'>{product.description}</h3>
              </div>

              <div className="stars flex text-orange-800">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
              </div>

              <div className='flex items-center justify-between w-40 mt-1'>
                <h3 className='font-semibold'>${product.price}</h3>
                <div className='text-center'>
                  <BuyButton value="Buy Now" className=" " />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className='mt-10 w-full mx-auto flex justify-center'>
        <BuyButton value="See More" className="w-[120px] border-gray-300 border-t-[1px] border-b-[1px] p-2" />
      </div>
    </div>
  );
}

export default Product;
