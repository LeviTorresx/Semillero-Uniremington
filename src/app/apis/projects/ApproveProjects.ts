import axios from "axios";

const apiUrl = "http://localhost:8081";
export async function approveProject(projectId: number) {
  try {
    const response = await axios.put(
      `${apiUrl}/member/approve-project`,
      null, // body vacío
      {
        params: { projectId },
        withCredentials: true,
      }
    );

    // solo devuelve "News approved"
    return response.data as string;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error aprobando el proyecto:",
        error.response?.data || error.message
      );
    }
    throw error;
  }
}
