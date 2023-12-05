import { useTranslation } from "react-i18next";
import { linksScroll } from "../../data/linksMenu";
import { BtnMenuMovil } from "./BtnMenuMovil";
import { Links } from "./Links";
import { Logo } from "./Logo";

export const Menu = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <header className="flex h-[70px] justify-between items-center w-full py-3 lg:py-5 fixed z-50 bg-gradient-to-b from-darkMode/90 to-darkMode/80">
      <header className="flex items-center gap-1">
        <Logo />
        <h1 className="text-lg">TinoMaster</h1>
      </header>
      <nav className="flex">
        <button onClick={() => i18n.changeLanguage("es")} className="pr-10">
          es
        </button>
        <button onClick={() => i18n.changeLanguage("en")} className="pr-10">
          en
        </button>
        <BtnMenuMovil />
        <Links linksScroll={linksScroll} />
      </nav>
    </header>
  );
};
