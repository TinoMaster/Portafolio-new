import { convertSectionTitle } from "../../utils/convertTilteInId";
import { Blog, BlogSection } from "../../models/types/Blog";

interface SectionNavigationProps {
  itemBlog: Blog;
  visibleSection: string;
  ajustScrollBlogNavegation: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    section: BlogSection
  ) => void;
}

export const SectionNavigation = ({
  itemBlog,
  visibleSection,
  ajustScrollBlogNavegation,
}: SectionNavigationProps) => {
  return (
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
                className={`flex items-center gap-2 cursor-pointer ${
                  visibleSection ===
                  `${convertSectionTitle(section.title, section.id)}`
                    ? "text-primary"
                    : "hover:text-slate-400"
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                <span className="text-sm">{section.title}</span>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};
