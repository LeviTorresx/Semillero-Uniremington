"use client";

import NewsForm from "@/app/components/news/NewsForm";
import { AppDispatch, RootState } from "@/app/store/store";
import { createNewsThunk } from "@/app/store/thunks/NewsThunks";
import { NewsRequest } from "@/app/types/New";
import { createSlug } from "@/app/utils/slugname";
import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function CreateNewsPage() {
  const today = new Date().toISOString().split("T")[0];
  const dispatch = useDispatch<AppDispatch>();
  const userAuth = useSelector((state: RootState) => state.auth.user);
  const MySwal = withReactContent(Swal);

  const initialState: NewsRequest = {
    tittle: "",
    excerpt: "",
    content: "",
    category: "PUBLICATION",
    date: today,
    authorId: userAuth?.userId ?? 0,
    slug: "",
    image: new File([], ""),
    valid: false,
  };

  const [formData, setFormData] = useState<NewsRequest>(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (files && files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Submit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userAuth) {
      MySwal.fire(
        "Error",
        "Debes estar autenticado para crear una noticia",
        "error"
      );
      return;
    }

    try {
      const slugTag = createSlug(formData.tittle);

      const newsToStore: NewsRequest = {
        ...formData,
        slug: slugTag,
        authorId: userAuth.userId, // 🔹 opcional, si tu backend lo espera
      };

      await dispatch(createNewsThunk(newsToStore));

      MySwal.fire("¡Éxito!", "Noticia creada con éxito", "success");
      console.log("Noticia creada:", newsToStore);

      setFormData(initialState);
    } catch (error) {
      MySwal.fire("Error", "No se pudo crear la noticia", "error");
      console.error("Error creando la noticia:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Crear Solicitud Para Nueva Noticia
        </h1>

        <NewsForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
