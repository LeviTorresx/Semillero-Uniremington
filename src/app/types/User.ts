import { Project } from "./Project";

export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  role: string ;
  password: string | null;
  projects: Project[];
}
