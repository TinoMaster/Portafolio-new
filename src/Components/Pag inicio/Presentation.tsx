import { BtnDonwloadCurr } from "../BtnDonwloadCurr";
import { LinksSocialRender } from "../LinksSocialRender";
import { linksSocial } from "../../data/linksSocial";
import { GiHand } from "react-icons/gi";
import { aboutMe } from "../../data/aboutMe";

export const Presentation = () => {
  return (
    <>
      <span className="flex items-center p-1 text-xl lg:text-2xl gap-1">
        Hola <GiHand className="text-yellow-400" />, Soy Oscar
      </span>
      <div className="flex flex-wrap text-3xl lg:text-4xl justify-center">
        <span className="block text-slate-200">Desarrollador Web</span>
        <span className="block text-slate-200 ml-2">Full Stack</span>
      </div>
      <span className="text-3xl lg:text-4xl text-slate-200 mb-4">
        4 Años Experiencia
      </span>
      <div className="space-y-1 rounded-md">
        {aboutMe.description.map((par, index) => (
          <p
            key={index}
            className="text-center lg:text-start text-sm max-w-[400px] md:container"
          >
            {par}
          </p>
        ))}
      </div>
      <div className="w-full px-5 flex justify-center lg:justify-start lg:px-0">
        <BtnDonwloadCurr />
      </div>
      <div className="flex justify-center lg:justify-start w-full py-3">
        <LinksSocialRender linksSocial={linksSocial} />
      </div>
    </>
  );
};
