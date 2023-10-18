import { Colors } from "../../../../models/types/Color";
import { home_classnames } from "../../../../styles/classnames/Home.classnames";

interface SvgSectionProps {
  svg: string;
  color: Colors;
}

export const SvgSection = ({ svg, color }: SvgSectionProps) => {
  const { svgHomeStyle } = home_classnames({ color });
  return (
    <div className="w-full lg:w-1/2 overflow-hidden">
      <div className={svgHomeStyle}>
        <img src={svg} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
