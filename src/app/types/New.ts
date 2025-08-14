import { User } from "./User";

export interface News {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "PUBLICATION" | "EVENT" | "AWARDS" | "OTHER";
  date: string;
  imageUrl: string;
  author: User[];
  slug: string;
}
