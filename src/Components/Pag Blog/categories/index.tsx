import { categories } from "../../../data/blogs/categories";
import { Category } from "./Category";
import { useNavCategoriesBlog } from "../../../Hooks/useNavCategoriesBlog";
import { motion } from "framer-motion";

export const Categories = () => {
  const { width, element } = useNavCategoriesBlog();

  return (
    <motion.div
      ref={element}
      whileTap={{ cursor: "grabbing" }}
      className="flex lg:justify-center overflow-hidden relative"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex w-max gap-4 lg:gap-7 cursor-grab"
      >
        {["Todos", ...categories]?.map((category) => (
          <Category key={category} category={category} />
        ))}
      </motion.div>
    </motion.div>
  );
};
