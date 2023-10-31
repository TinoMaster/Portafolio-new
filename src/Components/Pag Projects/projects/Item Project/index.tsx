import { BoxImage } from "./BoxImages";
import { ProjectTitle } from "./ProjectTitle";
import { DescripProject } from "./DescripProject";
import { Tegnologies } from "./Tegnologies";
import { LinksProject } from "./LinksProject";
import { motion } from "framer-motion";
import { resumeAboutProject } from "../../../../animation/framers";
import { ProjectProps } from "../../../../models/types/Project";

export const Project = ({ project, index }: ProjectProps) => {
  return (
    <div
      className={`flex flex-wrap ${
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      } justify-center w-full rounded-lg shadow-lg`}
    >
      <BoxImage image={project.image} />
      <motion.div
        variants={resumeAboutProject}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.7 }}
        className="flex flex-col justify-around w-full md:w-1/2 p-3"
      >
        <ProjectTitle name={project.name} />
        <DescripProject description={project.description} />
        <Tegnologies
          tegnologiesF={project.tegnologiesF}
          tegnologiesB={project.tegnologiesB}
          dataBase={project.dataBase}
        />
        <LinksProject onlyIcon={false} links={project.links} />
      </motion.div>
    </div>
  );
};
