import { BtnMenuMovil } from "./BtnMenuMovil";
import { Links } from "./Links";
import { Logo } from "./Logo";

export const Menu = () => {
  return (
    <header className="flex justify-between items-center w-full py-3 fixed z-40 bg-gradient-to-b from-darkMode to-darkMode/80">
      <header className="flex items-center gap-1">
        <Logo />
        <h1 className="text-lg">TinoMaster</h1>
      </header>
      <nav className="flex">
        <BtnMenuMovil />
        <Links />
      </nav>
    </header>
  );
};
