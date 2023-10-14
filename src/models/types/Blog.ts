export interface Blog {
  id: number | string;
  category: BlogCategory;
  title: string;
  description: string;
  content: string;
  image: string;
  sections: BlogSection[];
  date: string;
}

export interface BlogSection {
  id: number;
  title: string;
  type: "text" | "image" | "code";
  content: string;
}

export type BlogCategory =
  | "general"
  | "javascript"
  | "react"
  | "next"
  | "ui"
  | "curious"
  | "tailwind"
  | "node"
  | "typescript"
  | "me";
