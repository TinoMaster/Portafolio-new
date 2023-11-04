import { IProject } from "../models/types/Project";
import { appDebts, appLocal_dark, appMercado } from "../utils/images";

export const myProjects: IProject[] = [
  {
    name: "Manejo de deudas",
    description:
      "Esta aplicación surgió de la necesidad recurrente de gestionar deudas con un amigo de manera eficiente. Permitió un control compartido de las deudas, enriqueciendo mi comprensión. Rastrea deudas con permisos, facilitando ajustes según las circunstancias.",
    image: appDebts,
    links: [
      "https://github.com/TinoMaster/my_debts",
      "https://github.com/TinoMaster/debts_api",
      "https://debts.tinomaster.website/",
    ],
    tegnologiesF: ["React", "Tailwind"],
    tegnologiesB: ["Nodejs", "Express"],
    dataBase: "MongoDB",
  },
  {
    name: "Manejo de ventas",
    description:
      "Esta fue mi primera aplicación completamente funcional y operativa, lleva mas de 3 años funcionando para una empresa. Constituyó un desafío significativo al integrar múltiples funciones, marcando un hito fundamental en mi proceso de aprendizaje y desarrollo.",
    image: appLocal_dark,
    links: [
      "https://github.com/TinoMaster/apklocal",
      "https://github.com/TinoMaster/api-local",
      "https://xn--sueovirtual-3db.com/",
    ],
    tegnologiesF: ["React", "Tailwind"],
    tegnologiesB: ["Nodejs", "Express"],
    dataBase: "MongoDB",
  },
  {
    name: "Mercado Virtual",
    description:
      "Esta aplicación se creó debido a la necesidad de establecer una plataforma en la que las imágenes desempeñaran un papel central en el proyecto. Proporcionó una oportunidad para elevar mi experiencia en el manejo de imágenes en todos los aspectos del desarrollo web. Además, sirvió como una prueba de mi capacidad para construir un proyecto que, a pesar de mis conocimientos técnicos, desafiara los límites de mis habilidades estéticas",
    image: appMercado,
    links: [],
    tegnologiesF: ["Next13", "Typescript", "Tailwind"],
    tegnologiesB: ["Nestjs", "Typescript"],
    dataBase: "MongoDB",
  },
];
