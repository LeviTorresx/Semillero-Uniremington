export interface Project {
  projectId: number;
  tittle: string;
  description: string;
  leaderId: number;
  researcherIds: number[];
  status: string;
  creationDate: number | string;
  endDate: number | string;
  researchArea: string;
  researchTopic: string;
  identifierArea: string;
  slug: string;
  valid: boolean;
  imageUrl: string;
  documentUrl: string;
}

export interface ProjectFormData
  extends Omit<Project, "imageUrl" | "documentName "> {
  image?: File;
  document?: File;
}

export interface ProjectFilter {
  year: number | string;
  identifer: string;
  status: string;
}

export interface ProjectRequest {
  tittle: string;
  description: string;
  leaderId: number;
  researcherIds: number[];
  status: string;
  creationDate: number | string;
  endDate: number | string;
  researchArea: string;
  researchTopic: string;
  identifierArea: string;
  slug: string;
  image?: File;
  document?: File;
}
