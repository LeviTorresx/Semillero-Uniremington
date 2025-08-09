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