import { SectionAboutMe } from "../../Components/Pag About/About me";
import { HeaderAbout } from "../../Components/Pag About/Header";
import { HeroAbout } from "../../Components/Pag About/hero";
import { Section } from "../../Components/global/Section";

export const AboutPage = () => {
  return (
    <div className="pt-20">
      <HeroAbout />
      <Section Component={HeaderAbout} />
      <Section Component={SectionAboutMe} />
    </div>
  );
};
