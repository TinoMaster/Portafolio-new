import { fondo_blog } from "../../../utils/images";
import { svgBlog } from "../../../utils/svgs";
import { Hero } from "../../global/Hero";
import { Presentation } from "./Presentation";

export const HeroBlog = () => {
  return (
    <>
      <Hero Presentation={Presentation} image={svgBlog} fondo={fondo_blog} />
    </>
  );
};
