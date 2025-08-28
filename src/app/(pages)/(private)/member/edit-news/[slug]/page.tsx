"use client";

import NewsForm from "@/app/components/news/NewsForm";
import { AppDispatch, RootState } from "@/app/store/store";
import { editNewsThunk } from "@/app/store/thunks/NewsThunks";
import { News, NewsRequest } from "@/app/types/New";
import { useParams } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function EditNewsPage() {
  const { slug } = useParams();
  const MySwal = withReactContent(Swal);

  const news = useSelector((state: RootState) =>
    state.news.news.find((n) => n.slug === slug)
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!news) alert("no existe la noticia");
  }, [news]);

  const [formData, setFormData] = useState<News | null>(null);

  useEffect(() => {
    if (news) {
      setFormData(news);
    }
  }, [news]);

  if (!formData) return <div>Cargando...</div>;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (files && files.length > 0) {
      setFormData((prev) => (prev ? { ...prev, [name]: files[0] } : prev));
    } else {
      setFormData((prev) => (prev ? { ...prev, [name]: value } : prev));
    }
  };

  // Manejo de envío
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData) return;

    try {
      await dispatch(
        editNewsThunk({
          newsId: formData.newsId,
          newsData: formData as NewsRequest,
        })
      );

      MySwal.fire("¡Éxito!", "Noticia actualizada con éxito", "success");
      console.log("Noticia actualizada:", formData);
    } catch (error) {
      console.error("Error actualizando la noticia:", error);
      MySwal.fire("Error", "No se pudo actualizar la noticia", "error");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Editar Proyecto</h1>
      <NewsForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
