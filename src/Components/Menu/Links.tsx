import { Link, useLocation } from "react-router-dom";
import { LinksScroll } from "../../data/linksMenu";
import { useTranslation } from "react-i18next";

interface LinksProps {
  linksScroll: LinksScroll[];
}

export const Links = ({ linksScroll }: LinksProps) => {
  const [t] = useTranslation("global");
  const { pathname } = useLocation();
  const regex = /\/\w*/;
  const route = pathname.match(regex) ?? "";

  return (
    <ul className="md:flex relative hidden pr-2 gap-4 last:mr-5">
      {linksScroll?.map((link) => (
        <Link
          className={`flex items-baseline transition-colors px-2 py-1 rounded-md relative capitalize font-inter text-xl ${
            route[0] === link.path ? "bg-white text-sec-900" : "hover:text-slate-400"
          }`}
          key={link.name}
          to={link.path}
        >
          {t(`nav.${link.name}`)}
        </Link>
      ))}
    </ul>
  );
};
