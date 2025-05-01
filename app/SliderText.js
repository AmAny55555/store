'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Slider from './Slider';

function SliderText() {
  return (
    <div className="w-full max-w-screen-xl mx-auto ">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <Slider
            text="hurry up only few lefts!"
            text2="next-level gaming starts here  -discover playstation 5 today!"
            btn="order now"
            src="/OIPPjpeg.jpeg"
            arrow="explore deal"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            text="exclisive deal 40% off"
            text2="power meets elegance -apple macbook pro is here for you !"
            btn="shop now"
            arrow="learn more"
            src="/lap.jpeg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slider
            text="limited time offer 30% off"
            text2="experience pure sound - your perfect headphones awaits!"
            btn="Buy now"
            arrow="find more"
            src="/o.jpeg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderText;
