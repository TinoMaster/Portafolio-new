import { fondo_about } from "../../../utils/images";
import { svgAbout } from "../../../utils/svgs";
import { Hero } from "../../global/Hero";
import { Presentation } from "./Presentation";

export const HeroAbout = () => {
  return (
    <>
      <Hero Presentation={Presentation} image={svgAbout} fondo={fondo_about} />
    </>
  );
};
