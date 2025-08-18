"use client";

import ProjectTable from "@/app/components/projects/ProjectTable";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";

export default function AdminDashboard() {
  const projects = useSelector((state: RootState) => state.projects);

  const validProjects = projects.filter((p) => p.valid);
  const invalidProjects = projects.filter((p) => !p.valid);

  return (
    <div className="min-h-screen max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Panel de Administración</h1>

      <ProjectTable
        projects={invalidProjects}
        title="Proyectos por Validar"
        color="yellow"
        validState={false}
      />

      <ProjectTable
        projects={validProjects}
        title="Proyectos Validados"
        color="green"
        validState={true}
      />
    </div>
  );
}
