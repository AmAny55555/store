'use client';
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
    return <p className="text-center py-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center py-10 text-red-600">Error: {error}</p>;
  }

  return (
    <div className="px-5 md:px-20 py-10 w-full">
      <h1 className="mb-7 font-semibold text-xl">Popular Products</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-5 justify-items-center w-full">
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="flex flex-col gap-2 w-full max-w-[200px]"
          >
            <div className="w-full h-[140px] p-4 flex justify-center items-center bg-gray-100 relative rounded-md">
              <Image
                src={product.image}
                alt="img"
                width={160}
                height={100}
                className="w-full h-[100px] object-contain"
              />
              <div className="absolute right-2 top-1 shadow bg-white w-6 h-6 cursor-pointer rounded-full flex items-center justify-center">
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>

            <div className="flex flex-col justify-start w-full">
              <h3 className="font-semibold text-sm line-clamp-1">{product.title}</h3>
              <h3 className="text-gray-700 text-xs line-clamp-1">{product.description}</h3>
            </div>

            <div className="stars flex text-orange-800 text-sm">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>

            <div className="flex items-center justify-between w-full mt-1">
              <h3 className="font-semibold text-sm">${product.price}</h3>
              <BuyButton value="Buy Now" />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 w-full mx-auto flex justify-center">
        <BuyButton value="See More" className="w-[120px] border-gray-300 border-t border-b p-2" />
      </div>
    </div>
  );
}

export default Product;

