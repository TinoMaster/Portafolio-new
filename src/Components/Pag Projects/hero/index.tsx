import { fondo_projects } from "../../../utils/images";
import { svgFolder } from "../../../utils/svgs";
import { Hero } from "../../global/Hero";
import { Presentation } from "./Presentation";

export const HeroProjects = () => {
  return (
    <>
      <Hero
        Presentation={Presentation}
        image={svgFolder}
        fondo={fondo_projects}
      />
    </>
  );
};
