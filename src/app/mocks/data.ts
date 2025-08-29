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

// Lista de usuarios
export const usersMock: User[] = [
  {
    userId: 1,
    name: "Levi Torres",
    phone: "3001234567",
    email: "levi@example.com",
    role: "MEMBER",
    password: "",
    valid: true,
  },
  {
    userId: 2,
    name: "María Gómez",
    phone: "3009876543",
    email: "maria@example.com",
    role: "MEMBER",
    password: "",
    valid: true,
  },
  {
    userId: 3,
    name: "Carlos Ramírez",
    phone: "3012345678",
    email: "carlos@example.com",
    role: "MEMBER",
    password: "",
    valid: true,
  },
];

// Lista de proyectos
export const projectsMock: Project[] = [
  // Ingeniería de Sistemas - Inteligencia Artificial
  {
    projectId: 1,
    tittle: "Sistema de IA para análisis de datos empresariales",
    description:
      "Desarrollo de modelos de machine learning para predecir tendencias de mercado en PYMEs.",
    leaderId: usersMock[1].userId,
    researcherIds: [usersMock[0].userId, usersMock[1].userId],
    status: "En curso",
    creationDate: "2025-12-12",
    endDate: "2026-12-12",
    researchArea: researchLinesMocks[0].name,
    researchTopic: researchLinesMocks[0].topics[0].name,
    identifierArea: researchLinesMocks[0].topics[0].identifer,
    slug: "sistema-ia-analisis-datos-empresariales",
    imageUrl: "/template.png",
    documentUrl: "/document.pdf",
    valid: true,
  },
  // Ingeniería de Sistemas - Desarrollo Web
  {
    projectId: 2,
    tittle: "Plataforma web para gestión académica",
    description:
      "Aplicación responsive para la administración de cursos, calificaciones y asistencia.",
    leaderId: usersMock[1].userId,
    researcherIds: [usersMock[0].userId, usersMock[1].userId],
    status: "Finalizado",
    creationDate: "2024",
    endDate: "2024",
    researchArea: researchLinesMocks[0].name,
    researchTopic: researchLinesMocks[0].topics[1].name,
    identifierArea: researchLinesMocks[0].topics[1].identifer,
    slug: "plataforma-web-gestion-academica",
    imageUrl: "/400x200.png",
    documentUrl: "/document.pdf",
    valid: true,
  },
  // Ingeniería de Sistemas - Seguridad informática
  {
    projectId: 3,
    tittle: "Sistema de detección de intrusiones en red",
    description:
      "Implementación de un IDS basado en análisis de tráfico con inteligencia artificial.",
    leaderId: usersMock[0].userId,
    researcherIds: [usersMock[0].userId, usersMock[1].userId],
    status: "En curso",
    creationDate: "2025",
    endDate: "2026",
    researchArea: researchLinesMocks[0].name,
    researchTopic: researchLinesMocks[0].topics[2].name,
    identifierArea: researchLinesMocks[0].topics[2].identifer,
    slug: "sistema-deteccion-intrusiones-red",
    imageUrl: "/template.png",
    documentUrl: "/document.pdf",
    valid: true,
  },
  // Ingeniería de Sistemas - Transformación Digital
  {
    projectId: 4,
    tittle: "Automatización de procesos administrativos",
    description:
      "Integración de RPA para reducir tiempos en trámites internos universitarios.",
    leaderId: usersMock[0].userId,
    researcherIds: [],
    status: "Finalizado",
    creationDate: "2023",
    endDate: "2023",
    researchArea: researchLinesMocks[0].name,
    researchTopic: researchLinesMocks[0].topics[3].name,
    identifierArea: researchLinesMocks[0].topics[3].identifer,
    slug: "automatizacion-procesos-administrativos",
    imageUrl: "/400x200.png",
    documentUrl: "/document.pdf",
    valid: true,
  },
  // Contaduría Pública - Finanzas y gestión pública
  {
    projectId: 5,
    tittle: "Optimización de presupuestos municipales",
    description:
      "Uso de modelos financieros para mejorar la distribución de recursos públicos.",
    leaderId: usersMock[2].userId,
    researcherIds: [],
    status: "En curso",
    creationDate: "2025",
    endDate: "2027",
    researchArea: researchLinesMocks[1].name,
    researchTopic: researchLinesMocks[1].topics[0].name,
    identifierArea: researchLinesMocks[1].topics[0].identifer,
    slug: "optimizacion-presupuestos-municipales",
    imageUrl: "/template.png",
    documentUrl: "/document.pdf",
    valid: true,
  },
  // Contaduría Pública - Auditoría digital
  {
    projectId: 6,
    tittle: "Auditoría digital en entes públicos",
    description:
      "Implementación de sistemas de control interno con trazabilidad digital.",
    leaderId: usersMock[2].userId,
    researcherIds: [],
    status: "Finalizado",
    creationDate: 2023,
    endDate: "2024",
    researchArea: researchLinesMocks[1].name,
    researchTopic: researchLinesMocks[1].topics[1].name,
    identifierArea: researchLinesMocks[1].topics[1].identifer,
    slug: "auditoria-digital-entes-publicos",
    imageUrl: "/400x200.png",
    documentUrl: "/document.pdf",
    valid: true,
  },
  // Contaduría Pública - NIIF
  {
    projectId: 7,
    tittle: "Implementación de NIIF para PYMEs",
    description:
      "Adaptación contable de empresas medianas a las Normas Internacionales de Información Financiera.",
    leaderId: usersMock[2].userId,
    researcherIds: [],
    status: "En curso",
    creationDate: "2025",
    endDate: "2028",
    researchArea: researchLinesMocks[1].name,
    researchTopic: researchLinesMocks[1].topics[2].name,
    identifierArea: researchLinesMocks[1].topics[2].identifer,
    slug: "implementacion-niif-pymes",
    imageUrl: "/template.png",
    documentUrl: "/document.pdf",
    valid: true,
  },
  // Contaduría Pública - Contabilidad y tecnología
  {
    projectId: 8,
    tittle: "Contabilidad automatizada en la nube",
    description:
      "Desarrollo de un sistema cloud para registrar y analizar operaciones contables en tiempo real.",
    leaderId: usersMock[2].userId,
    researcherIds: [],
    status: "Finalizado",
    creationDate: "2025",
    endDate: "2025",
    researchArea: researchLinesMocks[1].name,
    researchTopic: researchLinesMocks[1].topics[3].name,
    identifierArea: researchLinesMocks[1].topics[3].identifer,
    slug: "contabilidad-automatizada-nube",
    imageUrl: "/400x200.png",
    documentUrl: "/document.pdf",
    valid: true,
  },
  // Ingeniería de Sistemas - Inteligencia Artificial
  {
    projectId: 9,
    tittle: "Asistente virtual para orientación académica",
    description:
      "Chatbot basado en IA para guiar a estudiantes en procesos académicos y administrativos.",
    leaderId: usersMock[2].userId,
    researcherIds: [],
    status: "En curso",
    creationDate: "2025",
    endDate: "2030",
    researchArea: researchLinesMocks[0].name,
    researchTopic: researchLinesMocks[0].topics[0].name,
    identifierArea: researchLinesMocks[0].topics[0].identifer,
    slug: "asistente-virtual-orientacion-academica",
    imageUrl: "/400x200.png",
    documentUrl: "/document.pdf",
    valid: true,
  },
  // Contaduría Pública - Auditoría digital
  {
    projectId: 10,
    tittle: "Blockchain para trazabilidad contable",
    description:
      "Aplicación de blockchain para garantizar la integridad y transparencia de registros contables.",
    leaderId: usersMock[2].userId,
    researcherIds: [],
    status: "Finalizado",
    creationDate: "2023",
    endDate: "2023",
    researchArea: researchLinesMocks[1].name,
    researchTopic: researchLinesMocks[1].topics[3].name,
    identifierArea: researchLinesMocks[1].topics[3].identifer,
    slug: "blockchain-trazabilidad-contable",
    imageUrl: "/400x200.png",
    documentUrl: "/document.pdf",
    valid: false,
  },
];

