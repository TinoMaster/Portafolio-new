import { LazyImage } from "./Helpers/LazyImage";

interface Item_ImageTitleDescriptionProps {
  reverse?: boolean;
  img: string;
  color?: string;
  description: string;
  title: string;
  position: "start" | "center";
}

export const Item_ImageTitleDescription = ({
  reverse,
  img,
  color,
  description,
  title,
  position,
}: Item_ImageTitleDescriptionProps) => {
  return (
    <div
      className={`flex flex-wrap w-full p-2 ${
        reverse ? "flex-row-reverse" : null
      } `}
    >
      {/* SVG Section */}
      <div className="w-full lg:w-1/2 overflow-hidden">
        <div
          className={`w-7/12 h-full max-w-[200px] m-auto rounded-full bg-gradient-to-tr ${
            color === "primary" ? "from-primary/50 to-white/50" : ""
          } ${color === "secondary" ? "from-secondary/50 to-white/50" : ""} ${
            color === "third" ? "from-third/50 to-white/50" : ""
          }`}
        >
          <LazyImage src={img} alt={`imagen de ${title}`} />
        </div>
      </div>
      {/* TextSection */}
      <div className="w-full lg:w-1/2">
        <h3
          className={`font-semibold text-center ${
            position === "start" ? "lg:text-start" : ""
          } py-5 text-xl text-slate-200 lg:text-2xl`}
        >
          {title}
        </h3>
        <p
          className={`font-light text-center ${
            position === "start" ? "lg:text-start" : ""
          } text-center lg:text-xl`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
