import { useParams } from "react-router-dom";
import useBlog from "../../../../Hooks/useBlog";
import { BlogCategory } from "../../../../models/types/Blog";
import { ItemBlog } from "../blog";
import { ListLoading } from "../../../loaders/listLoader";

export const WrapperBlogs = () => {
  const params = useParams();
  const { category } = params;
  const cat = category as BlogCategory;
  const { blogsFilter, loading } = useBlog(cat);

  return (
    <div className="flex flex-wrap">
      {loading ? (
        <ListLoading />
      ) : (
        blogsFilter?.map((blog) => <ItemBlog key={blog.id} blog={blog} />)
      )}
    </div>
  );
};
