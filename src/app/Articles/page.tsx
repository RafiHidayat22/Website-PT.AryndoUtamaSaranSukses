import { getArticles } from '../../../lib/articles';
import ArticleCard from '../../../component/ArticleCard';

export default async function Page() {
  const articles = await getArticles();

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            slug={article.slug}
            title={article.title}
            image_url={article.image_url}
            updated_at={article.updated_at}
            summary={article.summary} date={''} content={''}          />
        ))}
      </div>
    </main>
  );
}
