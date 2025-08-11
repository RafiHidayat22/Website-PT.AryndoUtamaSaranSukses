'use client';

import React, { useState } from 'react';
import Image from 'next/image';


interface NavbarProps {
  username: string;
  height: number;
}

const NavbarAdmin: React.FC<NavbarProps> = ({ username, height }) => {
  const [isOpen, setIsOpen] = useState(false);




  return (
    <nav
      className="bg-[#1D0464] px-4 sm:px-6 py-4 text-white sticky top-0 z-[40] border-b border-black/10"
      style={{ height: `${height}px` }}
    >
      <div className="w-full flex items-center justify-between h-full flex-nowrap">
        {/* Logo & Title */}
        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Logo Aryndo"
            width={70}
            height={40}
            className="object-contain"
          />
          <div className="leading-tight">
            <h1 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">
              PT. ARYNDO UTAMA SARANA SUKSES
            </h1>
            <h3 className="text-[10px] sm:text-xs md:text-sm">
              DRILLING & ENERGY SERVICES
            </h3>
          </div>
        </div>

        {/* Hamburger button: tampil hanya kalau isOpen = false dan layar kecil */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}

        {/* Menu navigasi */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex items-center gap-3 sm:gap-4 mt-3 sm:mt-0 flex-grow-0`}
        >
          <span className="hidden sm:block whitespace-nowrap">Hello, {username}</span>

          <a
            href="/admin/message"
            className="block sm:inline-block mt-2 sm:mt-0 px-3 py-1 rounded bg-[#EE4312] hover:bg-[#c6360f] transition-colors text-sm font-semibold"
          >
            Messages
          </a>

          <a
            href="/admin/content-management"
            className="block sm:inline-block mt-2 sm:mt-0 ml-0 sm:ml-4 px-3 py-1 rounded bg-[#EE4312] hover:bg-[#c6360f] transition-colors text-sm font-semibold"
          >
            Content Management
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
