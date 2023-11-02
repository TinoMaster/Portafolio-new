import { IProject } from "../../../models/types/Project";
import { LinksProject } from "../../Pag Projects/Projects/Item Project/LinksProject";

interface ProjectCardProps {
  project: IProject;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, description, image, links } = project;
  return (
    <div className="w-full lg:w-1/3 overflow-hidden p-2">
      <div className="w-full rounded overflow-hidden shadow-lg">
        <img className="w-full object-cover" src={image} alt="Hola" />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-500 text-base">{`${description.slice(
            0,
            100
          )}...`}</p>
        </div>

        <div className="px-6 py-4 flex justify-between items-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Ver mas
          </a>
          <div className="flex space-x-2">
            <LinksProject onlyIcon links={links} />
          </div>
        </div>
      </div>
    </div>
  );
};
