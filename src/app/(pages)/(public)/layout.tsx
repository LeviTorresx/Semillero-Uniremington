"use client";

import "../../globals.css";
import Navbar from "@/app/components/header/Navbar";
import Footer from "@/app/components/footer/Footer";
import PublicDataProvider from "./PublicDataProvider";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>
        <PublicDataProvider>{children}</PublicDataProvider>
      </main>
      <Footer />
    </>
  );
}
