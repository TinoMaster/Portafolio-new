import { SectionProjectsPagProject } from "../../Components/Pag Projects/SectionProjectsPagProject";
import { HeroPage } from "../../Components/HeroPage";
import { Presentation } from "../../Components/Pag Projects/Presentation";
import { imagesTechStack } from "../../utils/images";
import { svgFolder } from "../../utils/svgs";
import { BoxTechs } from "../../Components/BoxTechs";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col">
      <HeroPage
        ComponentMessage={Presentation}
        principalImage={svgFolder}
        pageName="Pagina Proyectos"
      />
      <div className="w-full container z-10 pb-20 lg:py-20">
        <h3 className="text-xl lg:text-2xl text-center">Mi Stack</h3>
        <BoxTechs imagesTechStack={imagesTechStack} />
      </div>
      <section className="container py-5">
        <SectionProjectsPagProject />
      </section>
    </div>
  );
};

export default ProjectsPage;
