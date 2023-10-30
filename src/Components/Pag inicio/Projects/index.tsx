import { myProjects } from "../../../data/myProjects";
import { ProjectCard } from "./ProjectCard";

export const SectionProjects = () => {
  return (
    <div className="flex flex-col gap-5 py-10">
      <h3 className="w-full font-semibold text-center lg:text-end lg:py-10 text-lg lg:text-xl text-primary">
        Conoce Mis Poyectos
      </h3>
      <div className="flex flex-wrap">
        {myProjects.map((pjct) => (
          <ProjectCard project={pjct} />
        ))}
      </div>
    </div>
  );
};
