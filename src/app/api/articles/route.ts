import { supabase } from '../../../../lib/supabaseClient';
import { NextResponse } from 'next/server';



// GET: ambil semua artikel
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: Request) {

  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
