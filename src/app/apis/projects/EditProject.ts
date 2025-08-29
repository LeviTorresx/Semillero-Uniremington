import axios from "axios";
import { Project, ProjectRequest } from "@/app/types/Project";

export async function editProject(
  projectId: number,
  projectData: ProjectRequest
) {
  const apiUrl = "http://localhost:8081";

  try {
    const formData = new FormData();

    const { image, document, ...dataWithoutFiles } = projectData;

    formData.append("data", JSON.stringify(dataWithoutFiles));

    if (image) formData.append("image", image);
    if (document) formData.append("document", document);

    const response = await axios.put<Project>(
      `${apiUrl}/member/edit-project?projectId=${projectId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error editing project:",
        error.response?.data || error.message
      );
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}
