import { IconType } from "react-icons";
import { Colors } from "../../../models/types/Color";
import { home_classnames } from "../../../styles/classnames/Home.classnames";

interface Strength_itemProps {
  title: string;
  Icon: IconType;
  description: string;
  color: Colors;
}

export const Strength_item = ({
  title,
  Icon,
  description,
  color,
}: Strength_itemProps) => {
  const { iconStrength_itemStyle, boxStrength_itemStyle } = home_classnames({
    color,
  });
  return (
    <div key={title} className="p-1 w-10/12 m-auto lg:w-1/3">
      <div
        className={`${boxStrength_itemStyle} flex flex-col justify-center items-center gap-2 p-3 lg:top-10 relative shadow-2xl rounded-md`}
      >
        <Icon
          className={`${iconStrength_itemStyle} text-4xl p-2 lg:text-7xl lg:p-5 shadow-lg rounded-full`}
        />
        <h3 className="text-sm">{title}</h3>
        <p className="text-xs text-center">{description}</p>
      </div>
    </div>
  );
};
