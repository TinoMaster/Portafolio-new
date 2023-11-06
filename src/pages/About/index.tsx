import { HeroPage } from "../../Components/HeroPage";
import { SectionAboutMe } from "../../Components/Pag About/About me";
import { HeaderAbout } from "../../Components/Pag About/Header";
import { Presentation } from "../../Components/Pag About/Presentation";
import { svgAbout } from "../../utils/svgs";

export const AboutPage = () => {
  return (
    <div className="">
      <HeroPage
        ComponentMessage={Presentation}
        principalImage={svgAbout}
        pageName="Pagina Sobre mi"
      />
      <section className="w-full py-20 px-2 lg:px-0 container">
        <HeaderAbout />
      </section>
      <section className="w-full py-20 px-2 lg:px-0 container">
        <SectionAboutMe />
      </section>
    </div>
  );
};
