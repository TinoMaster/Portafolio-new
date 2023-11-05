import { BoxTechs } from "./BoxTechs.js";
import { mi_fondo1, mi_foto2 } from "../../../utils/images.js";
import { Hero } from "../../global/Hero/index.js";
import { Presentation } from "./Presentation/index.js";
import { Strengths } from "./Strengths.js";

export const HeroHome = () => {
  return (
    <>
      <Hero Presentation={Presentation} fondo={mi_fondo1} image={mi_foto2} />
      <div className="container w-full flex flex-col-reverse z-10 lg:flex-col min-h-[30vh] lg:min-h-[50vh]">
        <Strengths />
        <div className="w-full">
          <h3 className="text-xl lg:text-2xl text-center">Mi Stack</h3>
          <BoxTechs />
        </div>
      </div>
    </>
  );
};
