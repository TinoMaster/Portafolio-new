import { FaAd } from "react-icons/fa";
import { Project } from "../../../models/types/Project";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, description, image, links } = project;
  return (
    <div className="w-full lg:w-1/3 overflow-hidden">
      <div className="w-full rounded overflow-hidden shadow-lg m-4">
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
            Ver proyecto
          </a>
          <div className="flex space-x-2">
            {links.map((icon, index) => (
              <div key={index}>
                <FaAd />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
