import { useEffect, useState } from "react";
import { Blog } from "../models/types/Blog";
import { BlogService } from "../services/blog";

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
        setTimeout(() => {
          setLoading(false);
          setItemBlog(res);
        }, 1000);
      }
    });
  }, [id]);

  return { itemBlog, loading };
};

export default useViewBlog;
