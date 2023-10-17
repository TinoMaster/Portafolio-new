import { motion } from "framer-motion";
import { imageaboutme2 } from "../../../animation/framers";
import { DiJavascript1 } from "react-icons/di";

export const Card2 = () => {
  return (
    <motion.div
      variants={imageaboutme2}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 1.8 }}
      className="flex flex-col gap-2 justify-center rounded-md bg-primary items-start hover:cursor-pointer"
    >
      <motion.div className="flex flex-col justify-center select-none w-[120px] border border-secondary h-[170px] lg:w-[180px] lg:h-[250px] p-3 shadow-lg shadow-black/40 rounded-md bg-white/5">
        <div className="flex flex-col gap-1">
          <DiJavascript1 className="text-primary text-2xl lg:text-4xl bg-white rounded-md" />
          <h3 className="font-semibold text-white text-sm lg:text-base">
            Fronted Dev
          </h3>
        </div>

        <p className="text-xs text-s lg:text-sm text-white/80">
          In frontend development, I unleash creativity, crafting engaging
          interfaces and user experiences.
        </p>
        <button className="w-full text-start text-xs text-white font-semibold lg:text-lg lg:py-2">
          Creativity
        </button>
      </motion.div>
    </motion.div>
  );
};
