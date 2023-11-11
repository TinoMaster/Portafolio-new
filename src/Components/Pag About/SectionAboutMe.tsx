import { aboutMe } from "../../data/aboutMe";
import { svgAbout } from "../../utils/svgs";
import { Item_ImageTitleDescription } from "../Item_ImageTitleDescription";

export const SectionAboutMe = () => {
  return (
    <section className="flex flex-wrap w-full gap-10">
      <Item_ImageTitleDescription
        title="Sobre mi"
        description={aboutMe.description}
        img={svgAbout}
        position="start"
      />
    </section>
  );
};
