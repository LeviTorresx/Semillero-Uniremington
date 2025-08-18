"use client";

import Link from "next/link";
import { FaCheck, FaXmark, FaEye, FaPen } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toggleValidProject } from "@/app/store/features/ProjectSlice";
import { Project } from "@/app/types/Project";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface ProjectTableProps {
  projects: Project[];
  title: string;
  color: "yellow" | "green";
  validState: boolean; // true = validados, false = pendientes
}

export default function ProjectTable({
  projects,
  title,
  color,
  validState,
}: ProjectTableProps) {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.researchArea?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
        <h2
          className={`text-xl md:text-2xl font-bold mb-4 ${
            validState ? "text-green-700" : "text-yellow-700"
          }`}
        >
          {title}
        </h2>
        <div className="relative w-full sm:w-64">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar proyecto..."
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
          />
        </div>{" "}
      </div>

      {/* Tabla responsiva */}
      <div className="overflow-x-auto shadow-md rounded-xl border border-gray-200">
        <table className="hidden md:table w-full text-sm text-gray-700">
          <thead
            className={`bg-${color}-100 text-${color}-800 uppercase text-xs font-semibold sticky top-0`}
          >
            <tr>
              <th className="px-6 py-3 text-left">Título</th>
              <th className="px-6 py-3 text-left">Área</th>
              <th className="px-6 py-3 text-left">Fecha</th>
              <th className="px-6 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {projects.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-4 text-center text-gray-500 italic"
                >
                  No hay proyectos en esta categoría o por validacion
                </td>
              </tr>
            ) : (
              projects.map((project) => (
                <tr
                  key={project.id}
                  className="border-b bg-white hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium">{project.title}</td>
                  <td className="px-6 py-4">{project.researchArea}</td>
                  <td className="px-6 py-4">{project.creationDate}</td>
                  <td className="px-6 py-4 flex justify-center gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="p-2.5 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition"
                      title="Ver detalles"
                    >
                      <FaEye size={16} />
                    </Link>

                    <button
                      onClick={() => dispatch(toggleValidProject(project.id))}
                      className={`p-2.5 rounded-full transition ${
                        validState
                          ? "bg-red-100 text-red-600 hover:bg-red-200"
                          : "bg-green-100 text-green-600 hover:bg-green-200"
                      }`}
                      title={
                        validState
                          ? "Marcar como inválido"
                          : "Marcar como válido"
                      }
                    >
                      {validState ? (
                        <FaXmark size={16} />
                      ) : (
                        <FaCheck size={16} />
                      )}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Vista móvil como cards */}
        <div className="md:hidden flex flex-col gap-4 p-4">
          {projects.length === 0 ? (
            <p className="text-gray-500 italic text-center">
              No hay proyectos en esta categoría o por validacion
            </p>
          ) : (
            projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col gap-2"
              >
                <h3 className="font-semibold text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-500">
                  Área:{" "}
                  <span className="font-medium">{project.researchArea}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Fecha:{" "}
                  <span className="font-medium">{project.creationDate}</span>
                </p>
                <div className="flex justify-end gap-2 mt-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="p-2 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition"
                    title="Ver detalles"
                  >
                    <FaEye />
                  </Link>

                  <button
                    onClick={() => dispatch(toggleValidProject(project.id))}
                    className={`p-2 rounded-full transition ${
                      validState
                        ? "bg-red-100 text-red-600 hover:bg-red-200"
                        : "bg-green-100 text-green-600 hover:bg-green-200"
                    }`}
                    title={
                      validState ? "Marcar como inválido" : "Marcar como válido"
                    }
                  >
                    {validState ? <FaXmark /> : <FaCheck />}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
