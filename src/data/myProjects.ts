import { appDebts, appLocal_dark, appMercado } from "../utils/images";

export const myProjects = [
  {
    name: "Debt management",
    description:
      "This application arose from the recurring need to manage debts with a friend effectively. It enabled both of us to have control over our debts, further enhancing my existing knowledge. The application effectively tracks debts with proper permissions, allowing each user to make changes according to their circumstances.",
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
      "This was my first completed and fully functional application, which has been in operation for three years for a business. It was a significant challenge because it incorporates many features and represented my first major learning experience.",
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
