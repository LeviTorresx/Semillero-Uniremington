// src/app/types/ResearchLine.ts
export type ResearchTopic = {
  name: string;
  url: string;
  identifer: string; // Unique identifier for the topic
};

export type ResearchArea = {
  id: string; // Optional ID for the research area
  name: string;
  topics: ResearchTopic[];
};


