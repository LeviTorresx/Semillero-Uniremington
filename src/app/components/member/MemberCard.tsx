"use client";

import { User } from "@/app/types/User";
import React from "react";

import {
  FaUser,
  FaUserTag,
  FaCheckCircle,
  FaTimesCircle,
  FaPhone,
} from "react-icons/fa";

interface MemberCardProps {
  member: User;
  onClose: () => void;
}

export default function MemberCard({ member, onClose }: MemberCardProps) {
  return (
    <div className="fixed inset-0 bg-blue-800/30 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md lg:max-w-lg p-6 relative animate-fadeIn">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 transition"
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <FaUser className="text-blue-600 text-5xl mb-3" />
          <h2 className="text-2xl font-bold text-gray-800 mb-1 break-words">
            {member.name}
          </h2>
          <p className="text-sm text-gray-500 break-words">{member.email}</p>
        </div>

        {/* Info */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3">
            <FaUserTag className="text-blue-500" />
            <span className="text-gray-700 font-medium break-words">
              Rol: {member.role}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {member.valid ? (
              <FaCheckCircle className="text-green-500" />
            ) : (
              <FaTimesCircle className="text-red-500" />
            )}
            <span className="text-gray-700 font-medium">
              Estado: {member.valid ? "Validado" : "Pendiente"}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-purple-500" />
            <a
              href={`tel:${member.phone}`}
              className="text-gray-700 font-medium hover:underline"
            >
              Teléfono: {member.phone}
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
