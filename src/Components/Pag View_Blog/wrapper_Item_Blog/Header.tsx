import { iconsHeadBlog } from "../../../data/iconsHeadBlog";
import { Blog } from "../../../models/types/Blog";
import { whatColorIs } from "../../../utils/colorIconBlog";

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
  const Icon = iconsHeadBlog[category];
  const background = whatColorIs(category);
  return (
    <div className="flex flex-col gap-2 pt-[40px]">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="font-semibold">{description}</p>
      <span className="text-xs">{date}</span>
      <div className="flex items-center gap-2 text-2xl">
        <Icon className={`p-1 rounded-full ${background}`} />
        <span className="text-xl">{category}</span>
      </div>
      <div className="">
        <img src={image} alt="" />
      </div>
    </div>
  );
};