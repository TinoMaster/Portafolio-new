import { ButtonVisitBlog } from "./ButtonVisitBlog";
import { KnowMyBlog } from "./Know_My_Blog";

export const SectionBlog = () => {
  return (
    <div className="">
      <h3 className="w-full font-semibold text-center lg:text-start lg:py-10 lg:text-xl text-primary">
        Ya Conoces Mi Blog?
      </h3>
      <KnowMyBlog />
      <ButtonVisitBlog />
    </div>
  );
};
