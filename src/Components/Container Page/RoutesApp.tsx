import { Route, Routes } from "react-router-dom";
import { Error404 } from "../../pages/404";
import { WrapperBlogs } from "../Pag Blog/blogs/wrapper_Blogs";
import { ViewBlog } from "../../pages/View Blog";
import { Suspense, lazy } from "react";
import LoadingPage from "../loaders/LoadingPage";

const PagInicio = lazy(() => import("../../pages/Inicio"));
const ProjectsPage = lazy(() => import("../../pages/Projects"));
const AboutPage = lazy(() => import("../../pages/About"));
const BlogPage = lazy(() => import("../../pages/Blog"));

export const RoutesApp = () => (
  <Suspense fallback={<LoadingPage />}>
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
  </Suspense>
);
