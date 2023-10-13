import { IconType } from "react-icons";

interface HeaderBlogProps {
  Icon: IconType;
  title: string;
  date: string;
}

export const HeaderBlog = ({ Icon, title, date }: HeaderBlogProps) => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between items-center gap-2">
        {/* author */}
        <div className="flex gap-1 items-center">
          <div className="p-1 bg-yellow-600 rounded-full">
            <Icon />
          </div>
          <span className="text-gray-500">{title}</span>
        </div>
        {/* date */}
        <span className="text-gray-500 text-xs font-lora">{date}</span>
      </div>
    </div>
  );
};
