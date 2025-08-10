"use client";

import ProjectList from "@/app/components/projects/ProjectList";
import ProjectFilters from "@/app/components/projects/ProjectsFilters";
import { ProjectFilter } from "@/app/types/Project";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { MOCK_PROJECTS } from "@/app/types/Project";

export default function ProjectPage() {
  const searchParams = useSearchParams();

  // Construimos el filtro inicial desde la URL
  const initialFilter: ProjectFilter = {
    year: searchParams.get("year") || "",
    area: searchParams.get("area") || "",
    status: searchParams.get("status") || "",
  };

  const [filteredProjects, setFilteredProjects] = useState(() => {
    let result = MOCK_PROJECTS;
    if (initialFilter.year)
      result = result.filter((p) => p.year == initialFilter.year);
    if (initialFilter.area)
      result = result.filter((p) => p.area === initialFilter.area);
    if (initialFilter.status)
      result = result.filter((p) => p.status === initialFilter.status);
    return result;
  });

  const handleFilterChange = (filters: ProjectFilter) => {
    let result = MOCK_PROJECTS;
    if (filters.year) result = result.filter((p) => p.year == filters.year);
    if (filters.area) result = result.filter((p) => p.area === filters.area);
    if (filters.status)
      result = result.filter((p) => p.status === filters.status);
    setFilteredProjects(result);
  };

  // Si cambia la URL, actualizamos la lista automáticamente
  useEffect(() => {
    handleFilterChange(initialFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <main className="min-h-screen mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Proyectos
      </h1>
      <ProjectFilters onFilterChange={handleFilterChange} initialFilter={initialFilter} />
      <ProjectList projects={filteredProjects} />
    </main>
  );
}
