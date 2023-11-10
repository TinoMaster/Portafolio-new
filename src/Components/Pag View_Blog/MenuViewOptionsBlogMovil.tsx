import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiSolidShareAlt } from "react-icons/bi";
import { MdOutlineSaveAlt } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import { ButtonBack } from "./ButtonBack";

interface MenuViewOptionsBlogMovilProps {
  children?: React.ReactNode;
  childrenName?: string;
}

export const MenuViewOptionsBlogMovil = ({
  children,
  childrenName,
}: MenuViewOptionsBlogMovilProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => setOpenMenu(!openMenu);

  return (
    <aside className="col-span-full lg:col-span-1 fixed right-0 lg:right-auto top-[70px] w-full lg:w-auto z-30">
      <fieldset
        onClick={handleOpenMenu}
        className="fixed right-4 top-[80px] p-2 rounded-full z-10 bg-darkMode shadow-md lg:hidden"
      >
        {openMenu ? <AiOutlineClose /> : <SlOptionsVertical />}
      </fieldset>

      <nav
        className={`top-10 right-0 rounded-md p-2 bg-gradient-to-t from-darkMode via-slate-800 to-darkMode shadow lg:h-screen shadow-black/30 transition-transform ${
          openMenu ? "scale-100" : "scale-0 lg:scale-100"
        }`}
      >
        <ul className="flex gap-3 p-4 text-xs lg:text-sm">
          <li className="flex items-center gap-2 hover:cursor-pointer hover:text-slate-400 transition-colors">
            <ButtonBack />
          </li>
          <li className="flex items-center gap-2 hover:cursor-pointer hover:text-slate-400 transition-colors">
            <BiSolidShareAlt /> Compartir
          </li>
          <li className="flex items-center gap-2 hover:cursor-pointer hover:text-slate-400 transition-colors">
            <MdOutlineSaveAlt /> Notion
          </li>
          <li className="flex items-center gap-2 hover:cursor-pointer hover:text-slate-400 transition-colors">
            <MdOutlineSaveAlt />
            Anki
          </li>
        </ul>
        {children && (
          <div className="flex flex-col">
            {childrenName ? (
              <p className="text-xs lg:text-sm bg-black/10 py-3 px-4 rounded-md">
                {childrenName}
              </p>
            ) : null}
            {children}
          </div>
        )}
      </nav>
    </aside>
  );
};
