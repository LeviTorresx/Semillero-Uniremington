import axios from "axios";

const apiUrl = "http://localhost:8081";
export async function approveNews(newsId: number) {
  try {
    const response = await axios.put(
      `${apiUrl}/member/approve-news`,
      null, // body vacío
      {
        params: { newsId },
        withCredentials: true,
      }
    );

    // solo devuelve "News approved"
    return response.data as string;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error aprobando noticia:",
        error.response?.data || error.message
      );
    }
    throw error;
  }
}
