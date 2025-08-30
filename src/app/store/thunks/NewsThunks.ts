import { createAsyncThunk } from "@reduxjs/toolkit";
import { News, NewsRequest } from "@/app/types/New";
import { createNews } from "@/app/apis/news/CreateNews";
import { editNews } from "@/app/apis/news/EditNews";
import { getAllNews } from "@/app/apis/news/GetsProjects";
import { approveNews } from "@/app/apis/news/ApproveNews";

// Obtener todas las noticias
export const fetchNews = createAsyncThunk<News[]>(
  "news/fetchNews",
  async () => {
    const response = await getAllNews();
    return response;
  }
);

// Crear noticia
export const createNewsThunk = createAsyncThunk<News, NewsRequest>(
  "news/createNews",
  async (newsData) => {
    const news = await createNews(newsData);
    return news;
  }
);

// Editar noticia
export const editNewsThunk = createAsyncThunk<
  News,
  { newsId: number; newsData: NewsRequest }
>("news/editNews", async ({ newsId, newsData }) => {
  const updatedNews = await editNews(newsId, newsData);
  return updatedNews;
});

//aprobar una noticia
export const approveNewsThunk = createAsyncThunk<
  { newId: number; message: string }, // retorno
  number // argumento
>("news/approveNews", async (newId) => {
  const message = await approveNews(newId);
  return { newId, message }; // devolvemos id + mensaje del backend
});
