import { IconType } from "react-icons";
import { Blog } from "../../models/types/Blog";
import { whatColorIs } from "../../utils/colorIconBlog";
import { formatDate } from "../../utils/formatDate";

interface HeaderBlogProps {
  Icon: IconType;
  category: Blog["category"];
  date: Blog["date"];
}

export const ItemCardBlogHeader = ({
  Icon,
  category,
  date,
}: HeaderBlogProps) => {
  const background = whatColorIs(category);
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between items-center gap-2">
        {/* author */}
        <div className="flex gap-2 items-center">
          <div className={`p-1 rounded-full ${background}`}>
            <Icon className="text-xs lg:text-sm" />
          </div>
          <span className="text-slate-400 text-xs lg:text-sm font-light">
            <span className="capitalize">{category}</span>
            <span className="text-xs">{`• ${formatDate(date)}`}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
