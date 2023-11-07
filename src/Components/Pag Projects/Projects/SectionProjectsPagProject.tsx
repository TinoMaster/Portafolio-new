import { FcSportsMode } from "react-icons/fc";
import { myProjects } from "../../../data/myProjects";
import { ProjectCardBig } from "../../ProjectCard_Big";

export const SectionProjectsPagProject = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center w-full pb-10">
      <h2 className="w-full text-center lg:text-start lg:text-xl font-semibold text-third">
        LISTA DE PROYECTOS
      </h2>
      <div className="w-full flex">
        <h3 className="w-full flex lg:text-lg gap-1 justify-center items-center lg:justify-start font-semibold">
          <span className="text-xl">
            <FcSportsMode className="inline" />
          </span>{" "}
          Todos construidos paso a paso
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-10 py-20">
        {myProjects?.map((project) => (
          <ProjectCardBig key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};
