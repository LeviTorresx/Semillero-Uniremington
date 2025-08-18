"use client";

import ProjectList from "@/app/components/projects/ProjectList";
import ProjectFilters from "@/app/components/projects/ProjectsFilters";
import { ProjectFilter } from "@/app/types/Project";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import { selectValidatedProjects } from "@/app/store/selectors/projectSelectors";

export default function ProjectPageContent() {
  const searchParams = useSearchParams();
  const projects = useSelector(selectValidatedProjects);
  const researchAreas = useSelector((state: RootState) => state.researchLines);

  const initialFilter: ProjectFilter = {
    year: searchParams.get("year") || "",
    identifer: searchParams.get("identifer") || "",
    status: searchParams.get("status") || "",
  };

  const [filteredProjects, setFilteredProjects] = useState(() => {
    let result = projects;
    if (initialFilter.year)
      result = result.filter((p) => p.creationDate == initialFilter.year);
    if (initialFilter.identifer)
      result = result.filter(
        (p) => p.identiferArea === initialFilter.identifer
      );
    if (initialFilter.status)
      result = result.filter((p) => p.status === initialFilter.status);
    return result;
  });

  const handleFilterChange = (filters: ProjectFilter) => {
    let result = projects;
    if (filters.year)
      result = result.filter((p) => p.creationDate == filters.year);
    if (filters.identifer)
      result = result.filter((p) => p.identiferArea === filters.identifer);
    if (filters.status)
      result = result.filter((p) => p.status === filters.status);
    setFilteredProjects(result);
  };

  useEffect(() => {
    handleFilterChange(initialFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <main className="min-h-screen mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Proyectos
      </h1>
      <ProjectFilters
        onFilterChange={handleFilterChange}
        initialFilter={initialFilter}
        categories={researchAreas}
      />
      <ProjectList projects={filteredProjects} />
    </main>
  );
}
