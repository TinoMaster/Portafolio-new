import { IconType } from "react-icons";
import { Blog } from "../../../../../models/types/Blog";
import { whatColorIs } from "../../../../../utils/colorIconBlog";
import { formatDate } from "../../../../../utils/formatDate";

interface HeaderBlogProps {
  Icon: IconType;
  category: Blog["category"];
  date: Blog["date"];
}

export const HeaderBlog = ({ Icon, category, date }: HeaderBlogProps) => {
  const background = whatColorIs(category);
  const upperCategory = [
    category[0].toUpperCase(),
    ...category.split("").slice(1),
  ].join("");
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between items-center gap-2">
        {/* author */}
        <div className="flex gap-2 items-center">
          <div className={`p-1 rounded-full ${background}`}>
            <Icon className="text-xs lg:text-sm" />
          </div>
          <span className="text-gray-500 text-xs lg:text-base font-light">
            {`${upperCategory} • ${formatDate(date)}`}
          </span>
        </div>
      </div>
    </div>
  );
};
