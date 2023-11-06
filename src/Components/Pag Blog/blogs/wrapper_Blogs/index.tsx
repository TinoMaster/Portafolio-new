import { useNavigate, useParams } from "react-router-dom";
import useBlog from "../../../../Hooks/useBlog";
import { ArrValidCategory, BlogCategory } from "../../../../models/types/Blog";
import { ItemBlog } from "../blog";
import { ListLoading } from "../../../loaders/listLoader";

export const WrapperBlogs = () => {
  const navigate = useNavigate();
  const params = useParams<{ category: BlogCategory }>();
  const { category } = params;
  const { blogsFilter, loading } = useBlog(category);
  if (category) {
    if (!ArrValidCategory.includes(category)) {
      navigate("/404");
    }
  }

  return (
    <div className="flex flex-wrap min-h-screen">
      {loading ? (
        <ListLoading />
      ) : (
        blogsFilter?.map((blog) => <ItemBlog key={blog.id} blog={blog} />)
      )}
    </div>
  );
};
