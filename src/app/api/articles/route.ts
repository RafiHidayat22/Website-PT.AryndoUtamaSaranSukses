import {supabase} from '../../../../lib/supabaseClient'
import { NextResponse } from 'next/server';
import supabaseAdmin from '../../../../lib/supabaseAdmin';
export async function GET() {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { title, slug, content, image_url, summary } = body;

  const { data, error } = await supabase
    .from('articles')
    .insert([{ title, slug, content, image_url, summary }]);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data ?? []);

}

export async function PUT(req: Request) {
  const body = await req.json();
  const { slug, title, content, image_url, summary } = body;

  if (!slug) {
    return NextResponse.json({ error: 'Slug harus disertakan untuk update' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('articles')
    .update({ title, content, image_url, summary })
    .eq('slug', slug);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data ?? []);
}

// Tambahan untuk delete
export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const slug = url.searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ error: 'Slug harus disertakan untuk delete' }, { status: 400 });
  }

  // Ambil artikel untuk dapatkan image_url pakai client biasa
  const { data: article, error: fetchError } = await supabase
    .from('articles')
    .select('image_url')
    .eq('slug', slug)
    .single();

  if (fetchError) {
    return NextResponse.json({ error: fetchError.message }, { status: 500 });
  }

  // Hapus gambar dari bucket jika ada, pakai supabaseAdmin (service role key)
  if (article?.image_url) {
    const bucketName = 'articlesimagearyndo';

    try {
      const imageUrl = article.image_url;
      const urlObj = new URL(imageUrl);

      const bucketPathPrefix = `/storage/v1/object/public/${bucketName}/`;
      if (urlObj.pathname.startsWith(bucketPathPrefix)) {
        const filePath = urlObj.pathname.replace(bucketPathPrefix, '');
        
        const { error: storageError } = await supabaseAdmin.storage
          .from(bucketName)
          .remove([filePath]);

        if (storageError) {
          console.error('Gagal hapus gambar:', storageError.message);
          return NextResponse.json({ error: `Gagal hapus gambar: ${storageError.message}` }, { status: 500 });
        } else {
          console.log('Berhasil hapus gambar:', filePath);
        }
      } else {
        console.warn('Format URL gambar tidak sesuai bucket');
      }
    } catch (err) {
      console.error('Error parsing image_url:', err);
    }
  }

  // Hapus artikel di database pakai client biasa (anon)
  const { data, error: deleteError } = await supabase
    .from('articles')
    .delete()
    .eq('slug', slug);

  if (deleteError) {
    return NextResponse.json({ error: deleteError.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Artikel dan gambar berhasil dihapus', data });
}