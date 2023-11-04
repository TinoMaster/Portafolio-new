import { Blogs } from "../../Components/Pag Blog/blogs";
import { HeroBlog } from "../../Components/Pag Blog/hero";
import { Section } from "../../Components/global/Section";

export const BlogPage = () => {
  return (
    <div className="">
      <HeroBlog />
      <Section Component={Blogs} />
    </div>
  );
};
