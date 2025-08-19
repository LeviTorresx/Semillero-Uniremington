"use client";

import { RootState } from "@/app/store/store";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import {
  FaArrowLeft,
  FaFolderOpen,
  FaUsers,
  FaTag,
  FaUser,
} from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaEdit } from "react-icons/fa";

export default function ProjectsPages() {
  const params = useParams();
  const { slug } = params;

  const project = useSelector((state: RootState) =>
    state.projects.find((p) => p.slug === slug)
  );

  const userAuth = useSelector((state: RootState) => state.auth);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  const isMember =
    userAuth?.isAuthenticated && project.leader?.id === userAuth.user?.id;

  return (
    <div className="min-h-screen mx-auto max-w-5xl p-6">
      {/* Botón volver */}
      <Link
        href="/projects"
        className="inline-flex items-center text-blue-600 hover:underline mb-4"
      >
        <FaArrowLeft className="mr-2" /> Volver a proyectos
      </Link>

      {/* Imagen del proyecto */}
      {project.imageUrl && (
        <div className="w-full mb-6">
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Título */}
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-3xl font-bold">{project.title}</h1>

        {/* Botón Editar solo si está autenticado */}
        {isMember && (
          <Link
            href={`/member/edit-project/${project.slug}`}
            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            <FaEdit className="mr-2" /> Editar
          </Link>
        )}
      </div>

      {/* Detalles */}
      <div className="flex flex-wrap items-center text-gray-500 text-sm gap-4 mb-6">
        <span className="flex items-center gap-x-2">
          Creado: <FaCalendarAlt className="mr-1 text-green-600" />
          <strong>{project.creationDate}</strong>
        </span>
        <span className="flex items-center gap-x-2">
          Finaliza:
          <FaCalendarAlt className="mr-1 text-red-600" />
          <strong>{project.endDate}</strong>
        </span>
        <span className="flex items-center">
          <FaFolderOpen className="mr-1" /> {project.researchArea}
        </span>
        <span className="flex items-center">
          <FaTag
            className={`mr-1 ${
              project.status === "En curso" ? "text-green-500" : "text-red-500"
            } `}
          />
          {project.status}
        </span>
      </div>

      {/* Descripción */}
      <article className="prose max-w-none prose-lg mb-8">
        <p>{project.description}</p>
      </article>

      {/* Investigadores */}
      {project.researchers && project.leader && (
        <div className="bg-gray-50 border rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <FaUser className="mr-2" /> Lider
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>{project.leader.name}</li>
          </ul>
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
