"use client";

import { ProjectFilter } from "@/app/types/Project";
import { useState, useEffect } from "react";
import { FaCalendarAlt, FaFolderOpen, FaCheckCircle } from "react-icons/fa";
import { SelectWrapper } from "./SelectWrapper";
import { ResearchArea } from "@/app/types/ResearchLine";

interface ProjectFiltersProps {
  onFilterChange: (filters: ProjectFilter) => void;
  initialFilter?: ProjectFilter;
  categories: ResearchArea[];
}

export default function ProjectFilters({
  onFilterChange,
  initialFilter = { year: "", identifer: "", status: "" },
  categories,
}: ProjectFiltersProps) {
  const [filters, setFilters] = useState<ProjectFilter>(initialFilter);

  // Sincroniza el estado interno si el filtro inicial cambia (ej. por cambio de URL)
  useEffect(() => {
    if (!initialFilter) {
      setFilters(initialFilter);
    }
  }, [initialFilter]);

  const handleChange = (key: keyof ProjectFilter, value: string) => {
    const updatedFilters: ProjectFilter = { ...filters, [key]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
    console.log(updatedFilters);
  };

  // Genera los años para el filtro
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 8 }, (_, i) => `${currentYear - i}`);

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-5 sticky top-14 p-4 shadow-lg z-10 bg-white rounded-b-3xl border-b">
      {/* Año */}
      <SelectWrapper
        icon={<FaCalendarAlt className="text-blue-600" />}
        value={filters.year}
        onChange={(val) => handleChange("year", val)}
      >
        <option value="">Todos los años</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </SelectWrapper>

      {/* Área */}
      <SelectWrapper
        icon={<FaFolderOpen className="text-green-600" />}
        value={filters.identifer}
        onChange={(val) => handleChange("identifer", val)}
      >
        <option value="">Todas las áreas</option>
        {categories.map((c) => (
          <optgroup key={c.name} label={c.name}>
            {c.topics.map((area) => (
              <option key={area.name} value={area.identifer}>
                {area.name}
              </option>
            ))}
          </optgroup>
        ))}
      </SelectWrapper>

      {/* Estado */}
      <SelectWrapper
        icon={<FaCheckCircle className="text-purple-600" />}
        value={filters.status}
        onChange={(val) => handleChange("status", val)}
      >
        <option value="">Todos los estados</option>
        <option value="En curso">En curso</option>
        <option value="Finalizado">Finalizado</option>
      </SelectWrapper>
    </div>
  );
}
