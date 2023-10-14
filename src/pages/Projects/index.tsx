import { HeroProjects } from "../../Components/Pag Projects/hero";
import { Projects } from "../../Components/Pag Projects/projects";
import { Section } from "../../Components/global/Section";

export const ProjectsPage = () => {
  return (
    <div className="flex flex-col pt-20">
      <HeroProjects />
      <Section Component={Projects} />
    </div>
  );
};
