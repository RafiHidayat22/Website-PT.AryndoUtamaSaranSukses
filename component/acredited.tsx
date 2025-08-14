
'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const acr = [
  '/acr1.png',
  '/acr2.png',
  '/acr3.png',
  '/acr4.png',
  '/acr5.png',
  '/acr6.png',
  '/acr7.png',
  '/acr8.png',
  '/acr9.png',
  '/acr10.png',
  '/acr11.png',
  '/acr12.png',
  '/acr13.png',
  '/acr14.png',
  '/acr15.png',
  '/acr16.png',
  '/acr17.png',
  '/acr18.png',
  '/acr19.png',
  '/acr20.png',
  '/acr21.png',
  '/acr22.png',
  '/acr23.png',
  '/acr24.png',
  '/acr25.png',
  '/acr26.png',
];


const AcrAryndo = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto">
<Swiper
  slidesPerView={6}
  spaceBetween={1}
  loop={true}
  autoplay={{ delay: 1500, disableOnInteraction: false }}
  pagination={{ clickable: true, el: '.custom-pagination' }}
  navigation={{
    nextEl: '.custom-next',
    prevEl: '.custom-prev'
  }}
  modules={[Autoplay, Pagination, Navigation]}
  breakpoints={{
    640: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 },
  }}
>
  {acr.map((logo, index) => (
    <SwiperSlide key={index}>
      <div className="flex justify-center items-center bg-white">
        <Image
          src={logo}
          alt={`Client ${index}`}
          width={100}
          height={70}
          className=" w-[100px] h-[70px] object-contain rounded-lg"
        />
      </div>
    </SwiperSlide>
  ))}


</Swiper>

        <div className="custom-pagination mt-1" />
      </div>
    </div>
  );
};

export default AcrAryndo;
