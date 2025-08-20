"use client";

import NewsForm from "@/app/components/news/NewsForm";
import { updateNew } from "@/app/store/features/NewSlice";
import { AppDispatch, RootState } from "@/app/store/store";
import { News, NewsFormData } from "@/app/types/New";
import { useParams } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function EditNewsPage() {
  const { slug } = useParams();

  const news = useSelector((state: RootState) =>
    state.news.find((n) => n.slug === slug)
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!news) alert("no existe la noticia");
  }, [news]);

  const [formData, setFormData] = useState<NewsFormData | null>(null);

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData) return;

    const { image, ...rest } = formData;

    const updatedNews: News = {
      ...rest,
      imageUrl: image ? URL.createObjectURL(image) : "",
    };

    console.log("Noticia actualizada:", updatedNews);
    //disparador
    dispatch(updateNew(updatedNews));
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
