import { HeroPage } from "../../Components/HeroPage";
import { Presentation } from "../../Components/Pag inicio/Presentation";
import { mi_foto2 } from "../../utils/images";
import { lazy } from "react";

const Strengths = lazy(() =>
  import("../../Components/My_Strengths/Strengths").then((module) => {
    return {
      default: module.Strengths,
    };
  })
);
const SectionBlogHome = lazy(() =>
  import("../../Components/Pag inicio/Blog").then((module) => {
    return {
      default: module.SectionBlogHome,
    };
  })
);
const SectionProjects = lazy(() =>
  import("../../Components/Pag inicio/Projects").then((module) => {
    return {
      default: module.SectionProjects,
    };
  })
);
const SectionContacts = lazy(() =>
  import("../../Components/Pag inicio/Contacts").then((module) => {
    return {
      default: module.SectionContacts,
    };
  })
);

export const PagInicio = () => {
  return (
    <section className="w-full flex flex-col relative">
      <HeroPage
        principalImage={mi_foto2}
        ComponentMessage={Presentation}
        pageName="Pagina principal"
      />
      {/* fortalezas y stack */}
      <div className="container w-full pb-20">
        <Strengths />
      </div>
      {/* Secciones de la pagina */}
      <section className="w-full relative bg-gradient-to-r from-darkMode/5 via-primary/5  to-darkMode/5 py-10 px-2 lg:px-0">
        <SectionBlogHome />
      </section>
      <section className="w-full bg-gradient-to-b from-transparent via-white/5 to-transparent py-5 px-2 lg:px-0">
        <SectionProjects />
      </section>
      <section className="w-full py-20 px-2 lg:px-0">
        <SectionContacts />
      </section>
    </section>
  );
};
