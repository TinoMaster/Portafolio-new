import { motion } from "framer-motion";
import React from "react";

export const BoxImage = ({ darkMode, image }) => {
  return (
    <div className="flex items-center justify-center w-full h-[300px] lg:h-full md:w-1/2 px-4 py-7">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`w-full h-full ${
          !darkMode ? "bg-white/5" : "bg-slate-200"
        }  rounded-lg overflow-hidden shadow-md`}
      >
        {" "}
        <img className="w-full h-full object-cover" src={image} alt="" />
      </motion.div>
    </div>
  );
};
