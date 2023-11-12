import { BtnDonwloadCurr } from "../BtnDonwloadCurr";
import { LinksSocialRender } from "../LinksSocialRender";
import { linksSocial } from "../../data/linksSocial";
import { GiHand } from "react-icons/gi";

export const Presentation = () => {
  return (
    <>
      <span className="flex items-center p-1 text-lg lg:text-xl">
        Hola <GiHand className="text-yellow-400 ml-1" />, Me llamo Oscar
      </span>
      <span className="block text-2xl text-slate-200">
        Desarrollador Web, Full Stack
      </span>
      <span className="text-2xl text-slate-200">4 Años Experiencia</span>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
        sapiente illum praesentium laborum suscipit.
      </p>
      <div className="w-full flex justify-center p-2">
        <BtnDonwloadCurr />
      </div>
      <div className="flex justify-center w-full py-3">
        <LinksSocialRender linksSocial={linksSocial} />
      </div>
    </>
  );
};
