// src/app/types/ResearchLine.ts
export type ResearchTopic = {
  name: string;
  url: string;
};

export type ResearchArea = {
  name: string;
  topics: ResearchTopic[];
};

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    name: "Ingeniería de Sistemas",
    topics: [
      { name: "Inteligencia Artificial", url: "/ai" },
      { name: "Desarrollo Web", url: "/web-development" },
      { name: "Seguridad informática", url: "/cybersecurity" },
      { name: "Transformación Digital", url: "/digital-transformation" },
    ],
  },
  {
    name: "Contaduría Pública",
    topics: [
      { name: "Finanzas y gestión pública", url: "/public-finance" },
      { name: "Auditoría digital", url: "/digital-audit" },
      { name: "NIIF", url: "/ifrs" },
      { name: "Contabilidad y tecnología", url: "/accounting-technology" },
    ],
  },
];
