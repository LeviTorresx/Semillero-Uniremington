import { News, NewsRequest } from "@/app/types/New";
import axios from "axios";


export async function editNews(newsId: number, newsData: NewsRequest) {
  const apiUrl = "http://localhost:8081";

  try {
    const formData = new FormData();

    const { image, ...dataWithoutFile } = newsData;

    // newsId como query param
    formData.append("data", JSON.stringify(dataWithoutFile));
    if (image) {
      formData.append("image", image);
    }

    const response = await axios.put<News>(
      `${apiUrl}/member/edit-news?newsId=${newsId}`,
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
        "Error editing news:",
        error.response?.data || error.message
      );
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}
