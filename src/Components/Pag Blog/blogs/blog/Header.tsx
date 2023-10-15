import { IconType } from "react-icons";
import { Blog } from "../../../../models/types/Blog";
import { whatColorIs } from "../../../../utils/colorIconBlog";
import { formatDate } from "../../../../utils/formatDate";

interface HeaderBlogProps {
  Icon: IconType;
  title: string;
  date: Blog["date"];
  category: Blog["category"];
}

export const HeaderBlog = ({
  Icon,
  title,
  date,
  category,
}: HeaderBlogProps) => {
  const background = whatColorIs(category);
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between items-center gap-2">
        {/* author */}
        <div className="flex gap-2 items-center">
          <div className={`p-1 rounded-full ${background}`}>
            <Icon className="lg:text-xl text-darkMode" />
          </div>
          <span className="text-gray-500 lg:text-xl font-light">{title}</span>
        </div>
        {/* date */}
        <span className="text-gray-500 text-xs lg:text-sm font-lora">
          {formatDate(date)}
        </span>
      </div>
    </div>
  );
};
