import { Link } from "react-router-dom";
import { IProject } from "../models/types/Project";
import { LazyImage } from "./Helpers/LazyImage";
import { LinksSocialRender } from "./LinksSocialRender";
interface ProjectCardProps {
  project: IProject;
}

export const ProjectCard_Small = ({ project }: ProjectCardProps) => {
  const { name, description, image, links } = project;
  return (
    <div className="w-full lg:w-1/3 overflow-hidden p-2">
      <div className="w-full rounded overflow-hidden shadow-lg">
        <LazyImage src={image} alt={`imagen de ${name}`} />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-500 text-base">{`${description.slice(
            0,
            120
          )}...`}</p>
        </div>

        <div className="px-6 py-4 flex justify-between items-center">
          <Link to={"/projects"} className="text-primary hover:underline">
            Ver mas
          </Link>
          <div className="flex space-x-2">
            <LinksSocialRender linksSocial={links} />
          </div>
        </div>
      </div>
    </div>
  );
};
