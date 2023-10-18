import { IconType } from "react-icons";
import { MdSmartToy } from "react-icons/md";
import { Colors } from "../models/types/Color";

interface Strength {
  title: string;
  description: string;
  icon: IconType;
  color: Colors;
}

export const strengthsData: Strength[] = [
  {
    title: "PRUEBA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit",
    icon: MdSmartToy,
    color: "third",
  },
  {
    title: "GLORIA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit",
    icon: MdSmartToy,
    color: "primary",
  },
  {
    title: "PRAERDSE",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit",
    icon: MdSmartToy,
    color: "secondary",
  },
];
