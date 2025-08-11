export interface Article {
  slug: string;
  title: string;
  image_url: string;
  date: string;
  summary: string;
  updated_at: string;
  content?: string;
}

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

export async function getArticles(): Promise<Article[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/articles`);
    if (!res.ok) throw new Error('Failed to fetch articles');
    return await res.json();
  } catch (err) {
    console.error('Error fetching articles:', err);
    return []; // fallback ke array kosong supaya build aman
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const res = await fetch(`${BASE_URL}/api/articles/${slug}`);
    if (!res.ok) throw new Error('Failed to fetch article');
    return await res.json();
  } catch (err) {
    console.error(`Error fetching article slug=${slug}:`, err);
    return null; // fallback ke null supaya build aman
  }
}
