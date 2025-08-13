'use client';

import { useSelector } from "react-redux";
import ResearchAreaCard from "../../../components/research-lines/ResearchAreaCard";
import { RootState } from "@/app/store/store";

export default function ResearchLinesPage() {
  const RESEARCH_AREAS = useSelector((state: RootState) => state.researchLines);

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
          Líneas de Investigación
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Descubre nuestras áreas de investigación organizadas por campos
          específicos, donde la innovación y el conocimiento se unen para
          generar impacto.
        </p>
      </div>

      {/* Lista de áreas */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {RESEARCH_AREAS.map((area) => (
          <div key={area.name} className="flex justify-center">
            <ResearchAreaCard area={area} />
          </div>
        ))}
      </div>
    </div>
  );
}
