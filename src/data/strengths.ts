import { IconType } from "react-icons";
import { MdSmartToy } from "react-icons/md";
import { Colors } from "../models/types/Color";
import { GiSelfLove } from "react-icons/gi";
import { FaStudiovinari } from "react-icons/fa";

interface Strength {
  title: string;
  description: string;
  icon: IconType;
  color: Colors;
}

export const strengthsData: Strength[] = [
  {
    title: "INNOVADOR",
    description:
      "Apasionado en las últimas tendencias en el mundo del desarrollo web y aplicarlas de manera creativa en proyectos innovadores.",
    icon: MdSmartToy,
    color: "primary",
  },
  {
    title: "APASIONADO",
    description:
      "Apasionado por el desarrollo web y la resolución de problemas. En constante búsqueda de desafíos técnicos para aprender y crecer.",
    icon: GiSelfLove,
    color: "third",
  },
  {
    title: "COMPROMETIDO",
    description:
      "Enfocado y dedicado a alcanzar metas, entregando soluciones de calidad y superando desafíos con determinación.",
    icon: FaStudiovinari,
    color: "secondary",
  },
];
