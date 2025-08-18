"use client";

import { ChangeEvent, FormEvent } from "react";
import { ProjectFormData } from "@/app/types/Project";
import { ResearchArea } from "@/app/types/ResearchLine";
import Image from "next/image";

interface ProjectFormProps {
  formData: ProjectFormData;
  researchLines: ResearchArea[];
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function ProjectForm({
  formData,
  onChange,
  onSubmit,
  researchLines,
}: ProjectFormProps) {
  const selectedArea = researchLines.find(
    (area) => area.name === formData.researchArea
  );

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white shadow-lg rounded-xl p-6 max-w-4xl mx-auto space-y-6"
    >
      <h2 className="text-2xl font-bold text-blue-800 text-center">
        Solicitud para creacion Proyecto
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Título */}
        <div className="col-span-1">
          <label className="block font-semibold mb-1">Título</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={onChange}
            className="w-full border rounded-lg p-2"
            placeholder="Nombre del proyecto"
            required
          />
        </div>

        {/* Fecha */}
        <div className="col-span-1">
          <label className="block font-semibold mb-1">Fecha de creación</label>
          <input
            type="date"
            value={formData.creationDate}
            className="w-full border rounded-lg p-2 bg-gray-100"
            readOnly
          />
        </div>

        {/* Descripción */}
        <div className="col-span-1 md:col-span-2">
          <label className="block font-semibold mb-1">Descripción</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={onChange}
            className="w-full border rounded-lg p-2"
            rows={4}
            placeholder="Describe brevemente el proyecto"
            required
          />
        </div>

        {/* Estado (fijo en En curso) */}
        <div className="col-span-1">
          <label className={`block font-semibold mb-1 `}>Estado</label>
          <input
            type="text"
            value={formData.status}
            name="status"
            readOnly
            className={`w-full border rounded-lg p-2 ${
              formData.status === "En curso"
                ? "bg-green-200 font-bold"
                : "text-red-500"
            }`}
          />
        </div>

        {/* Línea */}
        <div className="col-span-1">
          <label className="block font-semibold mb-1">Línea</label>
          <select
            name="area"
            value={formData.researchArea}
            onChange={onChange}
            className="w-full border rounded-lg p-2"
            required
          >
            <option value="">Seleccione una línea</option>
            {researchLines.map((area) => (
              <option key={area.id} value={area.name}>
                {area.name}
              </option>
            ))}
          </select>
        </div>

        {/* Área */}
        <div className="col-span-1">
          <label className="block font-semibold mb-1">Área</label>
          <select
            name="indentiferArea"
            value={formData.identiferArea}
            onChange={onChange}
            className="w-full border rounded-lg p-2"
            required
            disabled={!selectedArea}
          >
            <option value="">Seleccione un área</option>
            {selectedArea?.topics.map((topic) => (
              <option key={topic.identifer} value={topic.identifer}>
                {topic.name}
              </option>
            ))}
          </select>
        </div>

        {/* Año */}
        <div className="col-span-1">
          <label className="block font-semibold mb-1">
            Año estimado de finalizacion
          </label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={onChange}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>
      </div>

      {/* Documento PDF */}
      <div className="col-span-1">
        <label className="block font-semibold mb-2 text-gray-700">
          Documento (PDF)
        </label>
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors">
          <span className="text-gray-500 text-sm mb-2">
            Haz clic o arrastra aquí
          </span>
          <span className="text-blue-600 font-medium">Subir PDF</span>
          <input
            type="file"
            name="document"
            accept="application/pdf"
            onChange={onChange}
            className="hidden"
          />
        </label>
        {formData.document && (
          <p className="mt-2 text-sm text-green-600">
            📄 {formData.document.name}
          </p>
        )}
      </div>

      {/* Imagen */}
      <div className="col-span-1">
        <label className="block font-semibold mb-2 text-gray-700">Imagen</label>
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors">
          <span className="text-gray-500 text-sm mb-2">
            Haz clic o arrastra aquí
          </span>
          <span className="text-blue-600 font-medium">Subir Imagen</span>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={onChange}
            className="hidden"
          />
        </label>
        {formData.image && (
          <div className="mt-2">
            <Image
              src={URL.createObjectURL(formData.image)}
              alt="preview"
              className="w-24 h-24 object-cover rounded-lg shadow-md"
              width={50}
              height={50}
            />
          </div>
        )}
      </div>

      {/* Botón */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-colors w-full sm:w-auto"
        >
          Guardar Proyecto
        </button>
      </div>
    </form>
  );
}
