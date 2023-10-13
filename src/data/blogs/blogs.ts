import { Blog } from "../../models/types/Blog";

const date = new Date();
const formatDate = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Esto es una prueba",
    description: "Esto es una descripción",
    content: "Esto es el contenido",
    lenguage: "javascript",
    date: formatDate,
    image: "https://picsum.photos/500/300",
    sections: [
      {
        id: 1,
        title: "Esto es una prueba",
        type: "text",
        content: "Esto es el contenido",
      },
      {
        id: 2,
        title: "Esto es una prueba",
        type: "image",
        content: "https://picsum.photos/500/300",
      },
      {
        id: 3,
        title: "Esto es una prueba",
        type: "code",
        content: "Esto es el contenido",
      },
    ],
  },
  {
    id: 2,
    title: "Esto es una prueba",
    description: "Esto es una descripción",
    content: "Esto es el contenido",
    lenguage: "react",
    date: formatDate,
    image: "https://picsum.photos/500/300",
    sections: [
      {
        id: 1,
        title: "Esto es una prueba",
        type: "text",
        content: "Esto es el contenido",
      },
      {
        id: 2,
        title: "Esto es una prueba",
        type: "image",
        content: "https://picsum.photos/500/300",
      },
      {
        id: 3,
        title: "Esto es una prueba",
        type: "code",
        content: "Esto es el contenido",
      },
    ],
  },
];
