export interface Project {
  id: string;
  title: string;
  description: string;
  researchers: string[];
  status: string;
  area: string;
  year: number | string;
  indentifer: string;
}

export interface ProjectFilter {
  year: number | string;
  identifer: string;
  status: string;
}

