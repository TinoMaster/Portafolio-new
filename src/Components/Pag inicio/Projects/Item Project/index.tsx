import React from "react";
import { BoxImage } from "./BoxImages";
import { ProjectTitle } from "./ProjectTitle";
import { DescripProject } from "./DescripProject";
import { Tegnologies } from "./Tegnologies";
import { LinksProject } from "./LinksProject";
import { motion } from "framer-motion";
import { resumeAboutProject } from "../../../../animation/framers";

export const Project = ({ darkMode, properties, index }) => {
  const {
    name,
    description,
    image,
    links,
    tegnologiesF,
    tegnologiesB,
    dataBase,
  } = properties;
  return (
    <div
      className={`flex flex-wrap ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      } justify-center w-full rounded-lg ${!darkMode ? "" : ""}`}
    >
      <BoxImage darkMode={darkMode} image={image} />
      <motion.div
        variants={resumeAboutProject}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.7 }}
        className="flex flex-col w-full md:w-1/2 p-3 pb-0"
      >
        <ProjectTitle name={name} />
        <DescripProject description={description} />
        <Tegnologies
          tegnologiesF={tegnologiesF}
          tegnologiesB={tegnologiesB}
          dataBase={dataBase}
        />
        <LinksProject links={links} />
      </motion.div>
    </div>
  );
};
