import classNames from "classnames";
import { Colors } from "../../models/types/Color";
interface SectionStyle {
  color?: Colors;
}

export const home_classnames = ({ color }: SectionStyle) => {
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

  return { iconStrength_itemStyle, boxStrength_itemStyle };
};
