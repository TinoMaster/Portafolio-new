import { Presentation } from "./Presentation";
import { Imagen } from "./imagen.js";
import { BoxTechs } from "./BoxTechs.js";
import { Fondo } from "./Fondo.js";

export const Hero = () => {
  return (
    <>
      <div className="w-full h-full relative">
        <Fondo />
        <section className="container flex flex-wrap relative  flex-row-reverse w-full h-full items-center justify-center py-10 md:px-10">
          <Imagen />
          <Presentation />
        </section>
      </div>
      <div className="container w-full h-1/2 flex flex-col items-center md:justify-cente px-8">
        <h3 className="text-xl lg:text-2xl text-center pb-2">Tech Stacks</h3>
        <BoxTechs />
      </div>
    </>
  );
};
