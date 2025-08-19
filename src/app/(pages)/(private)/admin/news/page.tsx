"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import NewsTable from "@/app/components/news/NewsTable";


export default function AdminNewsDashboard() {
  const news = useSelector((state: RootState) => state.news);

  const validNews = news.filter((n) => n.valid);
  const pendingNews = news.filter((n) => !n.valid);

  return (
    <div className="p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Panel de Noticias
      </h1>

      {/* Noticias pendientes */}
      <NewsTable
        news={pendingNews}
        title="Noticias pendientes de validación"
        color="yellow"
        validState={false}
      />

      {/* Noticias validadas */}
      <NewsTable
        news={validNews}
        title="Noticias validadas"
        color="green"
        validState={true}
      />
    </div>
  );
}
