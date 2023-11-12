import { IconType } from "react-icons";
import { Colors } from "../models/types/Color";

interface Strength_CardProps {
  title: string;
  Icon: IconType;
  description: string;
  color: Colors;
}

export const Strength_Card = ({
  title,
  Icon,
  description,
  color,
}: Strength_CardProps) => {
  return (
    <div key={title} className="lg:w-1/3">
      <div
        className={`flex flex-col justify-center items-center gap-2 p-3 lg:top-10 relative shadow-2xl rounded-md ${
          color === "primary" ? "shadow-primary/5" : ""
        } ${color === "secondary" ? "shadow-secondary/5" : ""} ${
          color === "third" ? "shadow-third/5" : ""
        }`}
      >
        <Icon
          className={`text-4xl p-2 lg:text-5xl lg:p-3 shadow-lg rounded-full ${
            color === "primary" ? "shadow-primary/30" : ""
          } ${color === "secondary" ? "shadow-secondary/30" : ""} ${
            color === "third" ? "shadow-third/30" : ""
          }`}
        />
        <h3 className="text-sm  font-roboto">{title}</h3>
        <p className="text-sm text-center font-light font-roboto ">
          {description}
        </p>
      </div>
    </div>
  );
};
