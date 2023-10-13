import { HeroProjects } from "../../Components/Pag Projects/hero";
import { Projects } from "../../Components/Pag Projects/projects";

export const ProjectsPage = () => {
  return (
    <div className="flex flex-col pt-20">
      {/* Hero */}
      <HeroProjects />
      <div className="w-full relative px-4 max-w-720p m-auto overflow-hidden">
        <Projects />
      </div>
    </div>
  );
};
