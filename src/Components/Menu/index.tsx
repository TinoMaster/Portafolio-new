import { linksScroll } from "../../data/linksMenu";
import { BtnMenuMovil } from "./BtnMenuMovil";
import { Links } from "./Links";
import { Logo } from "./Logo";
import { SelectLanguage } from "./SelectLenguage";

export const Menu = () => {
  return (
    <header className="flex h-[70px] justify-between items-center w-full py-3 lg:py-5 fixed z-50 bg-gradient-to-b from-darkMode/90 to-darkMode/80">
      <header className="flex items-center gap-1">
        <Logo />
        <h1 className="text-lg">TinoMaster</h1>
      </header>
      <nav className="flex gap-4 lg:gap-10">
        <SelectLanguage />
        <BtnMenuMovil />
        <Links linksScroll={linksScroll} />
      </nav>
    </header>
  );
};
