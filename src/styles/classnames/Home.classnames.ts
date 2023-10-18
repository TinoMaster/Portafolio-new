import classNames from "classnames";
import { Colors } from "../../models/types/Color";
interface SectionStyle {
  color?: Colors;
}

export const home_classnames = ({ color }: SectionStyle) => {
  const svgHomeStyle = classNames(
    "w-6/12",
    "m-auto",
    "rounded-full",
    "bg-gradient-to-tr",
    {
      "from-primary/10 to-white/50": color === "primary",
      "from-secondary/10 to-white/50": color === "secondary",
      "from-third/10 to-white/50": color === "third",
    }
  );

  return { svgHomeStyle };
};
