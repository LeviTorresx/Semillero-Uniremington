"use client";

import { NewsFormData } from "@/app/types/New";
import { ChangeEvent, FormEvent } from "react";

interface NewsFormProps {
  formData: NewsFormData;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function NewsForm({
  formData,
  onChange,
  onSubmit,
}: NewsFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white shadow-lg rounded-2xl p-6 md:p-8 space-y-6 max-w-3xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Título */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700">
            Título
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={onChange}
            className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            required
          />
        </div>

        {/* Extracto */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700">
            Extracto
          </label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={onChange}
            rows={2}
            className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition resize-none"
            required
          />
        </div>

        {/* Contenido */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700">
            Contenido
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={onChange}
            rows={6}
            className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition resize-y"
            required
          />
        </div>

        {/* Categoría */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Categoría
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={onChange}
            className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          >
            <option value="PUBLICATION">Publicación</option>
            <option value="EVENT">Evento</option>
            <option value="AWARDS">Premio</option>
            <option value="OTHER">Otro</option>
          </select>
        </div>

        {/* Fecha */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Fecha
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={onChange}
            className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            required
          />
        </div>

        {/* Imagen */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700">
            Imagen
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={onChange}
            className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          />
        </div>
      </div>

      {/* Botón */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition text-center"
        >
          Guardar Noticia
        </button>
      </div>
    </form>
  );
}
