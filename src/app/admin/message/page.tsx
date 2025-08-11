'use client';

import React, { useEffect, useState } from 'react';
import NavbarAdmin from '../../../../component/NavbarAdmin';
import { supabase } from '../../../../lib/supabaseClient';





interface Message {
  id: number;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

const Page = () => {
  const [username, setUsername] = useState('');
  const navbarHeight = 72;

  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user?.email) setUsername(data.user.email);
      else setUsername('Guest');
    });

    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact');
      if (!res.ok) throw new Error('Failed to fetch messages');
      const data = await res.json();
      setMessages(data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id: number) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const res = await fetch(`/api/contact?id=${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const err = await res.json();
        alert('Failed to delete message: ' + (err.error ?? 'Unknown error'));
        return;
      }

      alert('Message deleted successfully!');
      await fetchMessages();
    } catch (error) {
      alert('Error deleting message');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <NavbarAdmin username={username} height={navbarHeight} />

      <div className="flex flex-col sm:flex-row min-h-[100vh]">
        <main className="flex-1 p-4 sm:p-6 text-black space-y-6">
          <h1 className="text-2xl font-bold mb-4">Messages</h1>

          {loading && <p>Loading messages...</p>}
          {error && <p className="text-red-600">{error}</p>}

          {!loading && !error && messages.length === 0 && <p>No messages found.</p>}

          {!loading && !error && messages.length > 0 && (
            <table className="min-w-full bg-white rounded shadow overflow-hidden">
              <thead className="bg-gray-200 text-left text-black">
                <tr>
                  <th className="py-2 px-4 border-b">Full Name</th>
                  <th className="py-2 px-4 border-b">Email</th>
                  <th className="py-2 px-4 border-b">Subject</th>
                  <th className="py-2 px-4 border-b">Message</th>
                  <th className="py-2 px-4 border-b">Received At</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg) => (
                  <tr key={msg.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b max-w-xs truncate">{msg.fullName}</td>
                    <td className="py-2 px-4 border-b max-w-xs truncate">{msg.email}</td>
                    <td className="py-2 px-4 border-b max-w-xs truncate">{msg.subject}</td>
                    <td className="py-2 px-4 border-b max-w-xs truncate">{msg.message}</td>
                    <td className="py-2 px-4 border-b">{new Date(msg.created_at).toLocaleString()}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </main>
      </div>
    </div>
  );
};

export default Page;
