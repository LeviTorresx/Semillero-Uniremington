import axios from "axios";
import { Project, ProjectRequest } from "@/app/types/Project";

export async function createProject(projectData: ProjectRequest) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const formData = new FormData();

    const { image, document, ...dataWithoutFiles } = projectData;

    formData.append("data", JSON.stringify(dataWithoutFiles));

    if (image) formData.append("image", image);
    if (document) formData.append("document", document);

    const response = await axios.post<Project>(
      `${apiUrl}/member/create-project`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data; // ProjectDTO
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // error.response?.data es cualquier objeto que devuelva el backend
      console.error(
        "Error creating project:",
        error.response?.data || error.message
      );
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}
