
'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Portofolio = [
  '/porto1.png',
  '/porto2.png',
  '/porto3.png',
  '/porto4.png',
  '/porto5.png',
  '/porto6.png',
  '/porto7.png',
  '/porto8.png',
  '/porto9.png',
  '/porto10.png',
  '/porto11.png',
  '/porto12.png',
  '/porto15.png',
  '/porto20.png',
  '/porto23.png',
  '/porto24.png',
  '/porto25.png',
  '/porto28.png',
  '/porto30.png',
  '/porto31.png',
  '/porto32.png',
  '/porto33.png',
  '/porto34.png',
  '/porto35.png',
  '/porto36.png',
  '/porto37.png',
  '/porto38.jpg',
  '/porto39.jpg',
  '/porto40.jpg',
  '/porto41.jpg',
  '/porto42.jpg',
  '/porto43.jpg',
  '/porto44.jpg',
  '/porto45.jpg',
  '/porto46.jpg',
  '/porto47.jpg',

];


const PortoHomeAryndo = () => {
  return (
    <div className="w-full bg-transparent">
      <div className="max-w-sm mx-auto">
<Swiper
  slidesPerView={1}
  spaceBetween={0}
  loop={true}
  autoplay={{ delay: 1500, disableOnInteraction: false }}
  pagination={{ clickable: true, el: '.custom-pagination' }}
  navigation={{
    nextEl: '.custom-next',
    prevEl: '.custom-prev'
  }}
  modules={[Autoplay, Pagination, Navigation]}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    1024: { slidesPerView: 1 },
  }}
>
  {Portofolio.map((logo, index) => (
    <SwiperSlide key={index}>
      <div className="flex justify-center items-center aspect-square bg-transparent rounded-lg">
        <Image
          src={logo}
          alt={`Client ${index}`}
          width={700}
          height={700}
          className="w-full h-full object-cover rounded-lg"
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

export default PortoHomeAryndo;
