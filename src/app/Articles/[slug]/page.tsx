import { getArticleBySlug } from '../../../../lib/articles';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// Gunakan tipe khusus untuk params
interface ArticleDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) return notFound();

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-col-reverse gap-4">
        <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md order-1 md:order-2">
          <Image
            src={article.image_url}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="order-2 md:order-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{article.title}</h1>
          <p className="text-gray-500 text-sm mb-4">
            {new Date(article.updated_at).toLocaleDateString()}
          </p>
        </div>
      </div>

      <p className="text-base leading-relaxed whitespace-pre-line text-gray-800 mt-4">
        {article.content}
      </p>

      {article.content && (
        <div
          className="prose mt-6"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      )}
    </main>
  );
}
