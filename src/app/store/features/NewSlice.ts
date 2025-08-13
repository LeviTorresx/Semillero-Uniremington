import { createSlice } from "@reduxjs/toolkit";
import { News } from "@/app/types/New";

const initialState: News[] = [
  {
    id: "",
    title: "Participación en Congreso de Innovación",
    excerpt: "El semillero presentó un proyecto en el Congreso Nacional...",
    content: "Contenido completo de la noticia...",
    category: "EVENT",
    date: "2025-07-15",
    imageUrl: "/template.png",
    author: "Juan Pérez",
    slug: "participacion-en-congreso",
  },
  {
    id: "2",
    title: "Nuevo reconocimiento a la investigación",
    excerpt: "Nuestro semillero recibió un premio por su trabajo en...",
    content: "Contenido completo de la noticia...",
    category: "AWARDS",
    date: "2025-06-10",
    imageUrl: "/400x200.png",
    author: "María Gómez",
    slug: "reconocimiento-a-la-investigacion",
  },
  {
    id: "3",
    title: "Publicación de artículo en revista científica",
    excerpt: "Un nuevo artículo del semillero ha sido publicado en...",
    content: "Contenido completo de la noticia...",
    category: "PUBLICATION",
    date: "2024-05-20",
    imageUrl: "/template.png",
    author: "Carlos Ruiz",
    slug: "publicacion-articulo-revista",
  },

  {
    id: "4",
    title: "Evento de networking con empresas",
    excerpt:
      "Organizamos un evento para conectar estudiantes con empresas del sector.",
    content: "Contenido completo de la noticia...",
    category: "EVENT",
    date: "2024-04-15",
    imageUrl: "/400x200.png",
    author: "Laura Méndez",
    slug: "evento-networking-empresas",
  },
  {
    id: "5",
    title: "Semillero gana concurso de innovación",
    excerpt:
      "Nuestro proyecto fue seleccionado como el mejor en el concurso anual.",
    content: "Contenido completo de la noticia...",
    category: "AWARDS",
    date: "2024-03-05",
    imageUrl: "/template.png",
    author: "Andrés García",
    slug: "semillero-gana-concurso-innovacion",
  },
  {
    id: "6",
    title: "Nuevo proyecto de investigación iniciado",
    excerpt:
      "Iniciamos un nuevo proyecto sobre inteligencia artificial aplicada a la educación.",
    content: "Contenido completo de la noticia...",
    category: "PUBLICATION",
    date: "2024-02-10",
    imageUrl: "/400x200.png",
    author: "Fernanda Castillo",
    slug: "nuevo-proyecto-investigacion-ia",
  },
  {
    id: "7",
    title: "Semillero participa en feria de ciencia y tecnología",
    excerpt:
      "Presentamos nuestros proyectos en la feria anual de ciencia y tecnología.",
    content: "Contenido completo de la noticia...",
    category: "EVENT",
    date: "2024-01-20",
    imageUrl: "/400x200.png",
    author: "Luis Torres",
    slug: "participacion-feria-ciencia-tecnologia",
  },
];

const newSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action) => {
      return action.payload;
    },
    addNew: (state, action) => {
      state.push(action.payload);
    },
    updateNew: (state, action) => {
      const index = state.findIndex((n) => n.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteNew: (state, action) => {
      return state.filter((n) => n.id !== action.payload);
    },
  },
});

export default newSlice.reducer;
export const { setNews, addNew, updateNew, deleteNew } = newSlice.actions;
