"use client";

import ProjectForm from "@/app/components/projects/ProjectForm";
import { RootState, AppDispatch } from "@/app/store/store";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Project, ProjectRequest } from "@/app/types/Project";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { editProjectThunk } from "@/app/store/thunks/projectsThunks";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export default function EditProjectPage() {
  const { slug } = useParams();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const MySwal = withReactContent(Swal);

  const researchLines = useSelector((state: RootState) => state.researchLines);
  const project = useSelector((state: RootState) =>
    state.projects.projects.find((p) => p.slug === slug)
  );
  const [projectData, setProjectData] = useState<(Project & { image?: File, document?: File } ) | null>(null);

  useEffect(() => {
    if (!project) {
      router.push("/member");
    }
  }, [project, router]);

  useEffect(() => {
    if (project) {
      setProjectData({... project});
    }
  }, [project]);

  if (!projectData) return <div>Cargando...</div>;

  // Manejo de cambios
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (files && files.length > 0) {
      setProjectData((prev) => (prev ? { ...prev, [name]: files[0] } : prev));
    } else {
      setProjectData((prev) => (prev ? { ...prev, [name]: value } : prev));
    }
  };

  // Manejo de envío
// Manejo de envío
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!projectData) return;

  const editedProject : ProjectRequest = {
    tittle : projectData.tittle,
    description: projectData.description,
    creationDate: projectData.creationDate,
    endDate: projectData.endDate,
    leaderId: projectData.leaderId,
    identifierArea: projectData.identifierArea,
    researchArea: projectData.researchArea,
    researchesIds: projectData.researchesIds,
    researchTopic :projectData.researchTopic,
    slug : projectData.slug,
    status: projectData.status,
    document: projectData.document,
    image: projectData.image

  }

  try {
    await dispatch(
      editProjectThunk({
        projectId: projectData.projectId,
        projectData: editedProject,
      })
    );

    MySwal.fire("¡Éxito!", "Proyecto actualizado con éxito", "success");
    console.log("Proyecto actualizado:", editedProject);
  } catch (error) {
    console.error("Error actualizando el proyecto:", error);
    MySwal.fire("Error", "No se pudo actualizar el proyecto", "error");
  }
};


  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Editar Proyecto</h1>
      <ProjectForm
        formData={projectData}
        researchLines={researchLines}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
