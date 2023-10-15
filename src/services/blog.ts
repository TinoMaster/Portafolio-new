import { blogs } from "../data/blogs/blogs";
import { BlogCategory } from "../models/types/Blog";

export class BlogService {
  static async getBlogs(category: BlogCategory) {
    /* const blogsToReturn = [] */

    return blogs.filter(
      (el) => el.category === category || category === "general"
    );
  }

  static async getItemBlog(id: string) {
    return blogs.find((el) => el.id === id);
  }
}
