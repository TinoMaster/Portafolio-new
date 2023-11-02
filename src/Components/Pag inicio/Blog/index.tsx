import { sectionsBlogHome } from "../../../data/sectionBlogHome";
import { ButtonVisitBlog } from "./ButtonVisitBlog";
import { RenderSection } from "./Render_Section";

export const SectionBlog = () => {
  return (
    <article className="flex flex-col gap-5">
      <h3 className="w-full font-semibold text-center lg:text-start lg:py-10 text-lg lg:text-xl text-primary">
        Ya Conoces Mi Blog?
      </h3>
      <div className="flex flex-col gap-10">
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
