import { Blog } from "../../../../models/types/Blog";
import { iconsHeadBlog } from "../../../../data/iconsHeadBlog";
import { Link } from "react-router-dom";
import { Content } from "./content/Content";

export const ItemBlog = ({ blog }: { blog: Blog }) => {
  const icon = iconsHeadBlog[blog.category];

  return (
    <Link to={`/blog/view_blog/${blog.id}`} className="w-full lg:w-1/2 p-2">
      <div className="flex items-center bg-white/5 rounded-md p-3 shadow shadow-black/10 hover:cursor-pointer hover:bg-white/10 transition-colors duration-300">
        <Content
          category={blog.category}
          icon={icon}
          title={blog.title}
          image={blog.image}
          date={blog.date}
        />
      </div>
    </Link>
  );
};
