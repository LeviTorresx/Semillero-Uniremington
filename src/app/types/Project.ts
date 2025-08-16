import { User } from "./User";

export interface Project {
  id: string;
  title: string;
  description: string;
  leader: User;
  researchers: User[];
  status: string;
  area: string;
  creationDate: number | string;
  endDate: number | string;
  indentiferArea: string;
  slug: string;
  valid: boolean;
  image?: Blob | MediaSource;
  document?: string;
}

export interface ProjectFilter {
  year: number | string;
  identifer: string;
  status: string;
}
