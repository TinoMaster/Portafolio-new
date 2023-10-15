import { Blog } from "../../../../models/types/Blog";

interface HeaderItemBlogProps {
  title: Blog["title"];
  date: Blog["date"];
  description: Blog["description"];
  image: Blog["image"];
  category: Blog["category"];
}

export const Header = ({
  date,
  description,
  image,
  title,
  category,
}: HeaderItemBlogProps) => {
  return (
    <div className="pt-[40px]">
      <span className="text-xs">{date}</span>
      <span className="text-xs">{category}</span>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="font-semibold">{description}</p>
      <div className="">
        <img src={image} alt="" />
      </div>
    </div>
  );
};
