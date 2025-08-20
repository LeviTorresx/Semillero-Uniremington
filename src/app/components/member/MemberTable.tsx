"use client";

import { FaCheck, FaXmark, } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toggleValidMember } from "@/app/store/features/MemberSlice";

import { FaArrowRight, FaSearch } from "react-icons/fa";
import { User } from "@/app/types/User";
import MemberCard from "./MemberCard";

interface MemberTableProps {
  members: User[];
  title: string;
  color: "yellow" | "green";
  validState: boolean; // true = validados, false = pendientes
}

export default function MemberTable({
  members,
  title,
  color,
  validState,
}: MemberTableProps) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [selectedMember, setSelectedMember] = useState<User | null>(null);

  const filteredMembers = members.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      m.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="mt-8">
      {/* Header + filtro */}
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
            placeholder="Buscar miembro..."
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
          />
        </div>
      </div>

      {/* Tabla Desktop */}
      <div className="overflow-x-auto shadow-md rounded-xl border border-gray-200">
        <table className="hidden md:table w-full text-sm text-gray-700">
          <thead
            className={`bg-${color}-100 text-${color}-800 uppercase text-xs font-semibold sticky top-0`}
          >
            <tr>
              <th className="px-6 py-3 text-left">Nombre</th>
              <th className="px-6 py-3 text-left">Correo</th>
              <th className="px-6 py-3 text-left">Rol</th>
              <th className="px-6 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-4 text-center text-gray-500 italic"
                >
                  No hay miembros en esta categoría o por validación
                </td>
              </tr>
            ) : (
              filteredMembers.map((member) => (
                <tr
                  key={member.id}
                  className="border-b bg-white hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium">{member.name}</td>
                  <td className="px-6 py-4">{member.email}</td>
                  <td className="px-6 py-4">{member.role}</td>
                  <td className="px-6 py-4 flex justify-center gap-3">
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-200"
                    >
                      <span>Ver más</span>
                      <FaArrowRight className="text-white text-sm" />
                    </button>
                    <button
                      onClick={() => dispatch(toggleValidMember(member.id))}
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

        {/* Vista móvil */}
        <div className="md:hidden flex flex-col gap-4 p-4">
          {filteredMembers.length === 0 ? (
            <p className="text-gray-500 italic text-center">
              No hay miembros en esta categoría o por validación
            </p>
          ) : (
            filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col gap-2"
              >
                <h3 className="font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-500">
                  Email: <span className="font-medium">{member.email}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Rol: <span className="font-medium">{member.role}</span>
                </p>
                <div className="flex justify-end gap-2 mt-2">
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-200"
                  >
                    <span>Ver más</span>
                    <FaArrowRight className="text-white text-sm" />
                  </button>
                  <button
                    onClick={() => dispatch(toggleValidMember(member.id))}
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
      {selectedMember && (
        <MemberCard
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </section>
  );
}
