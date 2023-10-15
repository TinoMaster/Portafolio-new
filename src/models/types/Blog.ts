export interface Blog {
  id: string;
  category: BlogCategory;
  title: string;
  description: string;
  content: string;
  image: string;
  sections: BlogSection[];
  date: Date;
}

export interface BlogSection {
  id: number;
  title: string;
  type: "text" | "image" | "code";
  content: string;
}

export const ArrValidCategory: BlogCategory[] = [
  "javascript",
  "react",
  "next",
  "ui",
  "curious",
  "tailwind",
  "node",
  "typescript",
  "vsCode",
];

export type BlogCategory =
  | "javascript"
  | "react"
  | "next"
  | "ui"
  | "curious"
  | "tailwind"
  | "node"
  | "typescript"
  | "vsCode";
