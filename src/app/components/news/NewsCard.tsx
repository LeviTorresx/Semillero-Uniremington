// src/app/news/components/NewsCard.tsx
import { News } from "@/app/types/New";
import Link from "next/link";
import Image from "next/image";

interface Props {
  news: News;
}

export default function NewsCard({ news }: Props) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      <Image
        src={news.imageUrl}
        alt={news.title}
        className="rounded-lg h-48 w-full object-cover"
        width={400}
        height={200}
      />
      <div className="mt-4 flex-1">
        <span className="text-sm font-semibold text-blue-600">
          {news.category}
        </span>
        <h3 className="text-lg font-bold mt-1">{news.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{news.excerpt}</p>
      </div>
      <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
        <span>{news.date}</span>
        <Link
          href={`/news/${news.slug}`}
          className="text-blue-600 font-semibold hover:underline"
        >
          Leer más →
        </Link>
      </div>
    </div>
  );
}
