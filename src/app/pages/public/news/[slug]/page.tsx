// src/app/news/[slug]/page.tsx
import { News } from "@/app/types/New";
import Image from "next/image";

interface Props {
  params: { slug: string };
}

export default function NewsDetailPage({ params }: Props) {
  // Aquí deberías hacer fetch a la API por slug
  const news: News = {
    id: 1,
    title: "Participación en Congreso de Innovación",
    excerpt: "El semillero presentó un proyecto...",
    content:
      "Este es el contenido completo de la noticia, con imágenes, detalles y descripciones del evento.",
    category: "EVENT",
    date: "2025-07-15",
    imageUrl: "/news/evento.jpg",
    author: "Juan Pérez",
    slug: "participacion-en-congreso",
  };

  return (
    <div className="container mx-auto p-6">
      <Image
        src={news.imageUrl}
        alt={news.title}
        className="rounded-lg w-full h-96 object-cover mb-6"
      />
      <span className="text-sm font-semibold text-blue-600">
        {news.category}
      </span>
      <h1 className="text-3xl font-bold mt-2">{news.title}</h1>
      <p className="text-gray-500 text-sm mb-4">
        {new Date(news.date).toLocaleDateString()} — {news.author}
      </p>
      <div className="prose max-w-none">{news.content}</div>
    </div>
  );
}
