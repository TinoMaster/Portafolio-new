import { motion } from "framer-motion";
import React from "react";
import { imageaboutme1 } from "../../../animation/framers";
import { FaNode } from "react-icons/fa";

export const Card1 = () => {
  return (
    <motion.div
      variants={imageaboutme1}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 1.8 }}
      className="flex flex-col gap-2 relative justify-center rounded-md bg-white/90 items-end hover:cursor-pointer"
    >
      <motion.div className="flex flex-col justify-center select-none w-[120px] h-[170px] border border-secondary lg:w-[180px] lg:h-[250px] p-3 shadow-lg shadow-black/40 rounded-md ">
        <div className="flex flex-col gap-1">
          <FaNode className="text-2xl lg:text-4xl bg-primary text-white p-1 rounded-md" />
          <h3 className="font-semibold text-sm lg:text-base text-slate-700">
            Backend Dev
          </h3>
        </div>

        <p className="text-xs text-s lg:text-sm text-slate-600">
          I excel in backend development, showcasing creativity through
          innovative solutions
        </p>
        <button className="w-full text-start text-xs lg:text-lg text-primary font-semibold lg:py-2">
          Experience
        </button>
      </motion.div>
    </motion.div>
  );
};
