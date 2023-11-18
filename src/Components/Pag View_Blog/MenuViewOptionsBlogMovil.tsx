import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { SlOptionsVertical } from "react-icons/sl";

interface MenuViewOptionsBlogMovilProps {
  children?: React.ReactNode;
}

export const MenuViewOptionsBlogMovil = ({
  children,
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
        {children && children}
      </nav>
    </aside>
  );
};
