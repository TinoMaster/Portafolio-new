import { Blog } from "../../../../../models/types/Blog";

interface ImageProps {
  image: Blog["image"];
  title: Blog["title"];
}
export const Image = ({ image, title }: ImageProps) => {
  return (
    <div className="w-1/5 h-[60px] py-2">
      <img className="w-full h-full rounded-md object-cover shadow-lg shadow-yellow-300/10" src={image} alt={title} />
    </div>
  );
};
