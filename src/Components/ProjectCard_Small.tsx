import { Link } from "react-router-dom";
import { LazyImage } from "./Helpers/LazyImage";
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

export const ProjectCard_Small = ({
  title,
  description,
  image,
}: ProjectCardProps) => {
  return (
    <div className="w-full lg:w-1/3 overflow-hidden p-2 max-w-[400px] m-auto">
      <div className="w-full rounded-md overflow-hidden shadow-lg bg-slate-900/40">
        <div className="px-10 m-1 rounded-md bg-black/10">
          <LazyImage src={image} alt={`imagen de ${name}`} />
        </div>

        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2">{title}</div>
          <p className="text-gray-500 text-base h-24">{description}</p>
        </div>

        <div className="px-6 py-4 flex justify-between items-center">
          <Link to={"/projects"} className="text-primary hover:underline">
            Ver mas
          </Link>
        </div>
      </div>
    </div>
  );
};
