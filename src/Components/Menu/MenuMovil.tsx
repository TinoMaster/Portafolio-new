import { useContext } from "react";
import { linksScroll } from "../../data/linksMenu";
import AppContext from "../../context/appContext";
import { Link, useLocation } from "react-router-dom";
import { LinksSocial } from "../Links Social";

export const MenuMovil = () => {
  const context = useContext(AppContext);
  const { pathname } = useLocation();
  const regex = /\/\w*/;
  const route = pathname.match(regex) ?? "";
  return (
    <aside
      className={`w-screen h-screen flex flex-col justify-center items-center transition-all bg-gradient-to-b z-30 to-zinc-900 from-darkMode text-lightMode fixed ${
        context?.menuMovile ? "translate-x-0" : "-translate-x-full"
      } z-20`}
    >
      <nav className="p-4 flex flex-col justify-center items-center gap-8 text-3xl md:hidden font-siliguri font-normal">
        {linksScroll?.map((link) => (
          <Link
            className={`flex items-baseline transition-colors relative ${
              route[0] === link.path ? "border-b" : "hover:text-slate-400"
            }`}
            onClick={context?.handlerMenuMovile}
            key={link.name}
            to={link.path}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <LinksSocial />
    </aside>
  );
};
