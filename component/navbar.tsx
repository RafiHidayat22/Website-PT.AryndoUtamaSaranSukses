'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  if (isAdminRoute) return null;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Training", path: "/Training" },
    { name: "Supply Chain", path: "/Supply" },
    { name: "Drilling", path: "/drilling" },
    { name: "Medical", path: "/medical" },
    { name: "Article", path: "/Articles" },
    { name: "Contact", path: "/Contact" },
    
  ];

  return (
    <nav className="bg-[#1D0464] px-6 py-4 text-white sticky top-0 z-[99] border-b border-black/10">
      {/* Bar Atas: Logo dan Toggle */}
      <div className="w-full flex items-center justify-between">
        {/* Logo dan Nama Perusahaan */}
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Logo Aryndo"
            width={80}
            height={50}
            className="object-contain"
          />
          <div className="leading-tight">
            <h1 className="font-bold text-xs sm:text-sm md:text-base lg:text-lg">
              PT. ARYNDO UTAMA SARANA SUKSES
            </h1>
            <h3 className="text-[10px] sm:text-xs md:text-sm">
              OIL & GAS SERVICES
            </h3>
          </div>
        </div>

        {/* Tombol Hamburger (hanya tampil di mobile) */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigasi Desktop (selalu di kanan atas di layar besar) */}
        <ul className="hidden sm:flex items-center gap-6 text-sm md:text-base">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="hover:text-[#EE4312] transition duration-200 hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Navigasi Mobile Dropdown */}
      {isOpen && (
        <ul className="sm:hidden flex flex-col items-center gap-4 py-4 w-full bg-[#1D0464] shadow-md z-50 mt-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="text-white hover:text-[#EE4312] transition duration-200 hover:underline"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
