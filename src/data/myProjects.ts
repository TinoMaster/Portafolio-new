import { IProject } from "../models/types/Project";
import { appDebts, appLocal_dark, appMercado } from "../utils/images";

export const myProjects: IProject[] = [
  {
    name: "Debt management",
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
    name: "Sales management",
    description:
      "Esta fue mi primera aplicación completamente funcional y finalizada, en operación durante tres años para una empresa. Constituyó un desafío significativo al integrar múltiples funciones, marcando un hito fundamental en mi proceso de aprendizaje y desarrollo.",
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
    name: "Vitual Market",
    description:
      "This application was created out of the need to establish a platform where images played a central role in the project. It provided an opportunity to elevate my expertise in handling images across all aspects of website development. Furthermore, it served as a test of my ability to construct a project that, despite my technical knowledge, pushed the boundaries of my aesthetic skills.",
    image: appMercado,
    links: [],
    tegnologiesF: ["Next13", "Typescript", "Tailwind"],
    tegnologiesB: ["Nestjs", "Typescript"],
    dataBase: "MongoDB",
  },
];
