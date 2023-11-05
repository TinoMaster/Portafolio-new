import { useParams } from "react-router-dom";
import useViewBlog from "../../Hooks/useViewBlog";
import { Blog } from "../../models/types/Blog";
import { WrapperItemBlog } from "../../Components/Pag View_Blog/wrapper_Item_Blog";
import { ListLoadingBlog } from "../../Components/loaders/lisLoaderBlog";

export const ViewBlog = () => {
  const params = useParams<{ id: Blog["id"] }>();
  const { id } = params;
  const { itemBlog, loading, ajustScrollBlogNavegation, visibleSection } =
    useViewBlog(id || "");
  return (
    <div>
      {loading ? (
        <ListLoadingBlog />
      ) : (
        <WrapperItemBlog
          ajustScrollBlogNavegation={ajustScrollBlogNavegation}
          itemBlog={itemBlog}
          visibleSection={visibleSection}
        />
      )}
    </div>
  );
};
