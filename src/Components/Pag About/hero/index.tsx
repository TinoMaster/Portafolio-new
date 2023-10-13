import { fondo_about } from "../../../utils/images";
import { FondoHero } from "../../global/Hero/FondoHero";
import { ImageHero } from "../../global/Hero/ImageHero";
import { PresentationHero } from "../../global/Hero/PresentationHero";
import { svgAbout } from "../../../utils/svgs";
import { Title } from "./Presentation/Title";

export const HeroAbout = () => {
  return (
    <div className="w-full h-full relative">
      <FondoHero image={fondo_about} />
      <div className="principalSectionHero">
        <ImageHero image={svgAbout} />
        <PresentationHero>
          <Title />
        </PresentationHero>
      </div>
    </div>
  );
};
