'use client'
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { FaFacebookF,FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  if (isAdminRoute) return null;
  return (
    <footer className="bg-[#1D0464] text-white px-4 sm:px-8 lg:px-16 py-10">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        
        {/* Kiri: Logo dan alamat */}
        <div className="flex flex-col gap-4 max-w-md">
          <Image
            src="/logo.png"
            alt="ArynDo Logo"
            width={100}
            height={60}
            className="rounded bg-white p-2"
          />

          <div className="text-sm leading-relaxed">
            <p className="font-semibold">PT. ARYNDO UTAMA SARANA SUKSES</p>
            <p>Jl. Mawar No.19, RT.03/RW.04, Mustikasari, Kec. Mustika Jaya, Kota Bekasi, Jawa Barat 17157</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com/company/aryndoutama" className="text-white hover:text-gray-300">
              <FaLinkedinIn size={18} />
            </a>
            <a href="https://www.facebook.com/Aryndoutama/" className="text-white hover:text-gray-300">
              <FaFacebookF size={18} />
            </a>
            <a href="https://www.instagram.com/ptaryndoutamasaranasukses/" className="text-white hover:text-gray-300">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Kanan: Form Get Update */}
        <div className="w-full max-w-sm">
          <h4 className="text-lg font-medium mb-4">Get Update</h4>
          <form className="flex items-center overflow-hidden rounded-md bg-white">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 w-full text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#EE4312] text-white px-4 py-2 hover:bg-orange-600 transition"
            >
              →
            </button>
          </form>
        </div>
      </div>

      {/* Garis & Copyright */}
      <div className="border-t border-white/20 mt-8 pt-4 text-sm text-center text-white/80">
        © 2025 Aryndo Utama. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
