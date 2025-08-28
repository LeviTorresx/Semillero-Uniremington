// src/app/admin/layout.tsx
"use client";

import { useDispatch } from "react-redux";
import "../../../globals.css";
import PrivateNavbar from "@/app/components/header/PrivateNavbar";
import { AppDispatch } from "@/app/store/store";
import { useEffect } from "react";
import { fetchUserThunk } from "@/app/store/features/AuthSlice";
import { fetchProjects } from "@/app/store/thunks/projectsThunks";

const navItems = [
  { label: "Mis proyectos", href: "/member" },
  { label: "Mis noticias", href: "/member/news" },
  { label: "Mi perfil", href: "/member/profile" },
];

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchUserThunk());
  }, [dispatch]);

    useEffect(() => {
      dispatch(fetchProjects());
    }, [dispatch]);

  return (
    <>
      <PrivateNavbar
        route="/member"
        navItems={navItems}
        title="Panel de Miembros"
      />
      <main className="p-5">{children}</main>
    </>
  );
}
