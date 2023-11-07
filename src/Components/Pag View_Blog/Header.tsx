import { iconsHeadBlog } from "../../data/iconsHeadBlog";
import { Blog } from "../../models/types/Blog";
import { whatColorIs } from "../../utils/colorIconBlog";
import { formatDate } from "../../utils/formatDate";
import { FormatTextWithLinks } from "../Helpers/FormatTextWithLinks";
import { CiCalendarDate } from "react-icons/ci";

interface HeaderItemBlogProps {
  title: Blog["title"];
  date: Blog["date"];
  description: Blog["description"];
  image: Blog["image"];
  category: Blog["category"];
  content: Blog["content"];
}

export const Header = ({
  date,
  description,
  image,
  title,
  category,
  content,
}: HeaderItemBlogProps) => {
  const Icon = iconsHeadBlog[category];
  const background = whatColorIs(category);
  return (
    <div className="flex flex-col gap-2 pt-[40px] text-sm lg:text-lg">
      <h1 className="text-2xl lg:text-3xl font-bold">{title}</h1>
      <span className="text-xs flex items-center gap-1">
        <CiCalendarDate className="text-lg" /> {formatDate(date)}
      </span>
      <p className="font-semibold text-slate-300">{description}</p>
      <div className="flex items-center gap-2 text-2xl">
        <Icon className={`p-1 rounded-full ${background}`} />
        <span className="text-sm font-medium text-slate-300">{category}</span>
      </div>
      <div className="w-full my-4">
        <img src={image} alt="" className="w-full object-cover" />
      </div>
      <FormatTextWithLinks text={content} />
    </div>
  );
};
