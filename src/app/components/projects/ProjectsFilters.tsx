"use client";

import { ProjectFilter } from "@/app/types/Project";
import { useState, useEffect } from "react";
import { FaCalendarAlt, FaFolderOpen, FaCheckCircle } from "react-icons/fa";

interface ProjectFiltersProps {
  onFilterChange: (filters: ProjectFilter) => void;
  initialFilter?: ProjectFilter;
}

export default function ProjectFilters({
  onFilterChange,
  initialFilter = { year: "", area: "", status: "" },
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
  };

  const SelectWrapper = ({
    icon,
    value,
    onChange,
    children,
  }: {
    icon: React.ReactNode;
    value: string | number;
    onChange: (val: string) => void;
    children: React.ReactNode;
  }) => (
    <div className="flex items-center gap-2 px-3 py-2 bg-white border rounded-lg shadow-sm hover:shadow-md transition-all">
      {icon}
      <select
        className="outline-none bg-transparent w-full cursor-pointer"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {children}
      </select>
    </div>
  );

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-5 sticky top-14 p-4 shadow-lg z-10 bg-white rounded-b-3xl border-b">
      {/* Año */}
      <SelectWrapper
        icon={<FaCalendarAlt className="text-blue-600" />}
        value={filters.year}
        onChange={(val) => handleChange("year", val)}
      >
        <option value="">Todos los años</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
      </SelectWrapper>

      {/* Área */}
      <SelectWrapper
        icon={<FaFolderOpen className="text-green-600" />}
        value={filters.area}
        onChange={(val) => handleChange("area", val)}
      >
        <option value="">Todas las áreas</option>
        <optgroup label="Ingeniería de Sistemas">
          <option value="Inteligencia Artificial">
            Inteligencia Artificial
          </option>
          <option value="Desarrollo Web">Desarrollo Web</option>
          <option value="Seguridad informática">Seguridad informática</option>
          <option value="Transformación Digital">Transformación Digital</option>
        </optgroup>
        <optgroup label="Contaduría Pública">
          <option value="Finanzas y gestión pública">
            Finanzas y gestión pública
          </option>
          <option value="Auditoría digital">Auditoría digital</option>
          <option value="NIIF">NIIF</option>
          <option value="Contabilidad y tecnología">
            Contabilidad y tecnología
          </option>
        </optgroup>
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
