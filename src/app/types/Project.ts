import { User } from "./User";

export interface Project {
  id: string;
  title: string;
  description: string;
  researchers: User[];
  status: string;
  area: string;
  year: number | string;
  indentiferArea: string;
  slug: string;
  validate?: boolean;
  image?: string;
}

export interface ProjectFilter {
  year: number | string;
  identifer: string;
  status: string;
}
