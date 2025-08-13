"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

export default function CardSlider() {
  return (
    <div className="w-full px-4 py-8">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView="auto"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="pb-6"
      >
        {/* Kartu 1 */}
        <SwiperSlide style={{ width: "400px" }}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[500px]">
            <div className="relative">
              <Image
                src="/homeTrain.png"
                alt="Training"
                width={400}
                height={200}
                className="w-full h-56 object-cover"
              />
              <div className="absolute -bottom-5 left-6 w-10 h-10 bg-[#EE4312]" />
            </div>
            <div className="p-6 pt-10 flex flex-col flex-1">
              <h2 className="text-xl font-bold mb-2 text-black">
                Training & Manpower Services
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                Connects top engineering and technical talent to vital energy projects across Upstream, Midstream, LNG, and Downstream sectors—offshore and onshore. We deliver skilled professionals fast to power your success.
              </p>
              <div className="mt-auto">
                <button className="bg-[#EE4312] hover:bg-[#d6360c] text-white px-4 py-2 rounded-md text-sm transition">
                  <Link href='/Training'>Discover More</Link>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Kartu 2 */}
        <SwiperSlide style={{ width: "400px" }}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[500px]">
            <div className="relative">
              <Image
                src="/homeSupply.png"
                alt="Supply"
                width={400}
                height={200}
                className="w-full h-56 object-cover"
              />
              <div className="absolute -bottom-5 left-6 w-10 h-10 bg-[#EE4312]" />
            </div>
            <div className="p-6 pt-10 flex flex-col flex-1">
              <h2 className="text-xl font-bold mb-2 text-black">
                Supply & Rental Equipment
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                Delivers trusted Oil & Gas equipment and supply solutions to keep your operations running smoothly—minimizing downtime and maximizing productivity, wherever you work.
              </p>
              <div className="mt-auto">
                <button className="bg-[#EE4312] hover:bg-[#d6360c] text-white px-4 py-2 rounded-md text-sm transition">
                  <Link href='/Supply'>Discover More</Link>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>


        {/* Kartu 3 */}
        <SwiperSlide style={{ width: "400px" }}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[500px]">
            <div className="relative">
              <Image
                src="/medicalCheck.jpg"
                alt="Training"
                width={400}
                height={200}
                className="w-full h-56 object-cover"
              />
              <div className="absolute -bottom-5 left-6 w-10 h-10 bg-[#EE4312]" />
            </div>
            <div className="p-6 pt-10 flex flex-col flex-1">
              <h2 className="text-xl font-bold mb-2 text-black">
                Medical Check Up Services
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                Pre-employment medical check-ups evaluate prospective employees’ health to ensure they are fit to safely and efficiently perform their job duties. These assessments include standard tests such as blood, urine, and drug screening, with additional specialized tests for high-risk positions when necessary.
              </p>
              <div className="mt-auto">
                <button className="bg-[#EE4312] hover:bg-[#d6360c] text-white px-4 py-2 rounded-md text-sm transition">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
                {/* Kartu 4 */}
        <SwiperSlide style={{ width: "400px" }}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[500px]">
            <div className="relative">
              <Image
                src="/mudLogging.png"
                alt="Training"
                width={400}
                height={200}
                className="w-full h-56 object-cover"
              />
              <div className="absolute -bottom-5 left-6 w-10 h-10 bg-[#EE4312]" />
            </div>
            <div className="p-6 pt-10 flex flex-col flex-1">
              <h2 className="text-xl font-bold mb-2 text-black">
                Drilling & Mud Logging Services
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                Mud logging services include well location mapping, drilling geological design, logging data acquisition, transformation, interpretation and evaluation,
              </p>
              <div className="mt-auto">
                <button className="bg-[#EE4312] hover:bg-[#d6360c] text-white px-4 py-2 rounded-md text-sm transition">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
