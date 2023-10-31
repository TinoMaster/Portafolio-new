import { SectionBlog } from "../../Components/Pag inicio/Blog";
import { SectionContacts } from "../../Components/Pag inicio/Contacts";
import { HeroHome } from "../../Components/Pag inicio/Hero";
import { SectionProjects } from "../../Components/Pag inicio/Projects";
import { Section } from "../../Components/global/Section";

export const PagInicio = () => {
  return (
    <div className="w-full flex flex-col relative pt-20">
      <HeroHome />
      <div className="w-full bg-gradient-to-r from-darkMode via-primary/5 relative lg:via-primary/5 to-darkMode pb-5">
        <div className="gradient"></div>
        <Section Component={SectionBlog} />
      </div>
      <div className="w-full bg-gradient-to-b from-zinc-800 via-white/5 to-zinc-800">
        <Section Component={SectionProjects} />
      </div>
      <Section Component={SectionContacts} />
    </div>
  );
};
