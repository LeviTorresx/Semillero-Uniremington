import { News } from "../types/New";
import { Project } from "../types/Project";
import { ResearchArea } from "../types/ResearchLine";
import { User } from "../types/User";

export const researchLinesMocks: ResearchArea[] = [
  {
    id: "1",
    name: "Ingeniería de Sistemas",
    topics: [
      { name: "Inteligencia Artificial", url: "/ai", identifer: "ai" },
      { name: "Desarrollo Web", url: "/web-development", identifer: "web-dev" },
      {
        name: "Seguridad informática",
        url: "/cybersecurity",
        identifer: "cybersec",
      },
      {
        name: "Transformación Digital",
        url: "/digital-transformation",
        identifer: "digital-transformation",
      },
    ],
  },
  {
    id: "2",
    name: "Contaduría Pública",
    topics: [
      {
        name: "Finanzas y gestión pública",
        url: "/public-finance",
        identifer: "public-finance",
      },
      {
        name: "Auditoría digital",
        url: "/digital-audit",
        identifer: "digital-audit",
      },
      { name: "NIIF", url: "/ifrs", identifer: "ifrs" },
      {
        name: "Contabilidad y tecnología",
        url: "/accounting-technology",
        identifer: "accounting-tech",
      },
    ],
  },
];

// Lista de proyectos
export const projectsMock: Project[] = [
  // Ingeniería de Sistemas - Inteligencia Artificial
  {
    id: "1",
    title: "Sistema de IA para análisis de datos empresariales",
    description:
      "Desarrollo de modelos de machine learning para predecir tendencias de mercado en PYMEs.",
    researchers: [],
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
    researchers: [],
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
    researchers: [],
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
    researchers: [],
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
    researchers: [],
    status: "En curso",
    year: 2025,
    area: "Finanzas y gestión pública",
    indentiferArea: "public-finance",
    slug: "optimizacion-presupuestos-municipales",
  },
  // Contaduría Pública - Auditoría digital
  {
    id: "6",
    title: "Auditoría digital en entes públicos",
    description:
      "Implementación de sistemas de control interno con trazabilidad digital.",
    researchers: [],
    status: "Finalizado",
    year: 2024,
    area: "Auditoría digital",
    indentiferArea: "digital-audit",
    slug: "auditoria-digital-entes-publicos",
  },
  // Contaduría Pública - NIIF
  {
    id: "7",
    title: "Implementación de NIIF para PYMEs",
    description:
      "Adaptación contable de empresas medianas a las Normas Internacionales de Información Financiera.",
    researchers: [],
    status: "En curso",
    year: 2025,
    area: "NIIF",
    indentiferArea: "ifrs",
    slug: "implementacion-niif-pymes",
  },
  // Contaduría Pública - Contabilidad y tecnología
  {
    id: "8",
    title: "Contabilidad automatizada en la nube",
    description:
      "Desarrollo de un sistema cloud para registrar y analizar operaciones contables en tiempo real.",
    researchers: [],
    status: "Finalizado",
    year: 2024,
    area: "Contabilidad y tecnología",
    indentiferArea: "accounting-tech",
    slug: "contabilidad-automatizada-nube",
  },
  // Ingeniería de Sistemas - Inteligencia Artificial
  {
    id: "9",
    title: "Asistente virtual para orientación académica",
    description:
      "Chatbot basado en IA para guiar a estudiantes en procesos académicos y administrativos.",
    researchers: [],
    status: "En curso",
    year: 2025,
    area: "Inteligencia Artificial",
    indentiferArea: "ai",
    slug: "asistente-virtual-orientacion-academica",
  },
  // Contaduría Pública - Auditoría digital
  {
    id: "10",
    title: "Blockchain para trazabilidad contable",
    description:
      "Aplicación de blockchain para garantizar la integridad y transparencia de registros contables.",
    researchers: [],
    status: "Finalizado",
    year: 2023,
    area: "Auditoría digital",
    indentiferArea: "digital-audit",
    slug: "blockchain-trazabilidad-contable",
  },
];

// Lista de usuarios
export const usersMock: User[] = [
  {
    id: "1",
    name: "Levi Torres",
    phone: "3001234567",
    email: "levi@example.com",
    role: "Miembro",
    password: null,
  },
  {
    id: "2",
    name: "María Gómez",
    phone: "3009876543",
    email: "maria@example.com",
    role: "Investigador",
    password: null,
  },
  {
    id: "3",
    name: "Carlos Ramírez",
    phone: "3012345678",
    email: "carlos@example.com",
    role: "Administrador",
    password: null,
  },
];

export const newsMock: News[] = [
  {
    id: "1",
    title: "Participación en Congreso de Innovación",
    excerpt: "El semillero presentó un proyecto en el Congreso Nacional...",
    content: "Contenido completo de la noticia...",
    category: "EVENT",
    date: "2025-07-15",
    imageUrl: "/template.png",
    author: [],
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
    author: [],
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
    author: [],
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
    author: [],
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
    author: [],
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
    author: [],
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
    author: [],
    slug: "participacion-feria-ciencia-tecnologia",
  },
];

// Asignar investigadores a los proyectos (referencia circular)
projectsMock[0].researchers = [usersMock[0], usersMock[2]];
projectsMock[1].researchers = [usersMock[0], usersMock[1]];
projectsMock[2].researchers = [usersMock[2]];

newsMock[0].author = [usersMock[1]];
newsMock[1].author = [usersMock[2]];
newsMock[2].author = [usersMock[0], usersMock[1]];
newsMock[3].author = [usersMock[1]];
