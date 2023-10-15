import { blogs } from "../data/blogs/blogs";
import { BlogCategory } from "../models/types/Blog";

export class BlogService {
  static async getBlogs(category: BlogCategory | undefined) {
    const blogsToReturn = [];
    if (category) {
      blogsToReturn.push(...blogs.filter((el) => el.category === category));
    } else return blogs;
    return blogsToReturn;
  }

  static async getItemBlog(id: string) {
    return blogs.find((el) => el.id === id);
  }
}
