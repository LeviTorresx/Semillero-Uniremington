import { Suspense } from "react";
import ProjectPageContent from "../../../components/projects/ProjectPageContent";

export default function ProjectPage() {
  return (
    <Suspense fallback={<div>Cargando proyectos...</div>}>
      <ProjectPageContent />
    </Suspense>
  );
}
