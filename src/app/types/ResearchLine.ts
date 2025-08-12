// src/app/types/ResearchLine.ts
export type ResearchTopic = {
  name: string;
  url: string;
  identifer: string; // Unique identifier for the topic
};

export type ResearchArea = {
  name: string;
  topics: ResearchTopic[];
};

export const RESEARCH_AREAS: ResearchArea[] = [
  {
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
