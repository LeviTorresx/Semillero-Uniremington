"use client";

import Link from "next/link";
import { FaProjectDiagram, FaNewspaper, FaUsers } from "react-icons/fa";

export default function AdminDashboard() {
  const sections = [
    {
      title: "Proyectos",
      description: "Gestiona y valida los proyectos de investigación.",
      icon: <FaProjectDiagram className="text-blue-600 text-4xl mb-3" />,
      href: "/admin/projects",
      color: "blue",
    },
    {
      title: "Noticias",
      description: "Revisa, valida y publica noticias del semillero.",
      icon: <FaNewspaper className="text-yellow-600 text-4xl mb-3" />,
      href: "/admin/news",
      color: "yellow",
    },
    {
      title: "Miembros",
      description: "Administra los miembros y roles del semillero.",
      icon: <FaUsers className="text-green-600 text-4xl mb-3" />,
      href: "/admin/members",
      color: "green",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Panel Administrativo
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
        {sections.map((section) => (
          <Link key={section.title} href={section.href}>
            <div
              className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-md border border-gray-200 bg-blue-50 hover:shadow-xl transition transform hover:scale-105 cursor-pointer`}
            >
              {section.icon}
              <h2
                className={`text-xl font-semibold text-${section.color}-700 mb-2`}
              >
                {section.title}
              </h2>
              <p className="text-sm text-gray-600 text-center">
                {section.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
