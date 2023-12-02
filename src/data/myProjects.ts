import { FaGithub } from "react-icons/fa";
import { IProject } from "../models/types/Project";
import { appDebts, appLocal_dark, appMercado } from "../utils/images";
import { AiOutlineGlobal } from "react-icons/ai";

export const myProjects: IProject[] = [
  {
    name: "Manejo de deudas",
    description: [
      "Esta aplicación surgió de la necesidad recurrente de gestionar deudas con un amigo de manera eficiente.",
      "Permitió un control compartido de las deudas, enriqueciendo mi comprensión. Rastrea deudas con permisos, facilitando ajustes según las circunstancias.",
    ],
    image: appDebts,
    links: [
      {
        title: "APP",
        Icon: FaGithub,
        url: "https://github.com/TinoMaster/my_debts",
      },
      {
        title: "API",
        Icon: FaGithub,
        url: "https://github.com/TinoMaster/debts_api",
      },
      {
        title: "DEMO",
        Icon: AiOutlineGlobal,
        url: "https://debts.tinomaster.website/",
      },
    ],
    tegnologies: [
      { name: "React", description: "Prueba" },
      {
        name: "Tailwind",
        description:
          "CSS Framework para crear componentes de manera rapida y sencilla.",
      },
      {
        name: "Nodejs",
        description:
          "Servidor backend que se encarga de la gestión de las peticiones del cliente.",
      },
      {
        name: "Express",
        description:
          "Servidor web que permite realizar operaciones en el servidor como autenticación o conexiones a bases de datos.",
      },
      {
        name: "MongoDB",
        description:
          "Base de datos NoSQL en donde se guardan los usuarios y sus respectivas transacciones.",
      },
    ],
  },
  {
    name: "Manejo de ventas",
    description: [
      "Esta fue mi primera aplicación completamente funcional y operativa, lleva mas de 3 años funcionando para una empresa.",
      "Constituyó un desafío significativo al integrar múltiples funciones, marcando un hito fundamental en mi proceso de aprendizaje y desarrollo.",
    ],
    image: appLocal_dark,
    links: [
      {
        title: "APP",
        Icon: FaGithub,
        url: "https://github.com/TinoMaster/apklocal",
      },
      {
        title: "API",
        Icon: FaGithub,
        url: "https://github.com/TinoMaster/api-local",
      },
      {
        title: "DEMO",
        Icon: AiOutlineGlobal,
        url: "https://xn--sueovirtual-3db.com/",
      },
    ],
    tegnologies: [
      { name: "React", description: "Prueba" },
      {
        name: "Tailwind",
        description:
          "CSS Framework para crear componentes de manera rapida y sencilla.",
      },
      {
        name: "Nodejs",
        description:
          "Servidor backend que se encarga de la gestión de las peticiones del cliente.",
      },
      {
        name: "Express",
        description:
          "Servidor web que permite realizar operaciones en el servidor como autenticación o conexiones a bases de datos.",
      },
      {
        name: "MongoDB",
        description:
          "Base de datos NoSQL en donde se guardan los usuarios y sus respectivas transacciones.",
      },
    ],
  },
  {
    name: "Mercado Virtual",
    description: [
      "Esta aplicación se creó debido a la necesidad de establecer una plataforma en la que las imágenes desempeñaran un papel central en el proyecto.",
      "Proporcionó una oportunidad para elevar mi experiencia en el manejo de imágenes en todos los aspectos del desarrollo web. Además, sirvió como una prueba de mi capacidad para construir un proyecto que, a pesar de mis conocimientos técnicos, desafiara los límites de mis habilidades estéticas.",
    ],
    image: appMercado,
    links: [],
    tegnologies: [
      { name: "React", description: "Prueba" },
      {
        name: "Tailwind",
        description:
          "CSS Framework para crear componentes de manera rapida y sencilla.",
      },
      {
        name: "Nodejs",
        description:
          "Servidor backend que se encarga de la gestión de las peticiones del cliente.",
      },
      {
        name: "Express",
        description:
          "Servidor web que permite realizar operaciones en el servidor como autenticación o conexiones a bases de datos.",
      },
      {
        name: "MongoDB",
        description:
          "Base de datos NoSQL en donde se guardan los usuarios y sus respectivas transacciones.",
      },
    ],
  },
];
