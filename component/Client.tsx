// components/ClientCarousel.jsx
'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const clientLogos = [
  '/1.jpg',
  '/2.jpeg',
  '/3.jpg',
  '/4.jpg',
  '/5.png',
  '/6.jpg',
  '/7.jpg',
  '/8.jpg',
  '/9.gif',
  '/10.jpg',
  '/11.png',
  '/12.jpg',
  '/13.jpg',
  '/14.jpg',
  '/15.png',
  '/16.jpg',
  '/17.jpeg',
  '/18.png',
  '/19.png',
  '/20.jpg',
  '/21.jpg',
  '/22.jpg',
  '/23.jpg',
  '/24.jpg',
  '/25.png',
];

const ClientAryndo = () => {
  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Swiper
          slidesPerView={2}
          spaceBetween={10} // Jarak antar gambar 
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          pagination={{ 
            clickable: true,
            // Tambahkan className untuk styling pagination
            el: '.custom-pagination',
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-[100px]">
                <Image
                  src={logo}
                  alt={`Client ${index}`}
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom pagination container dengan margin atas untuk jarak dari gambar */}
        <div className="custom-pagination mt-1" />
      </div>
    </div>
  );
};

export default ClientAryndo;
