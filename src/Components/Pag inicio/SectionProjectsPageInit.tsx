import { myProjects } from "../../data/myProjects";
import { ProjectCard_Small } from "../ProjectCard_Small";

export const SectionProjectsPageInit = () => {
  return (
    <div className="flex flex-col gap-5 py-10 px-2 container">
      <h3 className="w-full font-semibold text-center lg:text-end lg:py-10 text-lg lg:text-xl text-primary">
        Conoce Mis Poyectos
      </h3>
      <div className="flex flex-wrap">
        {myProjects.map((pjct) => (
          <ProjectCard_Small key={pjct.name} project={pjct} />
        ))}
      </div>
    </div>
  );
};
