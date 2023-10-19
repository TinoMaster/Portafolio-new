import { SectionBlogHome } from "../../../../models/types/SectionBlogHome";
import { SvgSection } from "./SvgSection";
import { TextSection } from "./TextSection";

export const RenderSection = ({
  reverse,
  img,
  color,
  description,
  title,
}: SectionBlogHome) => {
  return (
    <div
      className={`flex flex-wrap w-full lg:py-10 ${
        reverse ? "flex-row-reverse" : null
      } `}
    >
      <SvgSection img={img} color={color} />
      <TextSection title={title} description={description} />
    </div>
  );
};
