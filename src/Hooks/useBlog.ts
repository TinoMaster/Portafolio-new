import { useEffect, useState } from "react";
import { Blog, BlogCategory } from "../models/types/Blog";
import { BlogService } from "../services/blog";

const useBlog = (category: BlogCategory) => {
  const [blogsFilter, setBlogsFilter] = useState<Blog[]>([]);

  useEffect(() => {
    BlogService.getBlogs(category).then((res) => setBlogsFilter(res));
  }, [category]);

  return { blogsFilter };
};

export default useBlog;
