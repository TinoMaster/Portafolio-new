import { Link, useLocation } from "react-router-dom";
import { BlogCategory } from "../../../models/types/Blog";
import { motion } from "framer-motion";

export const Category = ({ category }: { category: BlogCategory | string }) => {
  const pathName = useLocation();
  const currentPath = pathName.pathname.slice(6);

  if (category === "Todos")
    return (
      <Link to={`/blog/`} className="relative">
        {currentPath === "" ? (
          <motion.div
            layoutId="active"
            className="absolute w-full h-full border-b"
          ></motion.div>
        ) : null}
        <span className="text-xs lg:text-xl">{category}</span>
      </Link>
    );

  return (
    <Link to={`/blog/${category}`} className="relative">
      {currentPath === category ? (
        <motion.div
          layoutId="active"
          className="absolute w-full h-full border-b"
        ></motion.div>
      ) : null}
      <span className="text-xs lg:text-xl capitalize">{category}</span>
    </Link>
  );
};
