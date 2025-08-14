// src/app/news/components/NewsCard.tsx
import { News } from "@/app/types/New";
import Link from "next/link";
import Image from "next/image";
import { FaUserGroup } from "react-icons/fa6";

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
        <div className="flex items-center text-sm text-gray-500 mb-2 gap-5">
          <span className="text-sm font-semibold text-blue-600">
            {news.category}
          </span>
          <span>
            <FaUserGroup className="inline-block mr-1 text-gray-500" />
            {news.author.length > 0
              ? news.author.map((a) => a.name).join(", ")
              : "Autor desconocido"}
          </span>
        </div>

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
