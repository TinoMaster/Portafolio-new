import { linksScroll } from "../../data/linksMenu";
import { BtnMenuMovil } from "./BtnMenuMovil";
import { Links } from "./Links";
import { SelectLanguage } from "./SelectLenguage";

export const Menu = () => {
  return (
    <header className="flex h-[70px] justify-between items-center w-full px-3 lg:px-10 py-3 lg:py-5 fixed z-50 bg-gradient-to-b">
      <header className="flex items-center gap-1">
        {/* <Logo /> */}
        <h1 className="text-2xl font-inter">TinoMaster</h1>
      </header>
      <nav className="flex gap-4 lg:gap-10">
        <Links linksScroll={linksScroll} />
        <SelectLanguage />
        <BtnMenuMovil />
      </nav>
    </header>
  );
};
