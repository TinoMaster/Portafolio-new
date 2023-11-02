import { Link, useLocation } from "react-router-dom";
import { linksScroll } from "../../data/linksMenu";
import { motion } from "framer-motion";

export const Links = () => {
  const pathName = useLocation();
  const currentPath = pathName.pathname;

  return (
    <ul className="md:flex relative hidden pr-2 gap-4 last:mr-5">
      {linksScroll?.map((link) => (
        <Link
          className={`flex items-baseline hover:text-primary/60 transition-all relative`}
          key={link.name}
          to={link.path}
        >
          {currentPath === link.path ? (
            <motion.div
              layoutId="principalMenu"
              className="absolute w-full h-full border-b"
            ></motion.div>
          ) : null}
          {link.name}
        </Link>
      ))}
    </ul>
  );
};
