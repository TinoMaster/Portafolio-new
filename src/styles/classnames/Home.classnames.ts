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
      "from-primary/50 to-white/50": color === "primary",
      "from-secondary/50 to-white/50": color === "secondary",
      "from-third/50 to-white/50": color === "third",
    }
  );

  const boxStrength_itemStyle = classNames({
    "shadow-primary/5": color === "primary",
    "shadow-secondary/5": color === "secondary",
    "shadow-third/5": color === "third",
  });
  const iconStrength_itemStyle = classNames({
    "shadow-primary/30": color === "primary",
    "shadow-secondary/30": color === "secondary",
    "shadow-third/30": color === "third",
  });

  return { svgHomeStyle, iconStrength_itemStyle, boxStrength_itemStyle };
};
