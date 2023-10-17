import { HeaderBlog } from "./Header";
import { PrincipalContent } from "./PrincipalContent";
import { IconType } from "react-icons";
import { Blog } from "../../../../../models/types/Blog";
import { Image } from "./Image";

interface ContentProps {
  icon: IconType;
  title: Blog["title"];
  category: Blog["category"];
  image: Blog["image"];
  date: Blog["date"];
}

export const Content = ({
  icon,
  title,
  category,
  image,
  date,
}: ContentProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-2 ">
      <HeaderBlog Icon={icon} category={category} date={date} />
      <div className="flex justify-between items-center">
        <PrincipalContent title={title} />
        <Image image={image} title={title} />
      </div>
    </div>
  );
};
