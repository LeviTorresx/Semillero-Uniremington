import { ResearchArea, ResearchTopic } from "./ResearchLine";
import { User } from "./User";

export interface Project {
  id: string;
  title: string;
  description: string;
  leader: User;
  researchers: User[];
  status: string;
  creationDate: number | string;
  endDate: number | string;
  researchArea:string;
  researchTopic:string;
  identiferArea:string;
  slug: string;
  valid: boolean;
  imageUrl: string;
  documentUrl: string;
}

export interface ProjectFormData
  extends Omit<Project, "imageUrl" | "documentName"> {
  image?: File;
  document?: File;
}

export interface ProjectFilter {
  year: number | string;
  identifer: string;
  status: string;
}
