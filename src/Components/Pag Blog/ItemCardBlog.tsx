import { Blog } from "../../models/types/Blog";
import { iconsHeadBlog } from "../../data/iconsHeadBlog";
import { Link } from "react-router-dom";
import { ItemCardBlogHeader } from "./ItemCardBlogHeader";
import { ItemCardBlogPrincipalContent } from "./ItemCardBlogPrincipalContent";
import { ItemCardBlogImage } from "./ItemCardBlogImage";

export const ItemCardBlog = ({ blog }: { blog: Blog }) => {
  const icon = iconsHeadBlog[blog.category];
  const { category, date, title, image } = blog;

  return (
    <Link
      to={`/blog/view_blog/${blog.id}`}
      className="col-span-2 lg:col-span-1"
    >
      <div className="flex items-center bg-white/10 rounded-md p-4 shadow shadow-black/10 hover:cursor-pointer hover:bg-white/10 transition-colors duration-300">
        <div className="w-full h-full flex flex-col gap-2">
          <ItemCardBlogHeader Icon={icon} category={category} date={date} />
          <div className="flex justify-between items-center min-h-[60px]">
            <ItemCardBlogPrincipalContent title={title} />
            <ItemCardBlogImage image={image} title={title} />
          </div>
        </div>
      </div>
    </Link>
  );
};
