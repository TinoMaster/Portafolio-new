import { FcSportsMode } from "react-icons/fc";
import { myProjects } from "../../../data/myProjects";
import { Project } from "./Item Project";

export const Projects = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center w-full m-auto max-w-720p pb-10">
      <h2 className="w-full text-center lg:text-start lg:text-xl font-semibold text-third">
       LIST OF PROJECTS
      </h2>
      <div className="w-full flex">
        <h3 className="w-full flex lg:text-lg gap-1 justify-center items-center lg:justify-start font-semibold">
          <span className="text-xl">
            <FcSportsMode className="inline" />
          </span>{" "}
          Built step by step
        </h3>
      </div>
      {myProjects?.map((project, index) => (
        <Project key={project.name} project={project} index={index} />
      ))}
    </div>
  );
};
