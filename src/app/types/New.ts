
export interface News {
  newId:number;
  tittle: string;
  excerpt: string;
  content: string;
  category: "PUBLICATION" | "EVENT" | "AWARDS" | "OTHER";
  date: string;
  imageUrl: string;
  authorId: number;
  slug: string;
  valid: boolean;
}

export interface NewsFormData extends Omit<News, "imageUrl"> {
  image?: File;
}

export interface NewsRequest {
  tittle: string;
  excerpt: string;
  content: string;
  category: "PUBLICATION" | "EVENT" | "AWARDS" | "OTHER";
  date: string;
  image?: File;
  authorId: number;
  slug: string;
  valid: boolean;
}
