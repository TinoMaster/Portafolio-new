import { motion } from "framer-motion";
import { resumeAboutMe } from "../../../animation/framers";
import { FcPortraitMode } from "react-icons/fc";
import { aboutMe } from "../../../data/aboutMe";

export const Resume = () => {
  const { description, lenguages } = aboutMe;
  return (
    <motion.div
      variants={resumeAboutMe}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-4 lg:w-1/2 m-auto h-full"
    >
      <p className="w-full flex text-lg gap-1 justify-center items-center font-semibold">
        <span className="flex items-center gap-2">
          <FcPortraitMode className="text-lg" /> Bienvenido a mi Portafolio.
        </span>
      </p>

      <p className="w-full text-justify font-light">{description}</p>
      <div className="flex flex-col gap-3 bg-black/5 p-3 rounded-md">
        <h4 className="font-semibold w-full text-center">Languages:</h4>
        <div className="flex w-full gap-3 justify-center">
          <p className="text-sm p-1">Spanish: {lenguages.Spanish}</p>
          <p className="text-sm p-1">English: {lenguages.English}</p>
          <p className="text-sm p-1">Italian: {lenguages.Italian}</p>
        </div>
      </div>
    </motion.div>
  );
};
