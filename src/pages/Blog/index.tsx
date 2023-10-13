import { Blogs } from "../../Components/Pag Blog/blogs";
import { HeroBlog } from "../../Components/Pag Blog/hero";

export const BlogPage = () => {
  return (
    <div className="pt-20">
      <HeroBlog />
      {/* //Todo: Crear una section global */}
      <div className="w-full relative px-4 pb-10 max-w-720p m-auto overflow-hidden">
        <Blogs />
      </div>
    </div>
  );
};
