"use client";

import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaArrowLeft, FaCalendarAlt, FaFolderOpen } from "react-icons/fa";
import Link from "next/link";
import { FaUserGroup } from "react-icons/fa6";

export default function NewsPages() {
  const params = useParams();
  const { slug } = params;

  const news = useSelector((state: RootState) =>
    state.news.find((n) => n.slug === slug)
  );

  if (!news) {
    return <div>Not Found</div>;
  }

  return (
    <div className="min-h-screen mx-auto max-w-5xl p-6">
      {/* Botón volver */}
      <Link
        href="/news"
        className="inline-flex items-center text-blue-600 hover:underline mb-4"
      >
        <FaArrowLeft className="mr-2" /> Volver a noticias
      </Link>

      {/* Título */}
      <h1 className="text-3xl font-bold mb-3">{news.title}</h1>

      {/* Fecha y categoría */}
      <div className="flex items-center text-gray-500 text-sm space-x-4 mb-6">
        <span className="flex items-center">
          <FaCalendarAlt className="mr-1" />{" "}
          {new Date(news.date).toLocaleDateString("es-CO", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <span className="flex items-center">
          <FaFolderOpen className="mr-1" /> {news.category}
        </span>
        <span className="flex items-center">
          <FaUserGroup className="mr-1" />{" "}
          {news.author.length > 0
            ? news.author.map((a) => a.name).join(", ")
            : "N/A"}
        </span>
      </div>

      {/* Imagen principal */}
      <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md mb-8">
        <Image
          src={news.imageUrl}
          alt={news.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Contenido */}
      <article
        className="prose max-w-none prose-lg prose-headings:mb-4 prose-p:mb-4 prose-img:rounded-lg"
        dangerouslySetInnerHTML={{ __html: news.excerpt }}
      />
      <article
        className="prose max-w-none prose-lg prose-headings:mb-4 prose-p:mb-4 prose-img:rounded-lg"
        dangerouslySetInnerHTML={{ __html: news.content }}
      />

      {/* Espaciado */}
      <div className="mt-12 border-t pt-6 text-sm text-gray-500">
        Publicado por el Semillero de Investigación
      </div>
    </div>
  );
}
