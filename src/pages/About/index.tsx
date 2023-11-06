import { HeroPage } from "../../Components/HeroPage";
import { SectionAboutMe } from "../../Components/Pag About/About me";
import { HeaderAbout } from "../../Components/Pag About/Header";
import { Presentation } from "../../Components/Pag About/Presentation";
import { fondo_about } from "../../utils/images";
import { svgAbout } from "../../utils/svgs";

export const AboutPage = () => {
  return (
    <div className="">
      <HeroPage
        ComponentMessage={Presentation}
        backImage={fondo_about}
        principalImage={svgAbout}
        pageName="Pagina Sobre mi"
      />
      <HeaderAbout />
      <SectionAboutMe />
    </div>
  );
};
