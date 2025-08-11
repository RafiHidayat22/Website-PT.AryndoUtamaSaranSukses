// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabaseClient';

export async function POST(request: Request) {
  const { fullName, company, email, subject, message } = await request.json();

  // Cek apakah email sudah pernah submit dalam 3 jam terakhir
  const { data: existing, error: checkError } = await supabase
    .from('contacts')
    .select('id, created_at')
    .eq('email', email)
    .gte('created_at', new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString()); // 3 jam ke belakang

  if (checkError) {
    return NextResponse.json({ error: checkError.message }, { status: 500 });
  }

  if (existing && existing.length > 0) {
    return NextResponse.json(
      { error: 'This email has already sent a message within the last 3 hours. Please try again later.' },
      { status: 429 }
    );
  }

  // Simpan data baru
  const { data, error } = await supabase
    .from('contacts')
    .insert([{ fullName, company, email, subject, message }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Data saved successfully', data }, { status: 200 });
}

// GET method - ambil semua data contacts
export async function GET() {
  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}

// DELETE method - hapus data berdasarkan id yang dikirim di query param
export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
  }

  const { error } = await supabase
    .from('contacts')
    .delete()
    .eq('id', Number(id));

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Data deleted successfully' }, { status: 200 });
}
