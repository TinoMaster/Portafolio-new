import { ContactUs } from "../../Components/ContactUs";
import { Features } from "../../Components/Features";
import { HeroPage } from "../../Components/HeroPage";
import { Presentation } from "../../Components/Pag inicio/Presentation";
import { SectionProjects } from "../../Components/SectionProjects";
import Strengths from "../../Components/Pag inicio/Strengths";
import { useSEO } from "../../Hooks/UseSEO";
import { mi_foto1, mi_foto2 } from "../../utils/images";

const PagInicio = () => {
  useSEO({
    title: "TinoMaster | Inicio",
  });
  return (
    <section className="w-full flex flex-col relative">
      <HeroPage
        principalImageMovil={mi_foto1}
        principalImageDesktop={mi_foto2}
        ComponentMessage={Presentation}
        pageName="Pagina principal"
      />
      <Strengths />
      <Features />
      <SectionProjects />
      <ContactUs />
    </section>
  );
};

export default PagInicio;
