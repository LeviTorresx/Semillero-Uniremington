"use client";

import Link from "next/link";
import { FaCheck, FaXmark, FaEye } from "react-icons/fa6";
import { useState } from "react";

import { News } from "@/app/types/New";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

interface NewsTableProps {
  news: News[];
  title: string;
  color: "yellow" | "green";
  validState: boolean;
}

export default function NewsTable({
  news,
  title,
  color,
  validState,
}: NewsTableProps) {
  const [search, setSearch] = useState("");

  const filteredNews = news.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.category.toLowerCase().includes(search.toLowerCase())
  );

  const members = useSelector((state: RootState) => state.members);

  return (
    <section className="mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
        <h2
          className={`text-xl md:text-2xl font-bold mb-4 ${
            validState ? "text-green-700" : "text-yellow-700"
          }`}
        >
          {title}
        </h2>
        <div className="relative w-full sm:w-64">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar noticia..."
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
          />
        </div>
      </div>

      {/* Tabla en escritorio */}
      <div className="overflow-x-auto shadow-md rounded-xl border border-gray-200">
        <table className="hidden md:table w-full text-sm text-gray-700">
          <thead
            className={`bg-${color}-100 text-${color}-800 uppercase text-xs font-semibold sticky top-0`}
          >
            <tr>
              <th className="px-6 py-3 text-left">Título</th>
              <th className="px-6 py-3 text-left">Categoría</th>
              <th className="px-6 py-3 text-left">Fecha</th>
              <th className="px-6 py-3 text-left">Autor(es)</th>
              <th className="px-6 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredNews.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-4 text-center text-gray-500 italic"
                >
                  No hay noticias en esta categoría o por validar
                </td>
              </tr>
            ) : (
              filteredNews.map((n) => (
                <tr
                  key={n.newsId}
                  className="border-b bg-white hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium">{n.title}</td>
                  <td className="px-6 py-4">{n.category}</td>
                  <td className="px-6 py-4">{n.date}</td>
                  <td className="px-6 py-4">
                    {Array.isArray(n.authorId)
                      ? n.authorId
                          .map((id) => {
                            const member = members.find((m) => m.userId === id);
                            return member ? member.name : `ID: ${id}`;
                          })
                          .join(", ")
                      : (() => {
                          const member = members.find(
                            (m) => m.userId === n.authorId
                          );
                          return member ? member.name : `ID: ${n.authorId}`;
                        })()}
                  </td>

                  <td className="px-6 py-4 flex justify-center gap-3">
                    <Link
                      href={`/news/${n.slug}`}
                      className="p-2.5 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition"
                      title="Ver detalles"
                    >
                      <FaEye size={16} />
                    </Link>

                    <button
                      className={`p-2.5 rounded-full transition ${
                        validState
                          ? "bg-red-100 text-red-600 hover:bg-red-200"
                          : "bg-green-100 text-green-600 hover:bg-green-200"
                      }`}
                      title={
                        validState
                          ? "Marcar como inválida"
                          : "Marcar como válida"
                      }
                    >
                      {validState ? (
                        <FaXmark size={16} />
                      ) : (
                        <FaCheck size={16} />
                      )}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Vista móvil como cards */}
        <div className="md:hidden flex flex-col gap-4 p-4">
          {filteredNews.length === 0 ? (
            <p className="text-gray-500 italic text-center">
              No hay noticias en esta categoría o por validar
            </p>
          ) : (
            filteredNews.map((n) => (
              <div
                key={n.newsId}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col gap-2"
              >
                <h3 className="font-semibold text-gray-800">{n.title}</h3>
                <p className="text-sm text-gray-500">
                  Categoría: <span className="font-medium">{n.category}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Fecha: <span className="font-medium">{n.date}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Autor(es):{" "}
                  <span className="font-medium">
                    {Array.isArray(n.authorId)
                      ? n.authorId
                          .map((id) => {
                            const member = members.find((m) => m.userId === id);
                            return member ? member.name : `ID: ${id}`;
                          })
                          .join(", ")
                      : (() => {
                          const member = members.find(
                            (m) => m.userId === n.authorId
                          );
                          return member ? member.name : `ID: ${n.authorId}`;
                        })()}
                  </span>
                </p>

                <div className="flex justify-end gap-2 mt-2">
                  <Link
                    href={`/news/${n.slug}`}
                    className="p-2 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition"
                    title="Ver detalles"
                  >
                    <FaEye />
                  </Link>

                  <button
                    className={`p-2 rounded-full transition ${
                      validState
                        ? "bg-red-100 text-red-600 hover:bg-red-200"
                        : "bg-green-100 text-green-600 hover:bg-green-200"
                    }`}
                    title={
                      validState ? "Marcar como inválida" : "Marcar como válida"
                    }
                  >
                    {validState ? <FaXmark /> : <FaCheck />}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
