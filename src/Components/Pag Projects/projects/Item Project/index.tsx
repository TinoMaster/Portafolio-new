import { IProject } from "../../../../models/types/Project";
import { LinksProject } from "./LinksProject";

interface ProjectProps {
  project: IProject;
}

export const Project = ({ project }: ProjectProps) => {
  const {
    image,
    tegnologiesB,
    description,
    dataBase,
    links,
    name,
    tegnologiesF,
  } = project;
  return (
    <article className="text-white w-full p-2 rounded-md">
      <div className="shadow-lg rounded-lg overflow-hidden">
        <img src={image} alt={name} className="w-full h-64 object-contain" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-200">{name}</h2>
          <p className="text-gray-400 text-sm mt-2">{description}</p>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-200">Tecnologias:</h3>
            <div className="flex flex-wrap mt-2">
              {tegnologiesF.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-600 text-xs rounded-full px-3 py-1 font-semibold text-gray-200 m-1"
                >
                  {tech}
                </span>
              ))}
              {tegnologiesB.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-gray-200 m-1"
                >
                  {tech}
                </span>
              ))}
              <span className="bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-gray-200 m-1">
                {dataBase}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 mt-4">
            <h3 className="font-semibold text-gray-200">Enlaces:</h3>
            <LinksProject onlyIcon={false} links={links} />
          </div>
        </div>
      </div>
    </article>
  );
};
