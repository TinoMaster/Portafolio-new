import { Link, useLocation } from "react-router-dom";
import { linksScroll } from "../../data/linksMenu";

export const Links = () => {
  const { pathname } = useLocation();

  /* //Todo: ver aqui */
  const regex = /\/.+\//g;
  console.log(pathname.match(regex));

  return (
    <ul className="md:flex relative hidden pr-2 gap-4 last:mr-5">
      {linksScroll?.map((link) => (
        <Link
          className={`flex items-baseline transition-colors relative ${
            pathname === link.path ? "border-b" : "hover:text-slate-400"
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
