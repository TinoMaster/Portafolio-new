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
    <div className="w-full lg:w-1/3 overflow-hidden p-2 max-w-[400px] m-auto">
      <div className="w-full rounded-md overflow-hidden shadow-lg bg-slate-900/40">
        <div className="px-10 m-1 rounded-md bg-black/10">
          <LazyImage src={image} alt={`imagen de ${name}`} />
        </div>

        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2">{name}</div>
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
            <LinksSocialRender showTitle linksSocial={links} />
          </div>
        </div>
      </div>
    </div>
  );
};
