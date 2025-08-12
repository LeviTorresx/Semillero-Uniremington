// src/app/research-lines/components/ResearchTopicList.tsx
import { ResearchTopic } from "@/app/types/ResearchLine";
import Link from "next/link";
import { FaCircle } from "react-icons/fa6";

interface Props {
  topics: ResearchTopic[];
}

export default function ResearchTopicList({ topics }: Props) {
  return (
    <ul className="space-y-3">
      {topics.map((topic) => (
        <li
          key={topic.name}
          className="flex items-center p-3 bg-gray-50 rounded-lg shadow-sm hover:shadow-md hover:bg-blue-300 transition-all"
        >
          <Link
            href={`/projects?identifer=${encodeURIComponent(topic.identifer)}`}
            className="flex items-center w-full"
          >
            <FaCircle className="text-blue-500 text-xs mr-3" />
            <span className="text-gray-800 font-medium">{topic.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
