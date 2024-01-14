import { IconType } from "react-icons";
import { MdSmartToy } from "react-icons/md";
import { Colors } from "../models/types/Color";
import { GiSelfLove } from "react-icons/gi";
import { FaStudiovinari } from "react-icons/fa";

interface Strength {
  translate: string;
  icon: IconType;
  color: Colors;
}

export const strengthsData: Strength[] = [
  {
    translate: "first",
    icon: MdSmartToy,
    color: "secondary",
  },
  {
    translate: "second",
    icon: GiSelfLove,
    color: "third",
  },
  {
    translate: "third",
    icon: FaStudiovinari,
    color: "primary",
  },
];
