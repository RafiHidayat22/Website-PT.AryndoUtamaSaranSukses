'use client';

import Link from 'next/link';
import Image from 'next/image';

interface Props {
  slug: string;
  title: string;
  image_url: string;
  date: string;
  summary: string;
  updated_at: string;
  content: string;
}

const ArticleCard: React.FC<Props> = ({ slug, title, image_url, updated_at, summary }) => {
  return (
<div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full flex flex-col hover:shadow-lg transition-shadow duration-300">
  {/* Gambar */}
  <div className="relative h-48 w-full">
    <Image
      src={image_url || '/bgAbout.png'}
      alt={title}
      fill
      className="object-cover"
    />
  </div>

  {/* Konten */}
  <div className="p-4">
    <p className="text-xs text-blue-500 font-semibold uppercase mb-1">Breaking News</p>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="text-sm text-gray-500">{updated_at}</p>
    <p className="text-sm mt-1 text-black">{summary}</p>
    <div className="mt-4">
      <Link
        href={`/Articles/${slug}`}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm rounded transition-colors duration-300"
      >
        Read more
      </Link>
    </div>
  </div>
</div>

  );
};

export default ArticleCard;
