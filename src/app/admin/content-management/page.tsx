'use client';

import React, { useEffect, useState } from 'react';

import { FaPlus } from 'react-icons/fa';

import NavbarAdmin from '../../../../component/NavbarAdmin';


import { supabase } from '../../../../lib/supabaseClient'; // pastikan pathnya benar

interface Props {
  slug: string;
  title: string;
  image_url: string;
  date: string;
  summary: string;
  updated_at: number;
  content: string;
}

const Page = () => {
  
  const [username, setUsername] = useState(''); // dari email nanti
  const navbarHeight = 72; // px

  const [articles, setArticles] = useState<Props[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // State untuk edit modal
  const [editingArticle, setEditingArticle] = useState<Props | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editSummary, setEditSummary] = useState('');
  const [editContent, setEditContent] = useState('');
  const [editImageUrl, setEditImageUrl] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    // Ambil user email dari supabase auth
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user?.email) {
        setUsername(data.user.email);
      } else {
        setUsername('Guest');
      }
    });

    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/articles');
      if (!res.ok) throw new Error('Gagal mengambil data artikel');
      const data = await res.json();
      setArticles(data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || 'Error tidak diketahui');
    } finally {
      setLoading(false);
    }
  };

  const handleAddArticle = () => {
    window.location.href = '/admin/content-management/add-content';
  };

  // Mulai edit artikel
  const startEdit = (article: Props) => {
    setEditingArticle(article);
    setEditTitle(article.title);
    setEditSummary(article.summary);
    setEditContent(article.content);
    setEditImageUrl(article.image_url);
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditingArticle(null);
    setEditTitle('');
    setEditSummary('');
    setEditContent('');
    setEditImageUrl('');
  };

  // Submit update artikel
  const submitEdit = async () => {
    if (!editingArticle) return;

    setSaving(true);
    try {
      const res = await fetch('/api/articles', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: editingArticle.slug,
          title: editTitle,
          summary: editSummary,
          content: editContent,
          image_url: editImageUrl,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        alert('Gagal update artikel: ' + (err.error ?? 'Unknown error'));
        setSaving(false);
        return;
      }

      alert('Artikel berhasil diupdate!');
      cancelEdit();
      fetchArticles();
    } catch (error) {
      alert('Error saat update artikel');
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  // Delete artikel
const deleteArticle = async (slug: string) => {
  if (!confirm('Apakah kamu yakin ingin menghapus artikel ini?')) return;

  try {
    const res = await fetch(`/api/articles?slug=${encodeURIComponent(slug)}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      const err = await res.json();
      alert('Gagal hapus artikel: ' + (err.error ?? 'Unknown error'));
      return;
    }

    const result = await res.json();
    console.log('Hapus artikel response:', result);

    alert('Artikel berhasil dihapus!');
    await fetchArticles();
    console.log('Data artikel setelah hapus:', articles);

  } catch (error) {
    alert('Error saat menghapus artikel');
    console.error(error);
  }
};


  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      {/* Navbar */}
      <NavbarAdmin username={username} height={navbarHeight} />

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row min-h-[100vh]">

        <main className="flex-1 p-4 sm:p-6 text-black space-y-6">
          <h1 className="text-2xl font-bold mb-4">Artikel Terbaru</h1>
          <button
            onClick={handleAddArticle}
            className="inline-flex items-center gap-2 bg-[#EE4312] hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow transition"
          >
            <FaPlus /> Add Article
          </button>

          {loading && <p>Memuat artikel...</p>}
          {error && <p className="text-red-600">{error}</p>}

          {!loading && !error && articles.length === 0 && <p>Tidak ada artikel.</p>}

          {!loading && !error && articles.length > 0 && (
            <ul className="flex flex-wrap gap-4">
              {articles.map((article) => (
                <li
                  key={article.slug}
                  className="border p-4 rounded mb-4 bg-white shadow-sm"
                >
                  <h2 className="font-semibold text-lg">{article.title}</h2>
                  <p className="text-gray-600">{article.summary}</p>
                  {article.image_url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="max-w-full sm:max-w-xs mt-2 rounded"
                    />
                  )}
                  <div className="mt-2 space-x-2">
                    <button
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                      onClick={() => startEdit(article)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                      onClick={() => deleteArticle(article.slug)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </main>
      </div>

      {/* Modal Edit */}
      {editingArticle && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center p-4 z-50 text-black">
          <div className="bg-white p-6 rounded max-w-lg w-full space-y-4 relative">
            <h2 className="text-xl font-semibold mb-4">Edit Artikel</h2>
            <label className="block">
              Title
              <input
                type="text"
                className="border rounded w-full p-2 mt-1"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </label>
            <label className="block">
              Summary
              <input
                type="text"
                className="border rounded w-full p-2 mt-1"
                value={editSummary}
                onChange={(e) => setEditSummary(e.target.value)}
              />
            </label>
            <label className="block">
              Content
              <textarea
                rows={6}
                className="border rounded w-full p-2 mt-1 resize-none"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
            </label>
            <label className="block">
              Image URL
              <input
                type="text"
                className="border rounded w-full p-2 mt-1"
                value={editImageUrl}
                onChange={(e) => setEditImageUrl(e.target.value)}
              />
            </label>

            <div className="flex justify-end space-x-4 mt-4">
              <button
                className="bg-gray-400 text-black px-4 py-2 rounded hover:bg-gray-500"
                onClick={cancelEdit}
                disabled={saving}
              >
                Cancel
              </button>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={submitEdit}
                disabled={saving}
              >
                {saving ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
