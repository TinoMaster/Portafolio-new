import { fondo_blog } from "../../../utils/images";
import { FondoHero } from "../../global/Hero/FondoHero";
import { ImageHero } from "../../global/Hero/ImageHero";
import { PresentationHero } from "../../global/Hero/PresentationHero";
import { svgBlog } from "../../../utils/svgs";
import { Title } from "./Presentation/Title";

export const HeroBlog = () => {
  return (
    <div className="w-full h-full relative">
      <FondoHero image={fondo_blog} />
      <div className="principalSectionHero">
        <ImageHero image={svgBlog} />
        <PresentationHero>
          <Title />
        </PresentationHero>
      </div>
    </div>
  );
};
