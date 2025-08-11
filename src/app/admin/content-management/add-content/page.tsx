'use client';
import NextImage from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { supabase } from '../../../../../lib/supabaseClient';

import NavbarAdmin from '../../../../../component/NavbarAdmin';


const MAX_SIZE = 1 * 1024 * 1024; // 1MB

const compressImage = (file: File): Promise<File> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (event) => {
      if (!event.target) return reject('FileReader error');
      image.src = event.target.result as string;
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const maxWidth = 800;
        const scaleSize = maxWidth / image.width;

        canvas.width = maxWidth;
        canvas.height = image.height * scaleSize;

        const ctx = canvas.getContext('2d');
        if (!ctx) return reject('Canvas context error');

        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(
          (blob) => {
            if (!blob) return reject('Blob conversion failed');
            const compressedFile = new File([blob], file.name, {
              type: 'image/jpeg',
              lastModified: Date.now(),
            });
            resolve(compressedFile);
          },
          'image/jpeg',
          0.7
        );
      };

      image.onerror = () => reject('Image load error');
    };

    reader.onerror = () => reject('FileReader failed');
  });
};

const Page = () => {
  const [username, setUsername] = useState('');
  const navbarHeight = 72; // px

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  
    useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Error getting user:', error.message);
      } else if (data?.user?.email) {
        setUsername(data.user.email); // set username dari email user
      }
    };

    getUser();
  }, []);

  // Fungsi upload gambar ke Supabase Storage
  const uploadImage = async (file: File) => {
    try {
      setUploading(true);

      // Kompres gambar dulu
      const compressedFile = await compressImage(file);

      // Cek ukuran file setelah kompresi
      if (compressedFile.size > MAX_SIZE) {
        alert('Ukuran gambar setelah kompresi masih lebih dari 1MB. Silakan pilih gambar lain.');
        setUploading(false);
        return;
      }

      const fileExt = compressedFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = fileName;

      const { error } = await supabase.storage
        .from('articlesimagearyndo')
        .upload(filePath, compressedFile);

      if (error) {
        alert('Gagal upload gambar: ' + error.message);
        setUploading(false);
        return;
      }

      const { data } = supabase.storage.from('articlesimagearyndo').getPublicUrl(filePath);
      setImageUrl(data.publicUrl);
      setUploading(false);
    } catch (error) {
      alert('Terjadi kesalahan saat upload gambar.');
      setUploading(false);
      console.error(error);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];

    if (file.size > MAX_SIZE) {
      alert('Ukuran gambar maksimal 1MB. Silakan pilih gambar yang lebih kecil.');
      return;
    }

    setImageFile(file);
    await uploadImage(file);
  };

  const handlePost = async () => {
    setShowConfirm(false);

    const slug = title.toLowerCase().replace(/\s+/g, '-');

    try {
      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          slug,
          summary,
          content,
          image_url: imageUrl, // kirim URL gambar yang sudah diupload
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(`Gagal post artikel: ${errorData.error}`);
        return;
      }

      alert('Artikel berhasil dipost!');

      // Reset form dan gambar
      setTitle('');
      setSummary('');
      setContent('');
      setImageFile(null);
      setImageUrl('');
    } catch (error) {
      alert('Terjadi kesalahan saat posting artikel.');
      console.error(error);
    }
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <NavbarAdmin username={username} height={navbarHeight} />

      {/* Main Content */}
      <div className="flex min-h-screen ">
        <main className="flex-1 p-6 text-black">
          <button
            onClick={handleBack}
            className="mb-6 inline-flex items-center gap-2 text-[#1D0464] font-semibold hover:underline"
          >
            <FaArrowLeft /> Back
          </button>

          <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
            <input
              type="text"
              placeholder="Title Here......"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EE4312]"
            />
            <input
              type="text"
              placeholder="Summary Article.."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#EE4312]"
            />

            {/* Preview gambar jika ada */}
            {imageUrl && (
              <NextImage
                src={imageUrl}
                alt="Preview"
                className="mb-4 max-w-xs border rounded"
                width={300}
                height={200}
              />
            )}

            <div className="border border-gray-300 rounded-md p-4 relative">
              {/* Input file upload */}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                disabled={uploading}
                className="absolute top-2 left-2 bg-[#EE4312] text-white px-3 py-1 rounded text-sm font-semibold hover:bg-[#c9370a] transition"
              />
              <textarea
                placeholder="Description...."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={8}
                className="w-full resize-none border-none focus:outline-none pt-8"
              />
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowConfirm(true)}
                disabled={!title || !summary || !content || uploading}
                className={`bg-[#EE4312] text-white px-6 py-2 rounded font-semibold shadow ${
                  !title || !summary || !content || uploading
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-[#c9370a]'
                } transition`}
              >
                {uploading ? 'Uploading Image...' : 'Post'}
              </button>
            </div>
          </div>
        </main>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-white bg-opacity-10 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg space-y-4">
            <p className="text-lg font-semibold text-black">Are you sure you want to post this article?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleCancel}
                className="text-black px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handlePost}
                className="px-4 py-2 rounded bg-[#EE4312] text-white hover:bg-[#c9370a]"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
