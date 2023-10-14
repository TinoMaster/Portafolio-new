import { Blog } from "../../../../models/types/Blog";
import { HeaderBlog } from "./Header";
import { iconsHeadBlog } from "../../../../data/iconsHeadBlog";
import { PrincipalContent } from "./PrincipalContent";

export const ItemBlog = ({ blog }: { blog: Blog }) => {
  const icon = iconsHeadBlog[blog.category];

  return (
    <div className="flex justify-center items-center w-full lg:w-1/2 p-2">
      <div className="w-full h-full flex flex-col gap-2 bg-white/5 rounded-md p-3 shadow shadow-black/10 hover:cursor-pointer hover:bg-white/10 transition-colors duration-300">
        <HeaderBlog
          Icon={icon}
          title={blog.title}
          date={blog.date}
          category={blog.category}
        />
        <PrincipalContent
          description={blog.description}
          image={blog.image}
          title={blog.title}
        />
      </div>
    </div>
  );
};
