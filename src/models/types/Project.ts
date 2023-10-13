export interface Project {
  name: string;
  description: string;
  image: string;
  links: string[];
  tegnologiesF: string[];
  tegnologiesB: string[];
  dataBase: string;
}
export interface ProjectProps {
  project: Project;
  index: number;
}
