import { comentBlog, knowMyBlog } from "../../../utils/svgs";
import { ButtonVisitBlog } from "./ButtonVisitBlog";
import { RenderSection } from "./Render_Section";

export const SectionBlog = () => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="w-full font-semibold text-center lg:text-start lg:py-10 text-lg lg:text-xl text-primary">
        Ya Conoces Mi Blog?
      </h3>
      <div className="flex flex-col gap-10">
        <RenderSection reverse svg={knowMyBlog} />
        <RenderSection reverse={false} svg={comentBlog} />
        <RenderSection reverse svg={knowMyBlog} />
      </div>
      <ButtonVisitBlog />
    </div>
  );
};
