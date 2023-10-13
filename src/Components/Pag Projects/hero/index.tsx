import { fondo_projects } from "../../../utils/images";
import { FondoHero } from "../../global/Hero/FondoHero";
import { ImageHero } from "../../global/Hero/ImageHero";
import { PresentationHero } from "../../global/Hero/PresentationHero";
import { Title } from "./Presentation/Title";
import { svgFolder } from "../../../utils/svgs";

export const HeroProjects = () => {
  return (
    <div className="w-full h-full relative">
      <FondoHero image={fondo_projects} />
      <div className="principalSectionHero">
        <ImageHero image={svgFolder} />
        <PresentationHero>
          <Title />
        </PresentationHero>
      </div>
    </div>
  );
};
