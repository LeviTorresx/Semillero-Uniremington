"use client";
import NewsCard from "@/app/components/news/NewsCard";
import NewsFilterBar from "@/app/components/news/NewsFilterBar";
import Pagination from "@/app/components/news/Pagination";
import { RootState } from "@/app/store/store";
import { News } from "@/app/types/New";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function MemberNewsPages() {
  const news = useSelector((state: RootState) => state.news);
  const userAuth = useSelector((state: RootState) => state.auth.user);

  const userNews = news.filter((n) =>
    n.author.some((a) => a.id === userAuth.id)
  );

  const allNews: News[] = userNews;

  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const filteredNews = allNews.filter((n) => {
    return (
      (category ? n.category === category : true) &&
      (year ? new Date(n.date).getFullYear().toString() === year : true) &&
      (keyword ? n.title.toLowerCase().includes(keyword.toLowerCase()) : true)
    );
  });

  const totalPages = Math.ceil(filteredNews.length / 6);
  const paginatedNews = filteredNews.slice((page - 1) * 6, page * 6);

  return (
    <div className="min-h-screen mx-auto max-w-7xl px-6 py-10">
      {/* Encabezado */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-blue-800 mb-3">
          Mis noticias del Semillero
        </h1>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
          <Link
            href={"/member/create-news"}
            className="text-white bg-blue-500 px-4 py-2 rounded-3xl hover:bg-blue-400"
          >
            Crear una nueva noticia
          </Link>
          <Link
            className="text-white bg-blue-500 px-4 py-2 rounded-3xl hover:bg-blue-400"
            href={"/news"}
          >
            Ver todas las noticas
          </Link>
        </div>
      </div>

      {/* Filtros */}
      <NewsFilterBar
        categories={["PUBLICATION", "EVENT", "AWARDS", "OTHER"]}
        selectedCategory={category}
        onCategoryChange={(cat) => {
          setPage(1);
          setCategory(cat);
        }}
        selectedYear={year}
        onYearChange={(yr) => {
          setPage(1);
          setYear(yr);
        }}
        keyword={keyword}
        onKeywordChange={(kw) => {
          setPage(1);
          setKeyword(kw);
        }}
      />

      {/* Listado de noticias */}
      {paginatedNews.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          No se encontraron noticias con los filtros aplicados.
        </div>
      )}

      {/* Paginación */}
      {totalPages > 1 && (
        <div className="mt-10">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      )}
    </div>
  );
}
