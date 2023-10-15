import { Blog } from "../../models/types/Blog";

const date = new Date();

export const blogs: Blog[] = [
  {
    id: "1",
    title: "11 Amazing New JavaScript Features in ES13",
    description:
      "This blog post is available as a convenient and portable e-book",
    content:
      "Like a lot of other programming languages, JavaScript is constantly evolving. Every year, the language is made more powerful with new capabilities that let developers write more expressive and concise code.Let’s explore the most recent features added in ECMAScript 2022 (ES13), and see examples of their usage to understand them better.",
    category: "javascript",
    date: date,
    image:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*ajjbyowzdPmB3YUgmUkZNA.png",
    sections: [
      {
        id: 1,
        title: "1.Class Field Declarations",
        type: "text",
        content:
          "Before ES13, class fields could only be declared in the constructor. Unlike in many other languages, we could not declare or define them in the outermost scope of the class. __link:https://prueba.com**nombre buscando aScript es document.execCommande un elemto al portapapeles del usuario. Luego, puedes pegar ese contenido en otro lugar.",
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
        content: `class Car {
    constructor() {
      this.color = 'blue';
      this.age = 2;
    }
  }
     const car = new Car();
   console.log(car.color); // blue
  console.log(car.age); // 2 `,
      },
      {
        id: 4,
        title: "1.Class Field Declarations",
        type: "text",
        content:
          "Before ES13, class fields could only be declared in the constructor. Unlike in many other languages, we could not declare or define them in the outermost scope of the class. __link:https://prueba.com**nombre buscando aScript es document.execCommande un elemto al portapapeles del usuario. Luego, puedes pegar ese contenido en otro lugar.",
      },
      {
        id: 5,
        title: "Esto es una prueba",
        type: "image",
        content: "https://picsum.photos/500/300",
      },
      {
        id: 6,
        title: "Esto es una prueba",
        type: "code",
        content: `class Car {
    constructor() {
      this.color = 'blue';
      this.age = 2;
    }
  }
  const car = new Car();
  console.log(car.color); // blue
  console.log(car.age); // 2 `,
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
