import axios from "axios";
import { NewsRequest } from "@/app/types/New";

const API_URL = "http://localhost:8081/member";

export async function editNews(newsId: number, newsData: NewsRequest) {
  try {
    const formData = new FormData();
    const { image, ...dataWithoutFile } = newsData;

    // JSON serializado de los datos sin imagen
    formData.append("data", JSON.stringify(dataWithoutFile));

    // Imagen solo si existe
    if (image) {
      formData.append("image", image);
    }

    // newsId como query param
    const response = await axios.put(`${API_URL}/edit-news?newsId=${newsId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data; // devuelve NewsDTO
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error editando noticia:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}
