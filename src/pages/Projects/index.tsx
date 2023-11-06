import { ProjectsSectionPagProject } from "../../Components/Pag Projects/Projects";
import { HeroPage } from "../../Components/HeroPage";
import { Presentation } from "../../Components/Pag Projects/Presentation";
import { fondo_projects, imagesTechStack } from "../../utils/images";
import { svgFolder } from "../../utils/svgs";
import { BoxTechs } from "../../Components/BoxTechs";

export const ProjectsPage = () => {
  return (
    <div className="flex flex-col">
      <HeroPage
        ComponentMessage={Presentation}
        backImage={fondo_projects}
        principalImage={svgFolder}
        pageName="Pagina Proyectos"
      />
      <div className="w-full container z-10 pb-20 lg:py-20">
        <h3 className="text-xl lg:text-2xl text-center">Mi Stack</h3>
        <BoxTechs imagesTechStack={imagesTechStack} />
      </div>
      <section className="container py-5">
        <ProjectsSectionPagProject />
      </section>
    </div>
  );
};
