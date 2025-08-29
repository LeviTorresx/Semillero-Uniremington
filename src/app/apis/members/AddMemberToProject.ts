import axios from "axios";

export async function addUserToProject(projectId: number, userId: number) {
  const apiUrl = "http://localhost:8081/member";

  try {
    // En Spring Boot, tu endpoint recibe el userId en el body
    const response = await axios.put(
      `${apiUrl}/add-user-to-project?projectId=${projectId}`,
      userId,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response; // "Usuario agregado al proyecto correctamente"
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error agregando usuario al proyecto:",
        error.response?.data || error.message
      );
    } else {
      console.error("Error inesperado:", error);
    }
    throw error;
  }
}
