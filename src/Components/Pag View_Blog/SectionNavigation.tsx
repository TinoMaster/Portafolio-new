import { convertSectionTitle } from "../../utils/convertTilteInId";
import { BlogSection } from "../../models/types/Blog";

interface SectionNavigationProps {
  sections: BlogSection[];
  visibleSection: string;
  ajustScrollBlogNavegation: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    section: BlogSection
  ) => void;
}

export const SectionNavigation = ({
  sections,
  visibleSection,
  ajustScrollBlogNavegation,
}: SectionNavigationProps) => {
  return (
    <section className="">
      <nav className="flex flex-col gap-4 p-5">
        {sections
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
              <span className="text-xs lg:text-sm">{section.title}</span>
            </a>
          ))}
      </nav>
    </section>
  );
};
