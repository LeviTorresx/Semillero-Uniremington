"use client";

import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import ProjectList from "@/app/components/projects/ProjectList";
import Link from "next/link";
import { FaHandPeace } from "react-icons/fa";

export default function MemberDashboard() {
  const userAuth = useSelector((state: RootState) => state.user);

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold text-center">
          ¡Hola, {userAuth.user?.name || "Miembro"}!{" "}
          <FaHandPeace size={35} className="inline-block ml-2 text-blue-500" />
        </h1>

        <Link
          href="/member/create-project"
          className="bg-blue-800 text-white px-4 py-2 rounded-3xl hover:bg-blue-400 w-full sm:w-auto text-center"
        >
          Crear solicitud para un nuevo proyecto
        </Link>
      </div>

      <p className="text-gray-600 mb-8">
        Bienvenido a tu panel. Aquí puedes ver tus proyectos activos.
      </p>
      {/* Botón para ir al formulario */}

      {/* Lista de proyectos */}
      {userAuth.user.projects.length > 0 ? (
        <ProjectList projects={userAuth.user.projects} />
      ) : (
        <p className="text-gray-500">No estás inscrito en ningún proyecto.</p>
      )}
    </div>
  );
}
