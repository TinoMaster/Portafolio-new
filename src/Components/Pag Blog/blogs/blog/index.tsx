import { Blog } from "../../../../models/types/Blog";
import { HeaderBlog } from "./Header";
import { iconsHeadBlog } from "../../../../data/iconsHeadBlog";
import { PrincipalContent } from "./PrincipalContent";

export const ItemBlog = ({ blog }: { blog: Blog }) => {
  const icon = iconsHeadBlog[blog.category];

  return (
    <div className="w-full flex flex-col gap-2 bg-white/5 rounded-md p-2 shadow shadow-black/10">
      <HeaderBlog Icon={icon} title={blog.title} date={blog.date} />
      <PrincipalContent
        description={blog.description}
        image={blog.image}
        title={blog.title}
      />
    </div>
  );
};
