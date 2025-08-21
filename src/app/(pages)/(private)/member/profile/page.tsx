"use client";

import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import ProjectList from "@/app/components/projects/ProjectList";
import Link from "next/link";
import {
  FaAddressCard,
  FaRegFaceGrinSquint,
  FaShield,
  FaUser,
} from "react-icons/fa6";
import { FaEdit, FaFolder, FaPhone } from "react-icons/fa";

export default function ProfilePage() {
  const user = useSelector((state: RootState) => state.auth.user);
  const projects = useSelector((state: RootState) => state.projects);

  const userProjects = projects.filter((p) => p.leader.id === user?.id);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        No hay información del usuario.
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-7xl mx-auto p-4">
      {/* Header con botón */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-300 shadow-lg rounded-lg p-6 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-white">
        <h1 className="text-3xl font-bold text-center flex items-center gap-x-5">
          <FaRegFaceGrinSquint size={28} /> {user.name}
        </h1>
        <Link
          href="/member/edit-profile"
          className="bg-white text-blue-800 px-5 py-2 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2"
        >
          <FaEdit size={18} /> Editar perfil
        </Link>
      </div>

      {/* Datos del usuario */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8 space-y-4">
        <div className="flex items-center gap-3">
          <FaUser className="text-blue-600" size={20} />
          <p>
            <span className="font-semibold">Nombre:</span> {user.name}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <FaAddressCard className="text-blue-600" size={20} />
          <p>
            <span className="font-semibold">Correo:</span> {user.email}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <FaPhone className="text-blue-600" size={20} />
          <p>
            <span className="font-semibold">Teléfono:</span> {user.phone}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <FaShield className="text-blue-600" size={20} />
          <p>
            <span className="font-semibold">Rol:</span> {user.role}
          </p>
        </div>
      </div>

      {/* Proyectos */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaFolder className="text-blue-600" size={22} /> Proyectos en los que
          eres Lider
        </h2>
        {userProjects && userProjects.length > 0 ? (
          <ProjectList projects={userProjects} />
        ) : (
          <p className="text-gray-500">No estás inscrito en ningún proyecto.</p>
        )}
      </div>
    </div>
  );
}
