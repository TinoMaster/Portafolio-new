import { FcSportsMode } from "react-icons/fc";

import { myProjects } from "../../data/myProjects";
import { ProjectCardBig } from "../ProjectCard_Big";

export const SectionProjectsPagProject = () => {
  return (
    <div className="flex flex-col gap-2 justify-center w-full h-screen">
      <h2 className="w-full text-center text-3xl font-semibold text-slate-200">
        Lista de Proyectos
      </h2>
      <div className="w-full flex">
        <h3 className="w-full flex gap-1 justify-center items-center font-semibold">
          <span className="text-xl">
            <FcSportsMode className="inline" />
          </span>{" "}
          Construidos paso a paso
        </h3>
      </div>
      {/* Create a section in the screen page that render 1 project at the time depends of which button is push */}
      <div className="grow">
        <ProjectCardBig project={myProjects[0]} />
      </div>
    </div>
  );
};
