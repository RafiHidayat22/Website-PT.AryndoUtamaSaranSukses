import { redirect } from 'next/navigation';
import { supabase } from '../../../lib/supabaseClient';

export default async function AdminPage() {
  // Dapatkan user session
  const {
    data: { user },
  } = await supabase.auth.getUser();
  

  if (!user) {
    // Kalau belum login, redirect ke halaman login (misal '/auth')
    redirect('/auth');
  }

  // Kalau sudah login, render halaman admin
  return (
  redirect('/admin/content-management')
  );
}

