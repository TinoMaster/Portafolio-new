import { useParams } from "react-router-dom";
import useBlog from "../../../../Hooks/useBlog";
import { BlogCategory } from "../../../../models/types/Blog";
import { ItemBlog } from "../blog";

export const WrapperBlogs = () => {
  const params = useParams();
  const { category } = params;
  const cat = category as BlogCategory;
  const { blogsFilter } = useBlog(cat);

  return (
    <div>
      {blogsFilter?.map((blog) => (
        <ItemBlog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};
