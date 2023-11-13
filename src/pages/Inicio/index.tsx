import { HeroPage } from "../../Components/HeroPage";
import { Presentation } from "../../Components/Pag inicio/Presentation";
import { mi_foto2 } from "../../utils/images";
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
        principalImage={mi_foto2}
        ComponentMessage={Presentation}
        pageName="Pagina principal"
      />
      {/* fortalezas y stack */}
      <div className="container w-full pb-20 p-1">
        <span className="block text-center text-2xl text-slate-200 pt-5">
          Cualidades
        </span>
        <Strengths />
      </div>
      <Suspense>
        {/* Secciones de la pagina */}
        <section className="w-full relative bg-gradient-to-t from-transparent via-secondary/5  to-transparent py-10 px-2 lg:px-0">
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
