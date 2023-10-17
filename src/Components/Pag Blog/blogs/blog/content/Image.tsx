import { Blog } from "../../../../../models/types/Blog";

interface ImageProps {
  image: Blog["image"];
  title: Blog["title"];
}
export const Image = ({ image, title }: ImageProps) => {
  return (
    <div className="w-1/5">
      <img className="w-full rounded-md" src={image} alt={title} />
    </div>
  );
};
