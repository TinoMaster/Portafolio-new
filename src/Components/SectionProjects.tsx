import { Link } from "react-router-dom";
import { svgProjects } from "../utils/svgs";
import { FaArrowRight } from "react-icons/fa";

export const SectionProjects = () => {
  return (
    <section className="relative max-w-screen-xl mx-auto py-24 lg:py-56 px-4 md:px-8">
      <div className="relative z-10 gap-5 items-center lg:flex">
        <div className="flex-1 max-w-lg py-5 sm:mx-auto text-center lg:max-w-max lg:text-left">
          <h3 className="text-3xl text-gray-100 font-semibold md:text-4xl">
            Conoce mis proyectos
          </h3>
          <p className="text-gray-300/80 leading-relaxed mt-3">
            Cada línea de código que escribo está impregnada de un deseo
            incansable de ofrecer experiencias excepcionales.
          </p>
          <Link
            className="mt-5 px-4 py-2 text-white font-medium bg-third rounded-full inline-flex gap-1 items-center"
            to={"/projects"}
          >
            Visitar
            <FaArrowRight />
          </Link>
        </div>
        <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto translate-x-8 lg:translate-x-16">
          <img src={svgProjects} width={30} height={30} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
};
