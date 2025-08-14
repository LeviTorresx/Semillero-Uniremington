export type ResearchTopic = {
  name: string;
  url: string;
  identifer: string;
};

export type ResearchArea = {
  id: string;
  name: string;
  topics: ResearchTopic[];
};
