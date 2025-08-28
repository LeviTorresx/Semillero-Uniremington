// src/app/admin/layout.tsx
"use client";
import "../../../globals.css";
import PrivateNavbar from "@/app/components/header/PrivateNavbar";
import PrivateDataProvider from "./PrivateMemberProvider";

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
  return (
    <>
      <PrivateNavbar
        route="/member"
        navItems={navItems}
        title="Panel de Miembros"
      />
      <main className="p-5">
        <PrivateDataProvider> {children} </PrivateDataProvider>
      </main>
    </>
  );
}
