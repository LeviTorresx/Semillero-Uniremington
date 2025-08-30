import { createAsyncThunk } from "@reduxjs/toolkit";
import { Project, ProjectRequest } from "@/app/types/Project";
import { createProject } from "@/app/apis/projects/CreateProject";
import { editProject } from "@/app/apis/projects/EditProject";
import { getAllProjects } from "@/app/apis/projects/GetsProjects";
import { approveProject } from "@/app/apis/projects/ApproveProjects";

// 🔹 Obtener todos los proyectos
export const fetchProjects = createAsyncThunk<Project[]>(
  "project/fetchProjects",
  async () => {
    const response = await getAllProjects();
    return response;
  }
);

// 🔹 Crear proyecto
export const createProjectThunk = createAsyncThunk<Project, ProjectRequest>(
  "project/createProject",
  async (projectData) => {
    const project = await createProject(projectData);
    return project;
  }
);

// 🔹 Editar proyecto
export const editProjectThunk = createAsyncThunk<
  Project,
  { projectId: number; projectData: ProjectRequest }
>("project/editProject", async ({ projectId, projectData }) => {
  const updatedProject = await editProject(projectId, projectData);
  return updatedProject;
});

//aprobar un projecto
export const approveProjectThunk = createAsyncThunk<
  { projectId: number; message: string }, // retorno
  number // argumento
>("news/approveNews", async (projectId) => {
  const message = await approveProject(projectId);
  return { projectId, message }; // devolvemos id + mensaje del backend
});
