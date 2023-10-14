import { useEffect, useRef, useState } from "react";
import { categories } from "../../../../data/blogs/categories";
import { Category } from "./Category";
import { motion } from "framer-motion";

export const Categories = () => {
  const [width, setWhidth] = useState(0);
  const categoriesCarousel = useRef<HTMLDivElement | null>(null);
  

  useEffect(() => {
    if (categoriesCarousel.current) {
      setWhidth(
        categoriesCarousel.current.scrollWidth -
          categoriesCarousel.current.offsetWidth
      );
    }
  }, []);

  return (
    <motion.div
      ref={categoriesCarousel}
      whileTap={{ cursor: "grabbing" }}
      className="flex lg:justify-center overflow-hidden relative"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex w-max gap-4 lg:gap-7 cursor-grab"
      >
        {categories?.map((category) => (
          <Category key={category} category={category} />
        ))}
      </motion.div>
    </motion.div>
  );
};
