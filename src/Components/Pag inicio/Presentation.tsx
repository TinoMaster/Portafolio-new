import { BtnDonwloadCurr } from "../BtnDonwloadCurr";
import { LinksSocialRender } from "../LinksSocialRender";
import { linksSocial } from "../../data/linksSocial";
import { GiHand } from "react-icons/gi";
import { aboutMe } from "../../data/aboutMe";

export const Presentation = () => {
  return (
    <>
      <span className="flex items-center p-1 text-xl lg:text-3xl gap-1">
        Hola <GiHand className="text-yellow-400" />, Soy Oscar
      </span>
      <div className="flex flex-wrap text-3xl lg:text-5xl justify-center">
        <span className="block text-slate-200 mt-2">Desarrollador Web</span>
        <span className="block text-slate-200 mt-2 ml-2">Full Stack</span>
      </div>
      <span className="text-3xl lg:text-5xl text-slate-200 mb-2">
        4 Años Experiencia
      </span>
      <p className="text-center lg:text-xl max-w-[400px] sm:container">{aboutMe.description}</p>
      <div className="w-full flex justify-center">
        <BtnDonwloadCurr />
      </div>
      <div className="flex justify-center w-full py-3">
        <LinksSocialRender linksSocial={linksSocial} />
      </div>
    </>
  );
};
