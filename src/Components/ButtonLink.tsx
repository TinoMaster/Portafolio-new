import { Link } from "react-router-dom";
import { Colors } from "../models/types/Color";

interface ButtonLinkProps {
  link: string;
  color: Colors;
  inline?: boolean;
}

export const ButtonLink = ({ link, color, inline }: ButtonLinkProps) => {
  return (
    <Link
      to={link}
      className={`transition-colors text-center text-white font-semibold p-3 rounded-lg ${
        color === "primary"
          ? "bg-gradient-to-tr from-primary/80 via-primary/40 to-primary/80 hover:bg-primary"
          : ""
      } ${color === "secondary" ? "bg-secondary/80 hover:bg-secondary" : ""} ${
        color === "third" ? "bg-third/80 hover:bg-third" : ""
      } ${inline ? "inline m-auto" : "block"}`}
    >
      Ir al Blog
    </Link>
  );
};
