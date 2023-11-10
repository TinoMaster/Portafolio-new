import { server } from "../config/server.config";
import { Blog, BlogCategory } from "../models/types/Blog";
import { getAllBlogs, getBlogByCategory, getBlogById } from "./blogFunction";

export class BlogService {
  static url = server.production;

  static async getBlogs(category: BlogCategory | undefined) {
    if (category) {
      const res = await getBlogByCategory(this.url, category);
      return res;
    } else {
      const res = await getAllBlogs(this.url);
      return res;
    }
  }

  static async getItemBlog(id: string): Promise<Blog> {
    const res = await getBlogById(this.url, id);
    return res;
  }
}
