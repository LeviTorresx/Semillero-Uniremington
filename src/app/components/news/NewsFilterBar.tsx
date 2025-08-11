// src/app/news/components/NewsFilterBar.tsx
"use client";

import { FaSearch, FaFilter, FaCalendarAlt, FaTags } from "react-icons/fa";

interface Props {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedYear: string;
  onYearChange: (year: string) => void;
  keyword: string;
  onKeywordChange: (keyword: string) => void;
}

export default function NewsFilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
  selectedYear,
  onYearChange,
  keyword,
  onKeywordChange,
}: Props) {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 4 }, (_, i) => `${currentYear - i}`);

  return (
    <div className="w-full bg-white shadow-md p-4 rounded-xl mb-6 border border-gray-200">
      <div>
        <h2 className="text-xl font-semibold text-blue-800 mb-4">
          Filtros de Noticias
          <FaFilter className="inline ml-2 text-blue-600" />
        </h2>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        {/* Categoría */}
        <div className="flex items-center gap-2">
          <FaTags className="text-blue-600" />
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="p-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
          >
            <option value="">Todas las categorías</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Año */}
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-blue-600" />
          <select
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
            className="p-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
          >
            <option value="">Todos los años</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Palabra clave */}
        <div className="flex items-center gap-2 flex-1 min-w-[200px]">
          <FaSearch className="text-blue-600" />
          <input
            type="text"
            placeholder="Buscar noticia..."
            value={keyword}
            onChange={(e) => onKeywordChange(e.target.value)}
            className="p-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none w-full"
          />
        </div>
      </div>
    </div>
  );
}
