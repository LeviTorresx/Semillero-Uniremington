export interface Project {
  projectId: number;
  tittle: string;
  description: string;
  researcherIds: number[];
  leaderId: number;
  status: string;
  creationDate: string;
  endDate: string;
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
  year: string;
  identifer: string;
  status: string;
}

export interface ProjectRequest {
  tittle: string;
  description: string;
  researcherIds: number[];
  leaderId: number;
  status: string;
  creationDate: string;
  endDate: string;
  researchArea: string;
  researchTopic: string;
  identifierArea: string;
  slug: string;
  image?: File;
  document?: File;
}
