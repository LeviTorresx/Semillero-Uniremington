import { News, NewsRequest } from "@/app/types/New";
import axios from "axios";

export async function createNews(newsData: NewsRequest) {
  const apiUrl = "http://localhost:8081";

  try {
    const formData = new FormData();

    // Extraemos el archivo de imagen y lo demás como JSON
    const { image, ...dataWithoutFile } = newsData;

    formData.append("data", JSON.stringify(dataWithoutFile));

    if (image) {
      formData.append("image", image);
    }

    const response = await axios.post<News>(
      `${apiUrl}/member/create-news`,
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
        "Error creating news:",
        error.response?.data || error.message
      );
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}
