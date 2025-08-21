"use client";

import NewsForm from "@/app/components/news/NewsForm";
import { addNew } from "@/app/store/features/NewSlice";
import { RootState } from "@/app/store/store";
import { News, NewsFormData } from "@/app/types/New";
import { createSlug } from "@/app/utils/slugname";
import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CreateNewsPage() {
  const today = new Date().toISOString().split("T")[0];
  const dispatch = useDispatch();
  const userAuth = useSelector((state: RootState) => state.auth.user);

  const initialState: News = {
    id: "",
    title: "",
    excerpt: "",
    content: "",
    category: "PUBLICATION",
    date: today,
    author: userAuth !== null ? [userAuth]: [],
    slug: "",
    imageUrl: "",
    valid: false,
  };

  const [formData, setFormData] = useState<NewsFormData>(initialState);

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
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const slugtag = createSlug(formData.title);
    const { image, ...rest } = formData;

    const newsWithMeta: News = {
      ...rest,
      id: crypto.randomUUID(),
      slug: slugtag,
      imageUrl: image ? URL.createObjectURL(image) : "",
    };

    dispatch(addNew(newsWithMeta));

    console.log("Noticia creada:", formData);
    alert("Noticia creada con éxito!");
    setFormData(initialState);
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
