// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      persistSession: true, // supaya session tersimpan di cookie/localStorage
      // storage: undefined, // default (cookie), jangan diubah kalau mau middleware baca cookie
    },
  }
);
