import { Blog, BlogCategory } from "../models/types/Blog";

export interface ResponseUrl {
  error?: { error: boolean; message: string };
  data?: BlogResponse[];
  success?: boolean;
}

export interface BlogResponse {
  _id: string;
  title: string;
  description: string;
  category: string;
  content: string;
  image?: string;
  sections: SectionResponse[];
  createdAt: Date;
  updatedAt?: Date;
  __v?: number;
}

export interface SectionResponse {
  id: number;
  title: string;
  type: TypeSection;
  content: string;
  _id: string;
}
export enum TypeSection {
  Code = "code",
  Text = "text",
}

export const getAllBlogs = async (url: string) => {
  const blogsToReturn: Blog[] = [];
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: ResponseUrl = await response.json();
  if (data.data?.length) {
    data.data.forEach((el) => {
      const blog: Blog = {
        id: el._id,
        category: el.category as BlogCategory,
        title: el.title,
        description: el.description,
        content: el.content,
        image: el.image ?? "",
        sections: el.sections,
        date: el.createdAt,
      };
      blogsToReturn.push(blog);
    });
  }
  return blogsToReturn;
};

export const getBlogByCategory = async (
  url: string,
  category: BlogCategory
) => {
  const blogsToReturn: Blog[] = [];
  const newUrl = `${url}/category/${category}`;
  const response = await fetch(newUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: ResponseUrl = await response.json();
  if (data.data?.length) {
    data.data.forEach((el) => {
      const blog: Blog = {
        id: el._id,
        category: el.category as BlogCategory,
        title: el.title,
        description: el.description,
        content: el.content,
        image: el.image ?? "",
        sections: el.sections,
        date: el.createdAt,
      };
      blogsToReturn.push(blog);
    });
  }
  return blogsToReturn;
};

export const getBlogById = async (
  url: string,
  id: string
): Promise<Blog | object> => {
  const newUrl = `${url}/${id}`;
  const response = await fetch(newUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  let blog: Blog | object = {};
  const el = data.data;
  blog = {
    id: el?._id,
    category: el?.category as BlogCategory,
    title: el?.title,
    description: el?.description,
    content: el?.content,
    image: el?.image ?? "",
    sections: el?.sections,
    date: el?.createdAt,
  };
  return blog;
};
