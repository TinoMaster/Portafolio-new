import { Colors } from "../../../../models/types/Color";
import { SvgSection } from "./SvgSection";
import { TextSection } from "./TextSection";

interface RenderSectionProps {
  reverse: boolean;
  svg: string;
  color: Colors;
}

export const RenderSection = ({ reverse, svg, color }: RenderSectionProps) => {
  return (
    <div
      className={`flex flex-wrap w-full ${
        reverse ? "flex-row-reverse" : null
      } `}
    >
      <SvgSection svg={svg} color={color} />
      <TextSection />
    </div>
  );
};
