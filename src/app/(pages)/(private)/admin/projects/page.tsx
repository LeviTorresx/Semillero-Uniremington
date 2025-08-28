"use client";
import ProjectTable from "@/app/components/projects/ProjectTable";
import { RootState } from "@/app/store/store";

import React from "react";
import { useSelector } from "react-redux";

export default function AdminProjectDashboard() {
  const projects = useSelector((state: RootState) => state.projects);

  const validProjects = projects.projects.filter((p) => p.valid);
  const invalidProjects = projects.projects.filter((p) => !p.valid);

  return (
    <div className=" p-6">
      <h1 className="text-2xl font-bold mb-6">Panel de Proyectos</h1>

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
