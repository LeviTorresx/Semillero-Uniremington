"use client";

import "../../globals.css";
import Navbar from "@/app/components/header/Navbar";
import Footer from "@/app/components/footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";
import { fetchProjects } from "@/app/store/thunks/projectsThunks";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
