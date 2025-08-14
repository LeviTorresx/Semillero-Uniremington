export interface Project {
  id: string;
  title: string;
  description: string;
  researchers: string[];
  status: string;
  area: string;
  year: number | string;
  indentiferArea: string;
  slug: string; 
}

export interface ProjectFilter {
  year: number | string;
  identifer: string;
  status: string;
}

