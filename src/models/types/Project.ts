import { IconType } from "react-icons";

interface LinksProps {
  title: string;
  url: string;
  Icon: IconType;
}

export interface IProject {
  name: string;
  description: string[];
  image: string;
  links: LinksProps[];
  tegnologiesF: string[];
  tegnologiesB: string[];
  dataBase: string[];
}
