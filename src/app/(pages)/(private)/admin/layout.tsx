
import "../../../globals.css";
import PrivateNavbar from "@/app/components/header/PrivateNavbar";
import PrivateDataProvider from "../member/PrivateMemberProvider";

const navItems = [
  { label: "Miembros", href: "/admin/members" },
  { label: "Proyectos", href: "/admin/projects" },
  { label: "Noticias", href: "/admin/news" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PrivateNavbar
        route="/admin"
        navItems={navItems}
        title="Panel de Administracion"
      />
      <main className="p-5">
        <PrivateDataProvider> {children} </PrivateDataProvider>
      </main>
    </>
  );
}
