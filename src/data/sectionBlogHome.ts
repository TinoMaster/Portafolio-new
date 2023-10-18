import { Colors } from "../models/types/Color";
import { comentBlog, createBlog, knowMyBlog } from "../utils/svgs";

interface SectionBlogHome {
  title: string;
  description: string;
  img: string;
  color: Colors;
  reverse: boolean;
}

export const sectionsBlogHome: SectionBlogHome[] = [
  {
    title: "Que encontraras en el",
    description: "Aquí encontrarás mis últimos artículos",
    img: knowMyBlog,
    color: "primary",
    reverse: true,
  },
  {
    title: "Comenta y participa",
    description: "Aquí encontrarás mis últimos artículos",
    img: comentBlog,
    color: "third",
    reverse: false,
  },
  {
    title: "Crea tus porpios blogs",
    description: "Aquí encontrarás mis últimos artículos",
    img: createBlog,
    color: "secondary",
    reverse: true,
  },
];
