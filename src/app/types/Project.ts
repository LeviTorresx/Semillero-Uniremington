export interface Project {
  title: string;
  description: string;
  researchers: string[];
  status: string;
  area: string;
  year: number | string;
}

export interface ProjectFilter {
  year: number | string;
  area: string;
  status: string;
}

// Ejemplo de datos mock
export const MOCK_PROJECTS : Project[] =  [
  // Ingeniería de Sistemas - Inteligencia Artificial
  {
    title: "Sistema de IA para análisis de datos empresariales",
    description:
      "Desarrollo de modelos de machine learning para predecir tendencias de mercado en PYMEs.",
    researchers: ["Juan Pérez", "María Gómez"],
    status: "En curso",
    year: 2025,
    area: "Inteligencia Artificial",
  },
  // Ingeniería de Sistemas - Desarrollo Web
  {
    title: "Plataforma web para gestión académica",
    description:
      "Aplicación responsive para la administración de cursos, calificaciones y asistencia.",
    researchers: ["Laura Méndez", "Carlos Ruiz"],
    status: "Finalizado",
    year: 2024,
    area: "Desarrollo Web",
  },
  // Ingeniería de Sistemas - Seguridad informática
  {
    title: "Sistema de detección de intrusiones en red",
    description:
      "Implementación de un IDS basado en análisis de tráfico con inteligencia artificial.",
    researchers: ["Luis Torres", "Fernanda Castillo"],
    status: "En curso",
    year: 2025,
    area: "Seguridad informática",
  },
  // Ingeniería de Sistemas - Transformación Digital
  {
    title: "Automatización de procesos administrativos",
    description:
      "Integración de RPA para reducir tiempos en trámites internos universitarios.",
    researchers: ["Andrés García", "Valentina Rojas"],
    status: "Finalizado",
    year: 2023,
    area: "Transformación Digital",
  },
  // Contaduría Pública - Finanzas y gestión pública
  {
    title: "Optimización de presupuestos municipales",
    description:
      "Uso de modelos financieros para mejorar la distribución de recursos públicos.",
    researchers: ["Pedro López", "Ana Torres"],
    status: "En curso",
    year: 2025,
    area: "Finanzas y gestión pública",
  },
  // Contaduría Pública - Auditoría digital
  {
    title: "Auditoría digital en entes públicos",
    description:
      "Implementación de sistemas de control interno con trazabilidad digital.",
    researchers: ["Camila Herrera", "Miguel López"],
    status: "Finalizado",
    year: 2024,
    area: "Auditoría digital",
  },
  // Contaduría Pública - NIIF
  {
    title: "Implementación de NIIF para PYMEs",
    description:
      "Adaptación contable de empresas medianas a las Normas Internacionales de Información Financiera.",
    researchers: ["Sofía Torres", "Diego Martínez"],
    status: "En curso",
    year: 2025,
    area: "NIIF",
  },
  // Contaduría Pública - Contabilidad y tecnología
  {
    title: "Contabilidad automatizada en la nube",
    description:
      "Desarrollo de un sistema cloud para registrar y analizar operaciones contables en tiempo real.",
    researchers: ["Julián Ortega", "Paula Sánchez"],
    status: "Finalizado",
    year: 2024,
    area: "Contabilidad y tecnología",
  },
  // Ingeniería de Sistemas - Inteligencia Artificial
  {
    title: "Asistente virtual para orientación académica",
    description:
      "Chatbot basado en IA para guiar a estudiantes en procesos académicos y administrativos.",
    researchers: ["Ricardo Moreno", "Natalia Pérez"],
    status: "En curso",
    year: 2025,
    area: "Inteligencia Artificial",
  },
  // Contaduría Pública - Auditoría digital
  {
    title: "Blockchain para trazabilidad contable",
    description:
      "Aplicación de blockchain para garantizar la integridad y transparencia de registros contables.",
    researchers: ["Elena Jiménez", "Santiago Vargas"],
    status: "Finalizado",
    year: 2023,
    area: "Auditoría digital",
  },
];