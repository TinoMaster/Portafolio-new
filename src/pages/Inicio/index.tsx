import { BoxTechs } from "../../Components/BoxTechs";
import { HeroPage } from "../../Components/HeroPage";
import { Presentation } from "../../Components/Pag inicio/Presentation";
import { imagesTechStack, mi_foto1, mi_foto2 } from "../../utils/images";
import { Suspense, lazy } from "react";

const Strengths = lazy(() => import("../../Components/Pag inicio/Strengths"));
const SectionBlogPageInit = lazy(
  () => import("../../Components/Pag inicio/SectionBlogPageInit")
);
const SectionProjectsPageInit = lazy(
  () => import("../../Components/Pag inicio/SectionProjectsPageInit")
);
const SectionContactsPageInit = lazy(
  () => import("../../Components/Pag inicio/SectionContactsPageInit")
);

const PagInicio = () => {
  return (
    <section className="w-full flex flex-col relative">
      <HeroPage
        principalImageMovil={mi_foto1}
        principalImageDesktop={mi_foto2}
        ComponentMessage={Presentation}
        pageName="Pagina principal"
      />
      {/* fortalezas y stack */}
      <div className="container w-full pb-20 p-1">
        <Strengths />
      </div>
      <section className="py-20 bg-gradient-to-t from-darkMode via-primary/5 to-darkMode shadow-inner shadow-black/10">
        <BoxTechs imagesTechStack={imagesTechStack} />
      </section>
      <Suspense>
        {/* Secciones de la pagina */}
        <section className="w-full relative bg-gradient-to-t from-transparent via-primary/5  to-transparent py-10 px-2 lg:px-0">
          <SectionBlogPageInit />
        </section>
        <section className="w-full bg-gradient-to-b from-transparent via-white/5 to-transparent py-5 px-2 lg:px-0">
          <SectionProjectsPageInit />
        </section>
        <section className="w-full py-20 px-2 lg:px-0 bg-gradient-to-t from-darkMode/10 via-slate-800/30 to-darkMode/10">
          <SectionContactsPageInit />
        </section>
      </Suspense>
    </section>
  );
};

export default PagInicio;
