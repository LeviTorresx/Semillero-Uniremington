// src/app/admin/layout.tsx
import type { Metadata } from "next";
import "../../../globals.css";
import { Roboto } from "next/font/google";
import PrivateNavbar from "@/app/components/header/PrivateNavbar";
import Providers from "../../(public)/providers";

export const metadata: Metadata = {
  title: "Semilleros Uniremington",
  description: "Universidad Remington",
  icons: {
    icon: [
      { url: "/Logo_Uniremington.png" },
      { url: "/Logo_Uniremington.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/Logo_Uniremington.png", // para iOS
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const navItems = [
  { label: "Proyectos", href: "/projects" },
  { label: "Noticias", href: "/news" },
  { label: "Perfil", href: "/member/profile" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <PrivateNavbar
            route="/member"
            navItems={navItems}
            title="Panel de miembros"
          />
          <main className="p-5">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
