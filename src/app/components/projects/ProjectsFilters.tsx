"use client";

import { ProjectFilter } from "@/app/types/Project";
import { useState } from "react";

interface ProjectFiltersProps {
  onFilterChange: (filters: ProjectFilter) => void;
}

export default function ProjectFilters({
  onFilterChange,
}: ProjectFiltersProps) {
  const [filters, setFilters] = useState<ProjectFilter>({
    year: "",
    area: "",
    status: "",
  });

  const handleChange = (key: keyof ProjectFilter, value: string) => {
    const updatedFilters: ProjectFilter = { ...filters, [key]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-5 sticky top-14 p-4 shadow-md z-10 bg-white rounded-b-3xl">
      {/* Año */}
      <select
        className="px-3 py-2 border rounded-md"
        value={filters.year}
        onChange={(e) => handleChange("year", e.target.value)}
      >
        <option value="">Todos los años</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
      </select>

      {/* Área */}
      <select
        className="px-3 py-2 border rounded-md"
        value={filters.area}
        onChange={(e) => handleChange("area", e.target.value)}
      >
        <option value="">Todas las áreas</option>
        <optgroup label="Ingeniería de Sistemas">
          <option value="Inteligencia Artificial">Inteligencia Artificial</option>
          <option value="Desarrollo Web">Desarrollo Web</option>
          <option value="Seguridad informática">Seguridad informática</option>
          <option value="Transformación Digital">Transformación Digital</option>
        </optgroup>
        <optgroup label="Contaduría Pública">
          <option value="Finanzas y gestión pública">Finanzas y gestión pública</option>
          <option value="Auditoría digital">Auditoría digital</option>
          <option value="NIIF">NIIF</option>
          <option value="Contabilidad y tecnología">Contabilidad y tecnología</option>
        </optgroup>
      </select>

      {/* Estado */}
      <select
        className="px-3 py-2 border rounded-md"
        value={filters.status}
        onChange={(e) => handleChange("status", e.target.value)}
      >
        <option value="">Todos los estados</option>
        <option value="En curso">En curso</option>
        <option value="Finalizado">Finalizado</option>
      </select>
    </div>
  );
}
