import { Project } from "@/app/types/Project";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.length > 0 ? (
        projects.map((p, i) => <ProjectCard key={i} {...p} />)
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No hay proyectos que coincidan con los filtros.
        </p>
      )}
    </div>
  );
}
