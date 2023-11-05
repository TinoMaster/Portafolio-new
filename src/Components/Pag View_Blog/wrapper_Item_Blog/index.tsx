import { SectionItemBlog } from "./SectionItemBlog";
import { ButtonBack } from "./ButtonBack";
import { Header } from "./Header";
import { Blog, BlogSection } from "../../../models/types/Blog";
import { SectionNavigation } from "./SectionNavigation";

interface WrapperItemBlogProps {
  itemBlog: Blog;
  visibleSection: string;
  ajustScrollBlogNavegation: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    section: BlogSection
  ) => void;
}

export const WrapperItemBlog = ({
  itemBlog,
  visibleSection,
  ajustScrollBlogNavegation,
}: WrapperItemBlogProps) => {
  return (
    <div className="grid grid-cols-5 p-2 text-slate-300 font-normal mt-16 lg:mt-20 font-inter overflow-hidden min-h-screen">
      <SectionNavigation
        itemBlog={itemBlog}
        visibleSection={visibleSection}
        ajustScrollBlogNavegation={ajustScrollBlogNavegation}
      />
      <div className="col-span-full lg:col-start-2 lg:col-end-5 flex container lg:px-20 flex-col gap-3 z-10 relative">
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
    </div>
  );
};
