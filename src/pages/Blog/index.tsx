import { BlogsSection } from "../../Components/Pag Blog/BlogsSection";
import { useSEO } from "../../Hooks/UseSEO";

const BlogPage = () => {
  useSEO({
    title: "TinoMaster | Blog",
  });
  return (
    <div className="mt-20">
      <section className="w-full container px-2">
        <BlogsSection />
      </section>
    </div>
  );
};

export default BlogPage;
