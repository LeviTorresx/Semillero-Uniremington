// src/app/research-lines/components/ResearchAreaCard.tsx
import { ResearchArea } from "@/app/types/ResearchLine";
import ResearchTopicList from "./ResearchTopicList";
import { FaFlask } from "react-icons/fa6";

interface Props {
  area: ResearchArea;
}

export default function ResearchAreaCard({ area }: Props) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all w-full ">
      <div className="flex items-center mb-4">
        <div className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full mr-3">
          <FaFlask className="text-lg" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">{area.name}</h2>
      </div>
      <ResearchTopicList topics={area.topics} />
    </div>
  );
}
