import { sectionsBlogHome } from "../../../data/sectionBlogHome";
import { ButtonVisitBlog } from "./ButtonVisitBlog";
import { RenderSection } from "./Render_InfoBlog_InitialPage";

export const SectionBlogHome = () => {
  return (
    <article className="flex flex-col gap-10 container z-10 relative">
      <h3 className="w-full font-semibold text-center lg:text-start lg:py-10 text-lg lg:text-xl text-primary">
        Ya Conoces Mi Blog?
      </h3>
      <div className="flex flex-col gap-28">
        {sectionsBlogHome?.map((section, index) => (
          <RenderSection
            key={index}
            reverse={section.reverse}
            img={section.img}
            color={section.color}
            description={section.description}
            title={section.title}
          />
        ))}
      </div>
      <ButtonVisitBlog />
    </article>
  );
};
