'use client'
import React, { useState, useEffect, useContext } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { CartContext } from '@/app/Context/CartContext'; // تأكد من الاستيراد الصحيح

function ProductDetail() {
  const { user } = useUser(); // الحصول على حالة المستخدم
  const { addToCart } = useContext(CartContext); // استخدام useContext للوصول إلى دالة addToCart
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  // حالة المنتج وحالة التحميل
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  // جلب بيانات المنتج عند تغيير الـ id
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) {
          throw new Error('Something went wrong');
        }
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setErr(err.message); // تعيين الرسالة في حالة الخطأ
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // دالة التعامل مع شراء المنتج الآن
  const handleBuyNow = () => {
    if (!user) {
      alert('Please login to buy this product');
    } else {
      addToCart(product); // إضافة المنتج للسلة
      router.push('/Cart'); // التوجه إلى صفحة السلة
    }
  };

  // حالة عرض البيانات
  if (loading) {
    return <div>Loading...</div>;
  }

  if (err) {
    return <div>Error: {err}</div>;
  }

  return (
    <div className="p-10">
      {product && (
        <div className="sm:flex sm:flex-col sm:items-center sm:text-center sm:gap-5 md:grid md:grid-cols-2 md:justify-items-center pt-10 px-5">
          {/* الصورة */}
          <div className="w-full flex justify-center mb-5 md:mb-0">
            <img
              src={product.image}
              alt={product.title}
              width={200}
              height={300}
              className="object-contain"
            />
          </div>

          {/* التفاصيل */}
          <div className="w-full flex flex-col items-center text-center md:items-start md:text-left">
            <h1 className="font-semibold pb-2 capitalize sm:text-lg lg:text-xl">{product.title}</h1>

            <div className="stars flex text-orange-800 pb-2">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>

            <p className="text-sm pb-4 max-w-[500px]">{product.description}</p>

            <div className="text-2xl mb-5 font-semibold">${product.price}</div>

            <h2 className="capitalize">
              <span className="font-semibold pr-2">Category:</span>
              {product.category}
            </h2>

            <div className="flex gap-x-2 mt-10">
              <button
                className="bg-gray-200 w-[130px] rounded cursor-pointer"
                onClick={() => {
                  if (!user) {
                    alert('Please login to add to cart');
                  } else {
                    addToCart(product); // أضف المنتج للسلة
                    alert('Product added to cart');
                  }
                }}
              >
                Add to Cart
              </button>
              <div className="w-[130px]">
                <button
                  onClick={handleBuyNow}
                  className="bg-orange-500 text-white w-[130px] rounded cursor-pointer"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
