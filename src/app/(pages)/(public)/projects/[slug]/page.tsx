"use client";

import { RootState } from "@/app/store/store";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaFolderOpen,
  FaUsers,
  FaTag,
} from "react-icons/fa";
import Link from "next/link";

export default function ProjectsPages() {
  const params = useParams();
  const { slug } = params;

  const project = useSelector((state: RootState) =>
    state.projects.find((p) => p.slug === slug)
  );

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className="min-h-screen mx-auto max-w-5xl p-6">
      {/* Botón volver */}
      <Link
        href="/projects"
        className="inline-flex items-center text-blue-600 hover:underline mb-4"
      >
        <FaArrowLeft className="mr-2" /> Volver a proyectos
      </Link>

      {/* Título */}
      <h1 className="text-3xl font-bold mb-3">{project.title}</h1>

      {/* Detalles */}
      <div className="flex flex-wrap items-center text-gray-500 text-sm gap-4 mb-6">
        <span className="flex items-center">
          <FaCalendarAlt className="mr-1" /> {project.year}
        </span>
        <span className="flex items-center">
          <FaFolderOpen className="mr-1" /> {project.area}
        </span>
        <span className="flex items-center">
          <FaTag className="mr-1" /> {project.status}
        </span>
      </div>

      {/* Descripción */}
      <article className="prose max-w-none prose-lg mb-8">
        <p>{project.description}</p>
      </article>

      {/* Investigadores */}
      {project.researchers && project.researchers.length > 0 && (
        <div className="bg-gray-50 border rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <FaUsers className="mr-2" /> Investigadores
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            {project.researchers.map((r, index) => (
              <li key={index}>{r.name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Pie */}
      <div className="mt-12 border-t pt-6 text-sm text-gray-500">
        Proyecto registrado por el Semillero de Investigación
      </div>
    </div>
  );
}
