import { SvgSectionProps } from "../../../../models/types/SectionBlogHome";
import { home_classnames } from "../../../../styles/classnames/Home.classnames";

export const SvgSection = ({ img, color }: SvgSectionProps) => {
  const { svgHomeStyle } = home_classnames({ color });
  return (
    <div className="w-full lg:w-1/2 overflow-hidden">
      <div className={svgHomeStyle}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};
