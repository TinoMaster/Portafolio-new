import { useNavigate, useParams } from "react-router-dom";
import useBlog from "../../../../Hooks/useBlog";
import { ArrValidCategory, BlogCategory } from "../../../../models/types/Blog";
import { ItemBlog } from "../blog";
import { ListLoading } from "../../../loaders/listLoader";
import { blogSoon } from "../../../../utils/images";

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
    <div className="grid grid-cols-2 min-h-[50vh] gap-2 lg:gap-4">
      {loading ? (
        <ListLoading />
      ) : !blogsFilter.length ? (
        <div className="w-screen flex p-5 justify-center container items-center">
          <img src={blogSoon} className="max-w-[500px] w-full object-cover"/>
        </div>
      ) : (
        blogsFilter?.map((blog) => <ItemBlog key={blog.id} blog={blog} />)
      )}
    </div>
  );
};
