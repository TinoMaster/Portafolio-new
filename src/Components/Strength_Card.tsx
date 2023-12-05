import { IconType } from "react-icons";
import { Colors } from "../models/types/Color";
import { useTranslation } from "react-i18next";

interface Strength_CardProps {
  translate: string;
  Icon: IconType;
  color: Colors;
}

export const Strength_Card = ({
  Icon,
  color,
  translate,
}: Strength_CardProps) => {
  const [t] = useTranslation("global");
  return (
    <div className="lg:w-1/3 max-w-[400px] m-auto">
      <div
        className={`flex flex-col min-h-[200px] bg-darkMode justify-cente items-center gap-2 p-3 lg:top-10 relative shadow-2xl rounded-md ${
          color === "primary" ? "shadow-primary/5" : ""
        } ${color === "secondary" ? "shadow-secondary/5" : ""} ${
          color === "third" ? "shadow-third/5" : ""
        }`}
      >
        <Icon
          className={`text-5xl p-2 lg:text-5xl lg:p-3 shadow-lg rounded-full ${
            color === "primary" ? "shadow-primary/30" : ""
          } ${color === "secondary" ? "shadow-secondary/30" : ""} ${
            color === "third" ? "shadow-third/30" : ""
          }`}
        />
        <h3 className="text-base">{t(`strengths.${translate}.title`)}</h3>
        <p className="text-center font-light">
          {t(`strengths.${translate}.description`)}
        </p>
      </div>
    </div>
  );
};
