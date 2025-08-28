import axios, { AxiosError } from "axios";
import { News } from "@/app/types/New";

const apiUrl = "http://localhost:8083/news";

// 🔹 Obtener todas las noticias
export async function getAllNews(): Promise<News[]> {
  try {
    const response = await axios.get<News[]>(`${apiUrl}/get-all-news`);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    throw new Error(error.response?.data?.message || "Error al obtener noticias");
  }
}

// 🔹 Obtener solo noticias válidas
export async function getValidNews(): Promise<News[]> {
  try {
    const response = await axios.get<News[]>(`${apiUrl}/get-valid-news`);
    return response.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    throw new Error(
      error.response?.data?.message || "Error al obtener noticias válidas"
    );
  }
}

// 🔹 Obtener noticia por ID
export async function getNewsById(newsId: number): Promise<News> {
  try {
    const response = await axios.get<News>(`${apiUrl}/get-news-by-id`, {
      params: { newsId },
    });
    return response.data;
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    throw new Error(error.response?.data?.message || "Error al obtener la noticia");
  }
}
