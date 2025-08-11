'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegCommentDots, FaWhatsapp, FaEnvelope, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function FloatingContactButton({ phone, email, }: { phone: string; email: string }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

    const [open, setOpen] = useState(false);

    const waMessage = encodeURIComponent(`Halo saya admin.`);

  if (isAdminRoute) return null;



  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end gap-2 z-50">
      <AnimatePresence>
        {open && (
          <>
            {/* WA Button */}
            <motion.a
              href={`https://wa.me/${phone}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.2 }}
              className="bg-[#25D366] text-white w-12 h-12 rounded-full flex justify-center items-center shadow-md"
            >
              <FaWhatsapp size={22} />
            </motion.a>

            {/* Email Button */}
            <motion.a
              href={`mailto:${email}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="bg-gray-900 text-white w-12 h-12 rounded-full flex justify-center items-center shadow-md"
            >
              <FaEnvelope size={20} />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Container tombol utama + bubble */}
      <div className="flex items-center gap-2">
        {/* Bubble "Contact Us" */}
        <div className="bg-[#EE4312] text-white px-3 py-1 rounded-full text-sm select-none whitespace-nowrap shadow-md">
          Contact Us
        </div>

        {/* FAB Main Button */}
        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={open ? 'Close contact menu' : 'Open contact menu'}
          className="bg-[#EE4312] text-white w-12 h-12 rounded-full flex justify-center items-center text-xl shadow-lg border-none cursor-pointer"
        >
          {open ? <FaTimes /> : <FaRegCommentDots />}
        </motion.button>
      </div>
    </div>
  );
}
