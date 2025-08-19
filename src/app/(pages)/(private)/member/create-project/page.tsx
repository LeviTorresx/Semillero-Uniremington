"use client";

import ProjectForm from "@/app/components/projects/ProjectForm";
import { addProject } from "@/app/store/features/ProjectSlice";
import { AppDispatch, RootState } from "@/app/store/store";
import { Project, ProjectFormData } from "@/app/types/Project";
import { createSlug } from "@/app/utils/slugname";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CreateProjectPage() {
  const researchLines = useSelector((state: RootState) => state.researchLines);
  const userAuth = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  // Fecha actual en formato YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  const initialState: Project = {
    id: "",
    description: "",
    researchArea: "",
    researchTopic: "",
    identiferArea: "",
    leader: userAuth,
    researchers: [userAuth],
    slug: "",
    status: "En curso",
    title: "",
    creationDate: today,
    endDate: "",
    imageUrl: "",
    documentUrl: "",
    valid: false,
  };

  const [newProject, setNewProject] = useState<ProjectFormData>(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (files && files.length > 0) {
      setNewProject((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setNewProject((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const slugTag = createSlug(newProject.title);

    // separas lo serializable de lo no serializable
    const { image, document, ...rest } = newProject;

    const projectWithMeta: Project = {
      ...rest,
      id: crypto.randomUUID(),
      slug: slugTag,
      //temporal
      imageUrl: image ? URL.createObjectURL(image) : "",
      documentUrl: document ? URL.createObjectURL(document) : "",
    };


    dispatch(addProject(projectWithMeta));

    setNewProject(initialState);
  };

  return (
    <div>
      <ProjectForm
        formData={newProject}
        researchLines={researchLines}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
