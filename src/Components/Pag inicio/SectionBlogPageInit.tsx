import { sectionsBlogHome } from "../../data/sectionBlogHome";
import { ButtonLink } from "../ButtonLink";
import { Item_ImageTitleDescription } from "../Item_ImageTitleDescription";

const SectionBlogPageInit = () => {
  return (
    <article className="flex flex-col gap-10 container z-10 relative">
      <h3 className="w-full font-semibold text-center lg:text-start lg:py-10 text-lg lg:text-xl text-primary">
        Ya Conoces Mi Blog?
      </h3>
      <div className="flex flex-col gap-28">
        {sectionsBlogHome?.map((section, index) => (
          <Item_ImageTitleDescription
            key={index}
            reverse={section.reverse}
            img={section.img}
            color={section.color}
            description={section.description}
            title={section.title}
          />
        ))}
      </div>
      <ButtonLink color="primary" link="/blog" />
    </article>
  );
};

export default SectionBlogPageInit;
