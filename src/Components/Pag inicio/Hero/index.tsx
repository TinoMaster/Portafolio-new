import { BoxTechs } from "./BoxTechs.js";
import { FondoHero } from "../../global/Hero/FondoHero.js";
import { ImageHero } from "../../global/Hero/ImageHero.js";
import { mi_fondo1, mi_foto2 } from "../../../utils/images.js";
import { PresentationHero } from "../../global/Hero/PresentationHero.js";
import { Text } from "./Presentation/Text.js";
import { BtnDonwloadCurr } from "./Presentation/BtnDonwloadCurr.js";
import { Links } from "./Presentation/Links.js";

export const HeroHome = () => {
  return (
    <>
      <div className="w-full h-full relative">
        <FondoHero image={mi_fondo1} />
        <section className="principalSectionHero">
          <ImageHero image={mi_foto2} />
          <PresentationHero>
            <Text />
            <BtnDonwloadCurr />
            <Links />
          </PresentationHero>
        </section>
      </div>
      <div className="container w-full h-1/2 flex flex-col items-center md:justify-cente px-8">
        <h3 className="text-xl lg:text-2xl text-center pb-2">Tech Stacks</h3>
        <BoxTechs />
      </div>
    </>
  );
};
