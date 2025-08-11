'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    subject: '',
    message: '',
  });

  // state untuk popup message dan tipe (success/error)
  const [popup, setPopup] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setPopup({ message: 'Data has been saved successfully!', type: 'success' });
        setFormData({
          fullName: '',
          company: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        const err = await res.json();
        setPopup({ message: 'Failed to save data.: ' + err.error, type: 'error' });
      }
    } catch (error) {
      setPopup({ message: 'An error occurred while saving the data.', type: 'error' });
      console.error(error);
    }
  };

  // Hilangkan popup otomatis setelah 3 detik
  useEffect(() => {
    if (popup) {
      const timer = setTimeout(() => setPopup(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [popup]);

  const inputClass = "w-full border rounded px-3 py-2 border-black text-black placeholder-gray";

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-2 bg-white shadow-md rounded-md max-w-5xl mx-auto relative">
      {/* Popup notification */}
      {popup && (
        <div
          className={`absolute top-4 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded shadow-md text-white ${
            popup.type === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}
          role="alert"
        >
          {popup.message}
        </div>
      )}

      <div className="w-full lg:w-1/2 mb-6 lg:mb-0 items-center">
        <Image
          src="/bgContact2.png"
          alt="Customer Support"
          height={200}
          width={400}
          className="rounded-md"
        />
      </div>

      <div className="w-full lg:w-1/2 px-4">
        <h2 className="text-xl font-bold mb-6 text-center">We will be happy to help you</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-black">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-black">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-black">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                required
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black">Subject You Want to Discuss</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`${inputClass} resize-none`}
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="mb-2 md:mb-0 bg-[#EE4312] text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
