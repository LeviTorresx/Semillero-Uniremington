"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const userAuth = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex space-x-4 items-center">
                <Image
                  src="/Logo_Uniremington.png"
                  alt="Logo Uniremington"
                  width={40}
                  height={0}
                />
                <Image
                  src="/2-removebg-preview.png"
                  alt="Logo Uniremington"
                  width={100}
                  height={0}
                />
              </div>
            </Link>
          </div>

          {/* Menú Desktop */}
          <nav className="hidden md:flex space-x-8 items-center text-base font-medium">
            <Link
              href="/about-us"
              className="text-blue-700 hover:text-red-600 transition"
            >
              Nosotros
            </Link>
            <Link
              href="/projects"
              className="text-blue-700 hover:text-red-600 transition"
            >
              Proyectos
            </Link>
            <Link
              href="/news"
              className="text-blue-700 hover:text-red-600 transition"
            >
              Noticias
            </Link>

            {/* Boton de Login */}
            <Link
              href={userAuth ? "/member" : "/login"}
              className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-red-600 transition font-semibold"
            >
              {userAuth ? "Panel de miembros" : "Iniciar Sesión"}
            </Link>
          </nav>

          {/* Boton menu movil */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Abrir menú">
              {isOpen ? (
                <FaTimes size={22} className="text-blue-700" />
              ) : (
                <FaBars size={22} className="text-blue-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-3 px-4 py-4 text-base font-medium">
            <Link
              href="/about-us"
              className="text-blue-700 hover:text-red-600 transition"
              onClick={toggleMenu}
            >
              Nosotros
            </Link>
            <Link
              href="/projects"
              className="text-blue-700 hover:text-red-600 transition"
              onClick={toggleMenu}
            >
              Proyectos
            </Link>
            <Link
              href="/news"
              className="text-blue-700 hover:text-red-600 transition"
              onClick={toggleMenu}
            >
              Noticias
            </Link>

            <Link
              href={userAuth ? "/member" : "/login"}
              className="text-white bg-blue-700 text-center px-4 py-2 rounded-md hover:bg-red-600 transition font-semibold"
              onClick={toggleMenu}
            >
              {userAuth ? "Panel de miembros" : "Iniciar Sesión"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