export const newsMock: News[] = [
  {
    newId: 1,
    tittle: "Participación en Congreso de Innovación",
    excerpt: "El semillero presentó un proyecto en el Congreso Nacional...",
    content: "Contenido completo de la noticia...",
    category: "EVENT",
    date: "2025-07-15",
    imageUrl: "/template.png",
    authorId: 0,
    slug: "participacion-en-congreso",
    valid: true,
  },
  {
    newId: 2,
    tittle: "Nuevo reconocimiento a la investigación",
    excerpt: "Nuestro semillero recibió un premio por su trabajo en...",
    content: "Contenido completo de la noticia...",
    category: "AWARDS",
    date: "2025-06-10",
    imageUrl: "/400x200.png",
    authorId: 0,
    slug: "reconocimiento-a-la-investigacion",
    valid: true,
  },
  {
    newId: 3,
    tittle: "Publicación de artículo en revista científica",
    excerpt: "Un nuevo artículo del semillero ha sido publicado en...",
    content: "Contenido completo de la noticia...",
    category: "PUBLICATION",
    date: "2024-05-20",
    imageUrl: "/template.png",
    authorId: 0,
    slug: "publicacion-articulo-revista",
    valid: true,
  },

  {
    newId: 4,
    tittle: "Evento de networking con empresas",
    excerpt:
      "Organizamos un evento para conectar estudiantes con empresas del sector.",
    content: "Contenido completo de la noticia...",
    category: "EVENT",
    date: "2024-04-15",
    imageUrl: "/400x200.png",
    authorId: 0,
    slug: "evento-networking-empresas",
    valid: true,
  },
  {
    newId: 5,
    tittle: "Semillero gana concurso de innovación",
    excerpt:
      "Nuestro proyecto fue seleccionado como el mejor en el concurso anual.",
    content: "Contenido completo de la noticia...",
    category: "AWARDS",
    date: "2024-03-05",
    imageUrl: "/template.png",
    authorId: 0,
    slug: "semillero-gana-concurso-innovacion",
    valid: true,
  },
  {
    newId: 6,
    tittle: "Nuevo proyecto de investigación iniciado",
    excerpt:
      "Iniciamos un nuevo proyecto sobre inteligencia artificial aplicada a la educación.",
    content: "Contenido completo de la noticia...",
    category: "PUBLICATION",
    date: "2024-02-10",
    imageUrl: "/400x200.png",
    authorId: 0,
    slug: "nuevo-proyecto-investigacion-ia",
    valid: true,
  },
  {
    newId: 7,
    tittle: "Semillero participa en feria de ciencia y tecnología",
    excerpt:
      "Presentamos nuestros proyectos en la feria anual de ciencia y tecnología.",
    content: "Contenido completo de la noticia...",
    category: "EVENT",
    date: "2024-01-20",
    imageUrl: "/400x200.png",
    authorId: 0,
    slug: "participacion-feria-ciencia-tecnologia",
    valid: false,
  },
];

// Asignar investigadores a los proyectos
newsMock[0].authorId = usersMock[1].userId;
newsMock[1].authorId = usersMock[2].userId;
newsMock[2].authorId = usersMock[0].userId;
newsMock[3].authorId = usersMock[1].userId;
