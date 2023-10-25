import { SectionHeaderProjectPage } from "../../Components/Pag Projects/Header";
import { Projects } from "../../Components/Pag Projects/Projects";
import { HeroProjects } from "../../Components/Pag Projects/hero";
import { Section } from "../../Components/global/Section";

export const ProjectsPage = () => {
  return (
    <div className="flex flex-col pt-20">
      <div className="">
        <HeroProjects />
        <Section Component={SectionHeaderProjectPage} />
        <Section Component={Projects} />
      </div>
    </div>
  );
};
