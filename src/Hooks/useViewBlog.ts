import { useEffect, useState } from "react";
import { Blog, BlogSection } from "../models/types/Blog";
import { BlogService } from "../services/blog";
import { convertSectionTitle } from "../utils/convertTilteInId";

const initialState: Blog = {
  id: "",
  category: "javascript",
  content: "",
  date: new Date(),
  description: "",
  image: "",
  sections: [],
  title: "",
};

const useViewBlog = (id: Blog["id"]) => {
  const [itemBlog, setItemBlog] = useState<Blog>(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    BlogService.getItemBlog(id).then((res) => {
      if (res) {
        setLoading(false);
        setItemBlog(res);
      }
    });
  }, [id]);

  const ajustScrollBlogNavegation = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    section: BlogSection
  ) => {
    e.preventDefault();
    const target = document.querySelector(
      `#${convertSectionTitle(section.title, section.id)}`
    );
    if (target) {
      const offset = -100; // Ajusta este valor según tus necesidades
      window.scrollTo({
        top: (target as HTMLElement).offsetTop + offset,
        behavior: "smooth",
      });
    }
  };

  return { itemBlog, loading, ajustScrollBlogNavegation };
};

export default useViewBlog;
