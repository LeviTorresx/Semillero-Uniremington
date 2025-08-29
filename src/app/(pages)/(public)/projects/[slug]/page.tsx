"use client";

import { RootState } from "@/app/store/store";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import {
  FaArrowLeft,
  FaFolderOpen,
  FaUsers,
  FaTag,
  FaUser,
  FaCalendarAlt,
  FaEdit,
  FaFile,
  FaCheck,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
//import { addMemberToProject } from "@/app/store/features/ProjectSlice";

export default function ProjectsPages() {
  const params = useParams();
  const { slug } = params;
  //const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const members = useSelector((state: RootState) => state.members);

  const project = useSelector((state: RootState) =>
    state.projects.projects.find((p) => p.slug === slug)
  );

  const userAuth = useSelector((state: RootState) => state.auth);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  const leader = members.find((m) => m.userId === project.leaderId);

  const researchers = members.filter((m) =>
    (project.researchesIds ?? []).some((r) => r === m.userId)
  );

  const isLeader =
    userAuth?.isAuthenticated && leader?.userId === userAuth.user?.userId;

  const isEnrolled = researchers.some(
    (r) => r.userId === userAuth.user?.userId
  );

  const handleEnroll = () => {
    if (!userAuth.isAuthenticated) {
      alert("Debes iniciar sesión para inscribirte en un proyecto.");
      return router.push("/login");
    }

    //disparch(addMemberToProject({ projectId: project.projectId, memberId: userAuth.user!.userId }));
    alert(`Te inscribiste en: ${project.tittle}`);
  };

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
              src={`http://localhost:8081${project.imageUrl}`}
              alt={project.tittle}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Título + botones */}
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-3xl font-bold">{project.tittle}</h1>

        {/* Botón Editar si es líder */}
        {isLeader ? (
          <Link
            href={`/member/edit-project/${project.slug}`}
            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            <FaEdit className="mr-2" /> Editar
          </Link>
        ) : (
          <>
            {!isEnrolled ? (
              <button
                onClick={handleEnroll}
                className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
              >
                Inscribirse
              </button>
            ) : (
              <span className="text-sm text-green-600 flex items-center gap-2">
                <FaCheck /> Estás inscrito en este proyecto
              </span>
            )}
          </>
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
            }`}
          />
          {project.status}
        </span>
      </div>

      {/* Descripción */}
      <article className="prose max-w-none prose-lg mb-8">
        <p>{project.description}</p>
      </article>

      {/* Investigadores */}
      {researchers && leader && (
        <div className="bg-gray-50 border rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <FaUser className="mr-2" /> Lider
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>{leader.name}</li>
          </ul>
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <FaUsers className="mr-2" /> Investigadores
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            {researchers.map((r, index) => (
              <li key={index}>{r.name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Documento */}
      {project.documentUrl && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <FaFile className="mr-2" /> Documento
          </h2>
          <div className="border rounded-lg overflow-hidden shadow">
            <iframe
              src={`http://localhost:8081${project.documentUrl}`}
              className="w-full h-96"
              title="Documento del proyecto"
            />
          </div>
          <a
            href={project.documentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Ver Documento
          </a>
        </div>
      )}

      <div className="mt-12 border-t pt-6 text-sm text-gray-500">
        Proyecto registrado por el Semillero de Investigación
      </div>
    </div>
  );
}
