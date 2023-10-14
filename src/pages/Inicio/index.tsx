import { AboutMe } from "../../Components/Pag inicio/About me";
import { Contacts } from "../../Components/Pag inicio/Contacts";
import { HeroHome } from "../../Components/Pag inicio/Hero";
import { Projects } from "../../Components/Pag inicio/Projects";
import { Section } from "../../Components/global/Section";

export const PagInicio = () => {
  return (
    <div className="w-full flex flex-col relative pt-20">
      <HeroHome />
      <Section Component={AboutMe} />
      <Section Component={Projects} />
      <Section Component={Contacts} />
    </div>
  );
};
