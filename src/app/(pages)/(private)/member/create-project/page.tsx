"use client";

import ProjectForm from "@/app/components/projects/ProjectForm";
import { addProject } from "@/app/store/features/ProjectSlice";
import { AppDispatch, RootState } from "@/app/store/store";
import { Project } from "@/app/types/Project";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CreateProjectPage() {
  const researchLines = useSelector((state: RootState) => state.researchLines);
  const userAuth = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  const initialState: Project = {
    id: "",
    area: "",
    description: "",
    indentiferArea: "",
    researchers: [userAuth],
    slug: "",
    status: "En curso",
    title: "",
    year: "",
    image: "",
    validate: false,
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
    setNewProject({
      ...newProject,
      id: crypto.randomUUID(),
    });
    dispatch(addProject(newProject));
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
