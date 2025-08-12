"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaUserShield, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface NavItems {
  label: string;
  href: string;
}

interface AdminNavbarProps {
  navItems: NavItems[];
  title: string;
}

export default function AdminNavbar({ navItems, title }: AdminNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white text-blue-800 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / Título */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <Image
            src="/Logo_Uniremington.png"
            alt="Logo Uniremington"
            width={40}
            height={40}
          />
          <span>{title}</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-3xl font-bold hover:bg-blue-200 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button className="flex items-center gap-1 px-4 py-2 rounded-3xl hover:bg-red-300 transition-colors">
            <FaSignOutAlt /> Cerrar sesión
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-3 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 rounded-3xl font-bold hover:bg-blue-200 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button
            className="flex items-center gap-1 px-4 py-3 rounded-3xl hover:bg-red-300 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <FaSignOutAlt /> Cerrar sesión
          </button>
        </div>
      )}
    </header>
  );
}
