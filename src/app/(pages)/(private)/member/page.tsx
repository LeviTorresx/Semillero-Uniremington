"use client";

import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import ProjectList from "@/app/components/projects/ProjectList";
import Link from "next/link";
import { FaHandPeace } from "react-icons/fa";

export default function MemberDashboard() {
  const userAuth = useSelector((state: RootState) => state.auth.user);
  const projects = useSelector((state: RootState) => state.projects);

  const userProjects = projects.filter((p) =>
    p.researchers.some((r) => r.id == userAuth.id)
  );

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold text-center">
          ¡Hola, {userAuth?.name || "Miembro"}!{" "}
          <FaHandPeace size={35} className="inline-block ml-2 text-blue-500" />
        </h1>

        <Link
          href="/member/create-project"
          className="bg-blue-800 text-white px-4 py-2 rounded-3xl hover:bg-blue-400 w-full sm:w-auto text-center"
        >
          Crear solicitud para un nuevo proyecto
        </Link>
      </div>
      <div className="flex flex-col-reverse items-center sm:justify-between sm:flex-row gap-4 px-6 mb-6">
        <p className="text-gray-600 ">
          Bienvenido a tu panel. Aquí puedes ver tus proyectos inscritos.
        </p>
        <Link
          href={"/projects"}
          className="text-white bg-blue-500 px-4 py-2 rounded-3xl hover:bg-blue-400 transition-all "
        >
          Buscar nuevos proyectos
        </Link>
      </div>

      {/* Botón para ir al formulario */}

      {/* Lista de proyectos */}
      {userProjects.length > 0 ? (
        <ProjectList projects={userProjects} />
      ) : (
        <p className="text-gray-500">No estás inscrito en ningún proyecto.</p>
      )}
    </div>
  );
}
