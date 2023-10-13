export interface Blog {
  id: number | string;
  lenguage: Lenguage;
  title: string;
  description: string;
  content: string;
  image: string;
  sections: BlogSection[];
  date: string;
}

interface BlogSection {
  id: number;
  title: string;
  type: "text" | "image" | "code";
  content: string;
}

type Lenguage =
  | "javascript"
  | "react"
  | "curious"
  | "next"
  | "ux"
  | "ui"
  | "tailwind"
  | "node"
  | "typescript"
  | "me"
  | "general";
