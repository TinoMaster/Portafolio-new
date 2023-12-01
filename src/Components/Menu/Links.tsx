import { Link, useLocation } from "react-router-dom";
import { LinksScroll } from "../../data/linksMenu";

interface LinksProps {
  linksScroll: LinksScroll[];
}

export const Links = ({ linksScroll }: LinksProps) => {
  const { pathname } = useLocation();
  const regex = /\/\w*/;
  const route = pathname.match(regex) ?? "";

  return (
    <ul className="md:flex relative hidden pr-2 gap-4 last:mr-5">
      {linksScroll?.map((link) => (
        <Link
          className={`flex items-baseline transition-colors relative ${
            route[0] === link.path ? "border-b" : "hover:text-slate-400"
          }`}
          key={link.name}
          to={link.path}
        >
          {link.name}
        </Link>
      ))}
    </ul>
  );
};
