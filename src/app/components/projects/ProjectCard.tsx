import { Project } from "@/app/types/Project";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  researchers,
  status,
  area,
  year,
}: Project) {
  return (
    
    <Link href={`/${title}`} className="bg-white shadow-md rounded-lg p-5 border border-blue-800 hover:shadow-xl transition">
      <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <p className="text-sm text-gray-500 mb-2">
        <strong>Año:</strong> {year}
      </p>
      <p className="text-sm text-gray-500 mb-2">
        <strong>Área:</strong> {area}
      </p>
      <p className="text-sm text-gray-500">
        <strong>Investigadores:</strong> {researchers.join(", ")}
      </p>
      <span
        className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold ${
          status === "En curso"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {status}
      </span>
      
    </Link>
  );
}
