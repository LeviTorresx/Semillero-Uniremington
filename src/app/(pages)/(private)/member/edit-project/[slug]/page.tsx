"use client";

import ProjectForm from "@/app/components/projects/ProjectForm";
import { RootState, AppDispatch } from "@/app/store/store";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Project, ProjectFormData } from "@/app/types/Project";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { updateProject } from "@/app/store/features/ProjectSlice";

export default function EditProjectPage() {
  const { slug } = useParams();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const researchLines = useSelector((state: RootState) => state.researchLines);
  const project = useSelector((state: RootState) =>
    state.projects.find((p) => p.slug === slug)
  );

  // Si no existe el proyecto, rediriges o muestras error
  useEffect(() => {
    if (!project) {
      router.push("/member");
    }
  }, [project, router]);

  // Estado local para el formulario (copiamos el proyecto existente)
  const [formData, setFormData] = useState<ProjectFormData | null>(null);

  useEffect(() => {
    if (project) {
      setFormData(project);
    }
  }, [project]);

  if (!formData) return <div>Cargando...</div>;

  // Manejo de cambios
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
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData) return;

    const { image, document, ...rest } = formData;

    const updatedProject: Project = {
      ...rest,
      imageUrl: image ? URL.createObjectURL(image) : "",
      documentUrl: document ? URL.createObjectURL(document) : "",
    };

    dispatch(updateProject(updatedProject));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Editar Proyecto</h1>
      <ProjectForm
        formData={formData}
        researchLines={researchLines}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
