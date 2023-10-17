import { SvgSection } from "./SvgSection";
import { TextSection } from "./TextSection";

interface RenderSectionProps {
  reverse: boolean;
  svg: string;
}

export const RenderSection = ({ reverse, svg }: RenderSectionProps) => {
  return (
    <div
      className={`flex flex-wrap w-full ${
        reverse ? "flex-row-reverse" : null
      } `}
    >
      <SvgSection svg={svg} />
      <TextSection />
    </div>
  );
};
