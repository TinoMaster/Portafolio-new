import { IconType } from "react-icons";

export interface Tegnologies {
  name: string;
  description: string;
}
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
  tegnologies: Tegnologies[];
}
