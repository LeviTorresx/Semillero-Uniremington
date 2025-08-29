"use client";

import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaEdit,
  FaFolderOpen,
} from "react-icons/fa";
import Link from "next/link";
import { FaUserGroup } from "react-icons/fa6";

export default function NewsPages() {
  const params = useParams();
  const { slug } = params;

  const news = useSelector((state: RootState) =>
    state.news.news.find((n) => n.slug === slug)
  );

  const userAuth = useSelector((state: RootState) => state.auth);
  const members = useSelector((state: RootState) => state.members);

  if (!news) {
    return <div>Not Found</div>;
  }

  // Buscar el autor de la noticia entre los miembros
  const author = members.find((m) => m.userId === news.authorId);

  const isMember =
    userAuth?.isAuthenticated && news.authorId === userAuth.user?.userId;

  return (
    <div className="min-h-screen mx-auto max-w-5xl p-6">
      {/* Botón volver */}
      <Link
        href="/news"
        className="inline-flex items-center text-blue-600 hover:underline mb-4"
      >
        <FaArrowLeft className="mr-2" /> Volver a noticias
      </Link>

      <div className="flex justify-between items-center mb-3">
        {/* Título */}
        <h1 className="text-3xl font-bold mb-3">{news.tittle}</h1>
        {/* Botón Editar solo si está autenticado */}
        {isMember && (
          <Link
            href={`/member/edit-news/${news.slug}`}
            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            <FaEdit className="mr-2" /> Editar
          </Link>
        )}
      </div>

      {/* Fecha, categoría y autor */}
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
          {author ? author.name : "Autor desconocido"}
        </span>
      </div>

      {/* Imagen principal */}
      <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md mb-8">
        <Image
          src={`http:localhost:8081${news.imageUrl}`}
          alt={news.tittle}
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
