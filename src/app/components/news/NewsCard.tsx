"use client";

import { News } from "@/app/types/New";
import Link from "next/link";
import Image from "next/image";
import { FaUserGroup } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

interface Props {
  news: News;
}

export default function NewsCard({ news }: Props) {
  // Accedemos a members desde Redux
  const members = useSelector((state: RootState) => state.members.users);

  // Buscar el autor por ID
  const author = members.find((m) => m.userId === news.authorId);

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      {/* Imagen */}
      <Image
        src={`http:localhost:8081${news.imageUrl}`}
        alt={news.tittle}
        className="rounded-lg h-48 w-full object-cover"
        width={400}
        height={200}
      />

      {/* Contenido */}
      <div className="mt-4 flex-1">
        <div className="flex items-center text-sm text-gray-500 mb-2 gap-5">
          <span className="text-sm font-semibold text-blue-600">
            {news.category}
          </span>
          <span>
            <FaUserGroup className="inline-block mr-1 text-gray-500" />
            {author ? author.name : "Autor desconocido"}
          </span>
        </div>

        <h3 className="text-lg font-bold mt-1">{news.tittle}</h3>
        <p className="text-gray-600 text-sm mt-2">{news.excerpt}</p>
      </div>

      {/* Footer */}
      <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
        <span>
          {new Date(news.date).toLocaleDateString("es-CO", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
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