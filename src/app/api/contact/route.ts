// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabaseClient';


// POST - submit contact
export async function POST(request: Request) {

  const { fullName, company, email, subject, message } = await request.json();

  // Cek apakah email sudah submit dalam 3 jam terakhir
  const { data: existing, error: checkError } = await supabase
    .from('contacts')
    .select('id, created_at')
    .eq('email', email)
    .gte('created_at', new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString());

  if (checkError) return NextResponse.json({ error: checkError.message }, { status: 500 });

  if (existing && existing.length > 0) {
    return NextResponse.json(
      { error: 'You already sent a message within the last 3 hours. Please try again later.' },
      { status: 429 }
    );
  }

  const { data, error } = await supabase
    .from('contacts')
    .insert([{ fullName, company, email, subject, message }]);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ message: 'Data saved successfully', data }, { status: 200 });
}
