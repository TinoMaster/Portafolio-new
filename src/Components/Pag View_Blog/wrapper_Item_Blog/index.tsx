import { SectionItemBlog } from "./SectionItemBlog";
import { ButtonBack } from "./ButtonBack";
import { Header } from "./Header";
import { Blog, BlogSection } from "../../../models/types/Blog";

interface WrapperItemBlogProps {
  itemBlog: Blog;
  ajustScrollBlogNavegation: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    section: BlogSection
  ) => void;
}

export const WrapperItemBlog = ({
  itemBlog,
  ajustScrollBlogNavegation,
}: WrapperItemBlogProps) => {
  return (
    <div className="grid grid-cols-5 p-2 text-slate-300 font-normal mt-20 font-inter overflow-hidden min-h-screen">
      <div className="gradient"></div>
      <div className="col-span-full lg:col-start-2 lg:col-end-5 flex container flex-col gap-3 z-10 relative">
        <ButtonBack />
        <Header
          title={itemBlog.title}
          category={itemBlog.category}
          date={itemBlog.date}
          description={itemBlog.description}
          image={itemBlog.image}
          content={itemBlog.content}
        />
        <div className="flex flex-col gap-3">
          {itemBlog.sections.map((section) => (
            <SectionItemBlog key={section.id} section={section} />
          ))}
        </div>
      </div>
      {/* navegacion de secciones */}
      <div className="col-span-1 bg-black/5 shadow-md hidden lg:block p-5 relative z-10">
        <div className="fixed">
          <h4 className="text-center text-slate-400 font-lora">Navegacion</h4>
          <div className="flex flex-col gap-4 p-5">
            {itemBlog.sections
              .filter((el) => el.title)
              .map((section) => (
                <a
                  onClick={(e) => ajustScrollBlogNavegation(e, section)}
                  key={section.id}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  <span className="text-sm">{section.title}</span>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
