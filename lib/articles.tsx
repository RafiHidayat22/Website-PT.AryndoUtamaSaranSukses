import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

export interface Article {
  slug: string;
  title: string;
  image_url: string;
  date: string;
  summary: string;
  updated_at: Timestamp;
  content?: string;
}

// Bisa ambil base URL dari env variable supaya fleksibel
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

export async function getArticles(): Promise<Article[]> {
  const res = await fetch(`${BASE_URL}/api/articles`);
  if (!res.ok) throw new Error('Failed to fetch articles');
  return res.json();
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  const res = await fetch(`${BASE_URL}/api/articles/${slug}`);
  if (!res.ok) throw new Error('Failed to fetch article');
  return res.json();
}
