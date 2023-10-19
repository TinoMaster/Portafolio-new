import { IconType } from "react-icons";
import { MdSmartToy } from "react-icons/md";
import { Colors } from "../models/types/Color";
import { SiTalenthouse } from "react-icons/si";
import { BsFillChatFill } from "react-icons/bs";

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
    icon: SiTalenthouse,
    color: "primary",
  },
  {
    title: "PRAERDSE",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit",
    icon: BsFillChatFill,
    color: "secondary",
  },
];
