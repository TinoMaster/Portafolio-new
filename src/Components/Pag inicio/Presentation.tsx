import { BtnDonwloadCurr } from "../BtnDonwloadCurr";
import { LinksSocialRender } from "../LinksSocialRender";
import { linksSocial } from "../../data/linksSocial";
import { GiHand } from "react-icons/gi";
import { aboutMe } from "../../data/aboutMe";
import { mi_foto2 } from "../../utils/images";

export const Presentation = () => {
  return (
    <>
      <span className="flex items-center pb-1 text-lg lg:text-2xl gap-1">
        Hola <GiHand className="text-yellow-400" />, Soy Oscar
      </span>
      <div className="flex flex-wrap text-2xl lg:text-4xl justify-center">
        <span className="block text-slate-200">Desarrollador Web</span>
        <span className="block text-slate-200 ml-2">Full Stack</span>
      </div>
      <span className="text-xl lg:text-3xl text-primary mb-4">
        4 Años Experiencia
      </span>
      <div className="w-full flex lg:hidden justify-center items-center py-10 md:pt-0">
        <div className="w-36 h-36 m-auto lg:w-72 lg:h-72 rounded-full overflow-hidden relative border">
          <picture>
            <img
              loading="lazy"
              className="w-full h-full object-cover"
              src={mi_foto2}
              alt={`Imagen banner`}
            />
          </picture>
        </div>
      </div>
      <span className="text-slate-200 mb-4 text-center text-sm lg:text-start">
        HTML | CSS | JAVASCRYPT | REACT | NEXTJS | NODEJS | TAILWINDCSS
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
