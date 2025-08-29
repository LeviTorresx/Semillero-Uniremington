import axios, { AxiosError } from "axios";
import { Project } from "@/app/types/Project";

const apiUrl = "http://localhost:8083/projects";

// Obtener todos los proyectos
export async function getAllProjects(): Promise<Project[]> {
  try {
    const response = await axios.get<Project[]>(`${apiUrl}/get-all-projects`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    throw new Error(
      error.response?.data?.message || "Error al obtener proyectos"
    );
  }
}

// Obtener solo proyectos válidos
export async function getValidProjects(): Promise<Project[]> {
  try {
    const response = await axios.get<Project[]>(`${apiUrl}/get-valid-projects`);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    throw new Error(
      error.response?.data?.message || "Error al obtener proyectos válidos"
    );
  }
}

// Obtener un proyecto por ID
export async function getProjectById(projectId: number): Promise<Project> {
  try {
    const response = await axios.get<Project>(`${apiUrl}/get-project-by-id`, {
      params: { projectId },
    });
    return response.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    throw new Error(
      error.response?.data?.message || "Error al obtener el proyecto"
    );
  }
}
