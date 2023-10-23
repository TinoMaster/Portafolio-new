import { Route, Routes } from "react-router-dom";
import { Error404 } from "../../pages/404";
import { WrapperBlogs } from "../Pag Blog/blogs/wrapper_Blogs";
import { ViewBlog } from "../../pages/View Blog";
import { lazy } from "react";

const PagInicio = lazy(() =>
  import("../../pages/Inicio").then((module) => ({
    default: module.PagInicio,
  }))
);
const ProjectsPage = lazy(() =>
  import("../../pages/Projects").then((module) => ({
    default: module.ProjectsPage,
  }))
);
const AboutPage = lazy(() =>
  import("../../pages/About").then((module) => ({
    default: module.AboutPage,
  }))
);
const BlogPage = lazy(() =>
  import("../../pages/Blog").then((module) => ({
    default: module.BlogPage,
  }))
);

export const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<PagInicio />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/blog" element={<BlogPage />}>
      <Route index element={<WrapperBlogs />} />
      <Route path=":category" element={<WrapperBlogs />} />
    </Route>
    <Route path="/blog/view_blog/:id" element={<ViewBlog />} />
    <Route path="/*" element={<Error404 />} />
  </Routes>
);
