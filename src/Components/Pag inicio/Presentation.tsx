import { BtnDonwloadCurr } from "../BtnDonwloadCurr";
import { LinksSocialRender } from "../LinksSocialRender";
import { linksSocial } from "../../data/linksSocial";
import { mi_foto2 } from "../../utils/images";
import { useTranslation } from "react-i18next";

export const Presentation = () => {
  const [t] = useTranslation("global");

  return (
    <div className="w-full lg:w-1/2 flex flex-col text-slate-400 items-center justify-center lg:items-start">
      <span className="flex items-center pb-1 text-lg lg:text-2xl gap-1">
        {t("hero.greet")}
      </span>
      <div className="flex flex-wrap text-2xl lg:text-4xl justify-center">
        <span className="block text-slate-200">{t("hero.charge")}</span>
      </div>
      <span className="text-xl lg:text-3xl text-indigo-500 mb-4">
        {t("hero.experience")}
      </span>
      <div className="w-full flex lg:hidden justify-center items-center py-10">
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
      <div className="space-y-1 rounded-md max-w-[600px]">
        <p className="text-center lg:text-start text-sm max-w-[400px] md:container">
          {t("hero.about.first")}
        </p>
        <p className="text-center lg:text-start text-sm max-w-[400px] md:container">
          {t("hero.about.second")}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center lg:justify-start gap-2 w-full lg:flex-row lg:items-baseline">
        <BtnDonwloadCurr />
        <LinksSocialRender linksSocial={linksSocial} />
      </div>
    </div>
  );
};
