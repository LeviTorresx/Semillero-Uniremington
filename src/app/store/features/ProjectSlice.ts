import { createSlice } from "@reduxjs/toolkit";
import { Project } from "@/app/types/Project";

const initialState: Project[] = [
  // Ingeniería de Sistemas - Inteligencia Artificial
  {
    id: "1",
    title: "Sistema de IA para análisis de datos empresariales",
    description:
      "Desarrollo de modelos de machine learning para predecir tendencias de mercado en PYMEs.",
    researchers: ["Juan Pérez", "María Gómez"],
    status: "En curso",
    year: 2025,
    area: "Inteligencia Artificial",
    indentiferArea: "ai",
    slug: "sistema-ia-analisis-datos-empresariales",
  },
  // Ingeniería de Sistemas - Desarrollo Web
  {
    id: "2",
    title: "Plataforma web para gestión académica",
    description:
      "Aplicación responsive para la administración de cursos, calificaciones y asistencia.",
    researchers: ["Laura Méndez", "Carlos Ruiz"],
    status: "Finalizado",
    year: 2024,
    area: "Desarrollo Web",
    indentiferArea: "web-dev",
    slug: "plataforma-web-gestion-academica",
  },
  // Ingeniería de Sistemas - Seguridad informática
  {
    id: "3",
    title: "Sistema de detección de intrusiones en red",
    description:
      "Implementación de un IDS basado en análisis de tráfico con inteligencia artificial.",
    researchers: ["Luis Torres", "Fernanda Castillo"],
    status: "En curso",
    year: 2025,
    area: "Seguridad informática",
    indentiferArea: "cybersec",
    slug: "sistema-deteccion-intrusiones-red",
  },
  // Ingeniería de Sistemas - Transformación Digital
  {
    id: "4",
    title: "Automatización de procesos administrativos",
    description:
      "Integración de RPA para reducir tiempos en trámites internos universitarios.",
    researchers: ["Andrés García", "Valentina Rojas"],
    status: "Finalizado",
    year: 2023,
    area: "Transformación Digital",
    indentiferArea: "digital-transformation",
    slug: "automatizacion-procesos-administrativos",
  },
  // Contaduría Pública - Finanzas y gestión pública
  {
    id: "5",
    title: "Optimización de presupuestos municipales",
    description:
      "Uso de modelos financieros para mejorar la distribución de recursos públicos.",
    researchers: ["Pedro López", "Ana Torres"],
    status: "En curso",
    year: 2025,
    area: "Finanzas y gestión pública",
    indentiferArea: "public-finance",
    slug: "optimizacion-presupuestos-municipales",
  },
  // Contaduría Pública - Auditoría digital
  {
    id: "5",
    title: "Auditoría digital en entes públicos",
    description:
      "Implementación de sistemas de control interno con trazabilidad digital.",
    researchers: ["Camila Herrera", "Miguel López"],
    status: "Finalizado",
    year: 2024,
    area: "Auditoría digital",
    indentiferArea: "digital-audit",
    slug: "auditoria-digital-entes-publicos",
  },
  // Contaduría Pública - NIIF
  {
    id: "6",
    title: "Implementación de NIIF para PYMEs",
    description:
      "Adaptación contable de empresas medianas a las Normas Internacionales de Información Financiera.",
    researchers: ["Sofía Torres", "Diego Martínez"],
    status: "En curso",
    year: 2025,
    area: "NIIF",
    indentiferArea: "ifrs",
    slug: "implementacion-niif-pymes",
  },
  // Contaduría Pública - Contabilidad y tecnología
  {
    id: "7",
    title: "Contabilidad automatizada en la nube",
    description:
      "Desarrollo de un sistema cloud para registrar y analizar operaciones contables en tiempo real.",
    researchers: ["Julián Ortega", "Paula Sánchez"],
    status: "Finalizado",
    year: 2024,
    area: "Contabilidad y tecnología",
    indentiferArea: "accounting-tech",
    slug: "contabilidad-automatizada-nube",
  },
  // Ingeniería de Sistemas - Inteligencia Artificial
  {
    id: "8",
    title: "Asistente virtual para orientación académica",
    description:
      "Chatbot basado en IA para guiar a estudiantes en procesos académicos y administrativos.",
    researchers: ["Ricardo Moreno", "Natalia Pérez"],
    status: "En curso",
    year: 2025,
    area: "Inteligencia Artificial",
    indentiferArea: "ai",
    slug: "asistente-virtual-orientacion-academica",
  },
  // Contaduría Pública - Auditoría digital
  {
    id: "9",
    title: "Blockchain para trazabilidad contable",
    description:
      "Aplicación de blockchain para garantizar la integridad y transparencia de registros contables.",
    researchers: ["Elena Jiménez", "Santiago Vargas"],
    status: "Finalizado",
    year: 2023,
    area: "Auditoría digital",
    indentiferArea: "digital-audit",
    slug: "blockchain-trazabilidad-contable",
  },
];

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      return action.payload;
    },
    addProject: (state, action) => {
      state.push(action.payload);
    },
    updateProject: (state, action) => {
      const index = state.findIndex(
        (project) => project.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteProject: (state, action) => {
      return state.filter((project) => project.id !== action.payload);
    },
  },
});

export default projectSlice.reducer;
export const { setProjects, addProject, updateProject, deleteProject } =
  projectSlice.actions;
