import { BtnDonwloadCurr } from "../BtnDonwloadCurr";
import { LinksSocialRender } from "../LinksSocialRender";
import { linksSocial } from "../../data/linksSocial";
import { GiHand } from "react-icons/gi";

export const Presentation = () => {
  return (
    <>
      <span className="flex items-center p-1 text-3xl">
        Hola <GiHand className="text-yellow-400 ml-1" />,
      </span>
      <h2 className=" text-4xl md:text-3xl xl:text-4xl font-semibold text-white">
        Soy Oscar
      </h2>
      <span className="block p-1 text-3xl">Desarrollador Web.</span>
      <span className="flex items-center gap-2">
        <span className="text-3xl">Tecnologias</span>
        <span className="text-white text-3xl">Full Stack</span>
      </span>
      <span className="text-white text-3xl">4 Años Experiencia</span>
      <BtnDonwloadCurr />
      <div className="py-3">
        <LinksSocialRender linksSocial={linksSocial} />
      </div>
    </>
  );
};
