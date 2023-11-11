import { Colors } from "../models/types/Color";
import { comentBlog, createBlog, knowMyBlog } from "../utils/svgs";

interface SectionBlogHome {
  title: string;
  description: string;
  img: string;
  color?: Colors;
  reverse: boolean;
}

export const sectionsBlogHome: SectionBlogHome[] = [
  {
    title: "Que encontraras en el",
    description:
      "Explora el mundo de la programación web en mi blog. Desde JavaScript hasta las últimas tendencias, encontrarás contenido valioso para aprender y crear. ¡Bienvenido a mi viaje de aprendizaje y desarrollo web!",
    img: knowMyBlog,
    color: "primary",
    reverse: true,
  },
  {
    title: "Comenta y participa",
    description:
      "¡Tu opinión cuenta! Interactúa y comenta en mis publicaciones. Comparte tus ideas y preguntas sobre tecnologías web en un espacio de aprendizaje colaborativo.",
    img: comentBlog,
    color: "third",
    reverse: false,
  },
  {
    title: "Desafíos de Programación",
    description:
      " Acepta desafíos de codificación y proyectos colaborativos. Únete a la comunidad para resolver problemas juntos, desarrollar proyectos emocionantes y aprender en equipo.",
    img: createBlog,
    color: "secondary",
    reverse: true,
  },
];
