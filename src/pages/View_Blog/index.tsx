import { useParams } from "react-router-dom";
import useViewBlog from "../../Hooks/useViewBlog";
import { Blog } from "../../models/types/Blog";
import LoadingPage from "../../Components/loaders/LoadingPage";
import { SectionNavigation } from "../../Components/Pag View_Blog/SectionNavigation";
import { Header } from "../../Components/Pag View_Blog/Header";
import { SectionItemBlog } from "../../Components/Pag View_Blog/SectionItemBlog";
import { MenuViewOptionsBlogMovil } from "../../Components/Pag View_Blog/MenuViewOptionsBlogMovil";

const PageViewBlog = () => {
  const params = useParams<{ id: Blog["id"] }>();
  const { id } = params;
  const { itemBlog, loading, ajustScrollBlogNavegation, visibleSection } =
    useViewBlog(id ?? "");
  return (
    <section>
      {loading ? (
        <LoadingPage />
      ) : (
        <section className="grid grid-cols-5 p-4 relative text-slate-300 font-normal mt-16 lg:mt-20 font-inter overflow-hidden min-h-screen">
          <MenuViewOptionsBlogMovil childrenName="Navegacion">
            <div className="w-full">
              <SectionNavigation
                sections={itemBlog.sections}
                visibleSection={visibleSection}
                ajustScrollBlogNavegation={ajustScrollBlogNavegation}
              />
            </div>
          </MenuViewOptionsBlogMovil>
          <article
            id="view_blog"
            className="col-span-full lg:col-start-2 lg:col-end-5 flex container lg:px-20 flex-col gap-3 z-10 relative"
          >
            <Header
              title={itemBlog.title}
              category={itemBlog.category}
              date={itemBlog.date}
              description={itemBlog.description}
              image={itemBlog.image}
              content={itemBlog.content}
            />
            <article className="flex flex-col gap-3">
              {itemBlog.sections.map((section) => (
                <SectionItemBlog key={section.id} section={section} />
              ))}
            </article>
          </article>
        </section>
      )}
    </section>
  );
};

export default PageViewBlog;
