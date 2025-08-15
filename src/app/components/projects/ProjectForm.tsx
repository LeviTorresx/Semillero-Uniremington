"use client";

import { ChangeEvent, FormEvent } from "react";
import { Project } from "@/app/types/Project";
import { ResearchArea } from "@/app/types/ResearchLine";

interface ProjectFormProps {
  formData: Project;
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
    (area) => area.name === formData.area
  );

  // Fecha actual en formato YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

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
            value={today}
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
          <label className="block font-semibold mb-1">Estado</label>
          <input
            type="text"
            value="En curso"
            name="status"
            readOnly
            className="w-full border rounded-lg p-2 bg-gray-100"
          />
        </div>

        {/* Línea */}
        <div className="col-span-1">
          <label className="block font-semibold mb-1">Línea</label>
          <select
            name="area"
            value={formData.area}
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
            value={formData.indentiferArea}
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
          <label className="block font-semibold mb-1">Año</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={onChange}
            className="w-full border rounded-lg p-2"
            min="2000"
            max="2100"
            required
          />
        </div>
      </div>

      {/* Botón */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-colors w-full sm:w-auto"
        >
          Crear Proyecto
        </button>
      </div>
    </form>
  );
}
