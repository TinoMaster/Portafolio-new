import { useContext } from "react";
import { linksScroll } from "../../data/linksMenu";
import AppContext from "../../context/appContext";

export const MenuMovil = () => {
  const context = useContext(AppContext);
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className={`w-screen h-screen flex justify-center items-center transition-all bg-gradient-to-b z-30 to-zinc-900 from-darkMode text-lightMode fixed ${
        context?.menuMovile ? "translate-x-0" : "-translate-x-full"
      } z-20`}
    >
      <div className="p-4 flex flex-col justify-center items-center gap-8 text-3xl md:hidden font-siliguri font-normal">
        {linksScroll?.map((link) => (
          <a
            key={link.name}
            href="seccion1"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.section);
              context?.handlerMenuMovile();
            }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};
