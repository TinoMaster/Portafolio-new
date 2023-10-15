import { useEffect, useState } from "react";
import { Blog, BlogCategory } from "../models/types/Blog";
import { BlogService } from "../services/blog";

const useBlog = (category: BlogCategory | undefined) => {
  const [blogsFilter, setBlogsFilter] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    BlogService.getBlogs(category).then((res) => {
      setTimeout(() => {
        setLoading(false);
        setBlogsFilter(res);
      }, 1000);
    });
  }, [category]);

  return { blogsFilter, loading };
};

export default useBlog;
