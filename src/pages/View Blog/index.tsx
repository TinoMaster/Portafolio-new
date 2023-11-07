import { useParams } from "react-router-dom";
import useViewBlog from "../../Hooks/useViewBlog";
import { Blog } from "../../models/types/Blog";
import { WrapperItemBlog } from "../../Components/Pag View_Blog";
import LoadingPage from "../../Components/loaders/LoadingPage";

export const ViewBlog = () => {
  const params = useParams<{ id: Blog["id"] }>();
  const { id } = params;
  const { itemBlog, loading, ajustScrollBlogNavegation, visibleSection } =
    useViewBlog(id || "");
  return (
    <div>
      {loading ? (
        <LoadingPage />
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
