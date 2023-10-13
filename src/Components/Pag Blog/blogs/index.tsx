import { blogs } from "../../../data/blogs/blogs";
import { ItemBlog } from "./blog/index";

export const Blogs = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      {blogs?.map((blog) => (
        <ItemBlog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};
