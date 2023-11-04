import { HeroProjects } from "../../Components/Pag Projects/hero";
import { Projects } from "../../Components/Pag Projects/Projects";
import { Section } from "../../Components/global/Section";

export const ProjectsPage = () => {
  return (
    <div className="flex flex-col">
      <HeroProjects />
      <Section Component={Projects} />
    </div>
  );
};
