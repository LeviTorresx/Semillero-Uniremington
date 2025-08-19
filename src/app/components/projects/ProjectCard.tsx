import { Project } from "@/app/types/Project";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="bg-white shadow-md rounded-lg border border-blue-800 hover:shadow-xl transition overflow-hidden flex flex-col"
    >
      {/* Imagen superior */}
      {project.imageUrl && (
        <div className="w-full h-48 relative">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
      )}

      {/* Contenido */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-blue-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-3 line-clamp-3">{project.description}</p>
        <p className="text-sm text-gray-500 mb-2">
          <strong>Año:</strong> {project.creationDate}
        </p>
        <p className="text-sm text-gray-500 mb-2">
          <strong>Área:</strong> {project.researchArea}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Líder:</strong> {project.leader?.name}
        </p>

        <span
          className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold self-start ${
            project.status === "En curso"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {project.status}
        </span>
      </div>
    </Link>
  );
}
