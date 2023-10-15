import { Blog } from "../../models/types/Blog";

const date = new Date();

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Creacion de arreglos",
    description: "Mejor no intentar construir un arreglo con estas condiciones",
    content:
      "Claro, puedo ayudarte con eso. Si estás buscando __link:https://prueba.com**nombre información sobre cómo copiar y pegar párrafos en programación web, la función que suele utilizarse en JavaScript es document.execCommand('copy'). Esta función permite copiar el contenido de un elemento HTML o una selección de texto al portapapeles del usuario. Luego, puedes pegar ese contenido en otro lugar.",
    category: "javascript",
    date: date,
    image: "https://picsum.photos/500/300",
    sections: [
      {
        id: 1,
        title: "Esto es una prueba",
        type: "text",
        content:
          "2-Claro, puedo ayudarte con eso. Si estás __link:https://prueba.com**nombre buscando información sobre cómo copiar y pegar párrafos en programación web, la función que suele utilizarse en JavaScript es document.execCommand('copy'). Esta función permite copiar el contenido de un elemento HTML o una selección de texto al portapapeles del usuario. Luego, puedes pegar ese contenido en otro lugar.",
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
    id: "2",
    title: "Esto es una prueba",
    description: "Esto es una descripción",
    content:
      "Claro, puedo ayudarte con eso. Si estás buscando información sobre cómo copiar y pegar párrafos en programación web, la función que suele utilizarse en JavaScript es document.execCommand('copy'). Esta función permite copiar el contenido de un elemento HTML o una selección de texto al portapapeles del usuario. Luego, puedes pegar ese contenido en otro lugar.",
    category: "react",
    date: date,
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
    id: "3",
    title: "Esto es una prueba",
    description: "Esto es una descripción",
    content: "Esto es el contenido",
    category: "typescript",
    date: date,
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
    id: "4",
    title: "Esto es una prueba",
    description: "Esto es una descripción",
    content: "Esto es el contenido",
    category: "node",
    date: date,
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
