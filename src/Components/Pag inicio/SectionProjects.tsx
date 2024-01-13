import { Link } from "react-router-dom";
import { svgProjects } from "../../utils/svgs";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const SectionProjects = () => {
  const [t] = useTranslation("global");
  return (
    <section className="relative max-w-screen-xl mx-auto py-24 lg:py-56 px-4 md:px-8">
      <div className="relative z-10 gap-5 items-center lg:flex">
        <div className="flex-1 max-w-lg py-5 sm:mx-auto text-center lg:max-w-max lg:text-left">
          <h3 className="text-2xl text-gray-100 font-semibold md:text-4xl">
            {t("projectsHome.title")}
          </h3>
          <p className="text-gray-300/80 leading-relaxed mt-3">
            {t("projectsHome.subtitle")}
          </p>
          <Link to={"/projects"}>
            <motion.button
              whileHover={{ scaleX: 1.1 }}
              className="mt-5 px-4 py-2 text-white font-medium bg-secondary/80 rounded-full flex gap-1 items-center m-auto lg:mx-0"
            >
              {t("projectsHome.buttom")}
              <FaArrowRight />
            </motion.button>
          </Link>
        </div>
        <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto translate-x-8 lg:translate-x-16 bg-gradient-to-r from-transparent via-secondary/10 to-transparent p-2 rounded-lg">
          <img
            src={svgProjects}
            width={30}
            height={30}
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};
