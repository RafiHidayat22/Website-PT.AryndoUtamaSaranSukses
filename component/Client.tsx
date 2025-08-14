// components/ClientCarousel.jsx
'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const clientLogos = [
  '/1.jpeg',
  '/2.png',
  '/3.jpeg',
  '/4.png',
  '/5.jpeg',
  '/6.png',
  '/7.jpeg',
  '/8.png',
  '/9.jpeg',
  '/10.png',
  '/11.jpeg',
  '/12.png',
  '/13.jpeg',
  '/14.png',
  '/15.jpeg',
  '/16.png',
  '/17.jpeg',
  '/18.png',
  '/19.jpeg',
  '/21.jpeg',
  '/22.png',
  '/23.jpeg',
  '/24.png',
  '/25.jpeg',
  '/27.jpeg',
  '/28.png',
  '/29.jpeg',
  '/30.png',
  '/31.jpeg',
  '/32.png',
  '/33.jpeg',
  '/34.png',
  '/35.jpeg',
  '/36.png',
  '/37.jpeg',
  '/38.png',
  '/39.jpeg',
  '/40.png',
  '/41.jpeg',
  '/42.jpeg',
  '/43.jpeg',
  '/44.jpeg',
  '/45.jpeg',
  '/46.jpeg',
  '/47.jpeg',
  '/48.jpeg',
  '/49.jpeg',
  '/50.jpeg',
  '/51.png',
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
              <div className="flex justify-center items-center w-[150px] h-[100px] bg-white rounded-md overflow-hidden">
                <Image
                  src={logo}
                  alt={`Client ${index}`}
                  width={110}
                  height={75}
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
