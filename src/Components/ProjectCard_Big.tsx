import { IconType } from "react-icons";
import { LinksSocialRender } from "./LinksSocialRender";

interface LinksProject {
  title: string;
  url: string;
  Icon?: IconType;
}
interface ProjectCardBigProps {
  image: string;
  techDB: string[];
  techFronted: string[];
  techBackend: string[];
  linksProject: LinksProject[];
  description: string[];
  title: string;
}

export const ProjectCardBig = ({
  image,
  techDB,
  techFronted,
  techBackend,
  linksProject,
  description,
  title,
}: ProjectCardBigProps) => {
  return (
    <article className="text-white w-full h-full rounded-md">
      <div className="px-20 max-w-[600px] m-auto">
        <img src={image} alt={`image by ${title}`} />
      </div>
      <div className="flex flex-col p-4">
        <h2 className="text-xl font-semibold text-center text-gray-200">
          {title}
        </h2>
        {description.map((text, index) => (
          <p
            key={index}
            className="text-gray-400 text-sm mt-2 max-h-[300px] max-w-[500px] m-auto text-center overflow-auto"
          >
            {text}
          </p>
        ))}

        <div className="mt-4">
          <h3 className="font-semibold text-center text-gray-200">
            Tecnologias:
          </h3>
          <div className="flex flex-wrap justify-center mt-2">
            {techFronted.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-600 text-xs rounded-full px-3 py-1 font-semibold text-gray-200 m-1"
              >
                {tech}
              </span>
            ))}
            {techBackend.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-gray-200 m-1"
              >
                {tech}
              </span>
            ))}
            {techDB.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-600 rounded-full px-3 py-1 text-xs font-semibold text-gray-200 m-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 items-center">
          <h3 className="font-semibold text-gray-200 text-center">Enlaces:</h3>
          <LinksSocialRender showTitle linksSocial={linksProject} />
        </div>
      </div>
    </article>
  );
};
