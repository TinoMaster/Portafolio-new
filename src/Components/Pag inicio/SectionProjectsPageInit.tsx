import { myProjects } from "../../data/myProjects";
import { ProjectCard_Small } from "../ProjectCard_Small";

const SectionProjectsPageInit = () => {
  return (
    <div className="flex flex-col gap-5 py-10 px-2 container">
      <h3 className="w-full font-semibold text-center lg:py-10 text-2xl text-slate-200">
        Conoce Mis Poyectos
      </h3>
      <div className="flex flex-wrap items-center justify-stretch">
        {myProjects.map((pjct) => (
          <ProjectCard_Small key={pjct.name} project={pjct} />
        ))}
      </div>
    </div>
  );
};

export default SectionProjectsPageInit;
