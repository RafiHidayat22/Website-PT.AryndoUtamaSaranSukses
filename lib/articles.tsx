import { supabase } from './supabaseClient';

export interface Article {
  slug: string;
  title: string;
  image_url: string;
  date: string;
  summary: string;
  updated_at: string;
  content?: string;
}

export async function getArticles(): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*');

  if (error) {
    console.error('Error fetching articles:', error);
    return [];
  }

  return data || [];
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(`Error fetching article slug=${slug}:`, error);
    return null;
  }

  return data;
}
