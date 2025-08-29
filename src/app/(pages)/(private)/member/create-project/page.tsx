"use client";

import ProjectForm from "@/app/components/projects/ProjectForm";
import { AppDispatch, RootState } from "@/app/store/store";
import { createProjectThunk } from "@/app/store/thunks/projectsThunks";
import { ProjectRequest } from "@/app/types/Project";
import { createSlug } from "@/app/utils/slugname";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function CreateProjectPage() {
  const researchLines = useSelector((state: RootState) => state.researchLines);
  const userAuth = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  // Fecha actual en formato YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  const MySwal = withReactContent(Swal);

  const initialState: ProjectRequest = {
    description: "",
    researchArea: "",
    researchTopic: "",
    identifierArea: "",
    leaderId: userAuth?.userId ?? 0,
    researchesIds: [userAuth?.userId ?? 0],
    slug: "",
    status: "En curso",
    tittle: "",
    creationDate: today,
    endDate: "",
    document: new File([], ""),
    image: new File([], ""),
  };

  const [newProject, setNewProject] = useState<ProjectRequest>(initialState);

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userAuth) {
      MySwal.fire(
        "Error",
        "Debes estar autenticado para crear un proyecto",
        "error"
      );
      return;
    }

    try {
      const slugTag = createSlug(newProject.tittle);

      const projectToStore: ProjectRequest = {
        ...newProject,
        slug: slugTag,
        leaderId: userAuth.userId,
        researchesIds: [userAuth.userId],
      };

      await dispatch(createProjectThunk(projectToStore));

      MySwal.fire("¡Éxito!", "Proyecto creado con éxito", "success");
      console.log("Proyecto creado:", projectToStore);

      setNewProject(initialState);
    } catch (error) {
      MySwal.fire("Error", "No se pudo crear el proyecto", "error");
      console.error("Error creando el proyecto:", error);
    }
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
