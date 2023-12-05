import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardBigProps {
  image: string;
  title: string;
  brand?: string;
  sections: string[];
  components?: JSX.Element[];
}

export const ProjectCard = ({
  image,
  sections,
  title,
  brand,
  components,
}: ProjectCardBigProps) => {
  const [section, setSection] = useState(sections[0]);

  return (
    <section className="text-gray-400">
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        key={image}
        className="container px-4 py-5 mx-auto"
      >
        <div className="max-w-[600px] mx-auto flex gap-3 flex-col">
          <img
            alt={`imagen del projecto ${title}`}
            className="w-full h-64 object-contain rounded bg-black/5 shadow-md"
            src={image}
          />
          <div className="w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h3 className="text-sm title-font text-gray-500 tracking-widest">
              {brand}
            </h3>
            <h1 className="text-white text-3xl font-medium mb-4">{title}</h1>
            <div className="flex mb-4">
              {sections.map((sect) => (
                <span
                  onClick={() => setSection(sect)}
                  key={sect}
                  className={`flex-grow text-indigo-400 border-b-2 ${
                    section === sect ? "border-indigo-500" : ""
                  } py-2 text-lg px-1 hover:cursor-pointer`}
                >
                  {sect}
                </span>
              ))}
            </div>
            <div className="flex justify-center min-h-[500px]">
              {components && components[sections.indexOf(section)]}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
