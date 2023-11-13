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
      <section className="container py-10">
        <BoxTechs imagesTechStack={imagesTechStack} />
      </section>
      <section className="container py-10 lg:py-28">
        <SectionProjectsPagProject />
      </section>
    </div>
  );
};

export default ProjectsPage;
