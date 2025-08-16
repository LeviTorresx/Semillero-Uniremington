"use client";

import ProjectForm from "@/app/components/projects/ProjectForm";
import { addProject } from "@/app/store/features/ProjectSlice";
import { AppDispatch, RootState } from "@/app/store/store";
import { Project } from "@/app/types/Project";
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
    area: "",
    description: "",
    indentiferArea: "",
    leader: userAuth,
    researchers: [userAuth],
    slug: "",
    status: "En curso",
    title: "",
    creationDate: today,
    endDate: "",
    image: undefined,
    document: undefined,
    valid: false,
  };

  const [newProject, setNewProject] = useState<Project>(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const slugTag = createSlug(newProject.title);

    // proyecto actualizado
    const projectWithMeta = {
      ...newProject,
      id: crypto.randomUUID(),
      slug: slugTag,
    };

    // guardas en redux el proyecto con slug e id
    dispatch(addProject(projectWithMeta));

    // reseteas el formulario
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
