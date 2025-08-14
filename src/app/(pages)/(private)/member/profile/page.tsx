"use client";

import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import ProjectList from "@/app/components/projects/ProjectList";
import Link from "next/link";

export default function ProfilePage() {
  const { user } = useSelector((state: RootState) => state.user);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        No hay información del usuario.
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-5xl mx-auto p-6">
      {/* Header con botón */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold text-center">Perfil de {user.name}</h1>
        <Link
          href="/member/edit-profile"
          className="bg-blue-800 text-white px-4 py-2 rounded-3xl hover:bg-blue-500 transition-colors text-center"
        >
          Editar perfil
        </Link>
      </div>

      {/* Datos del usuario */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <p className="mb-2">
          <span className="font-semibold">Nombre:</span> {user.name}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Correo:</span> {user.email}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Teléfono:</span> {user.phone}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Rol:</span> {user.role}
        </p>
      </div>

      {/* Proyectos */}
      <h2 className="text-2xl font-semibold mb-4">Mis Proyectos</h2>
      {user.projects && user.projects.length > 0 ? (
        <ProjectList projects={user.projects} />
      ) : (
        <p className="text-gray-500">No estás inscrito en ningún proyecto.</p>
      )}
    </div>
  );
}
