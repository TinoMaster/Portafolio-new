import { Route, Routes } from "react-router-dom";
import { MenuMovil } from "../Menu/MenuMovil";
import { PagInicio } from "../../pages/Inicio";
import { Error404 } from "../../pages/404";
import { BlogPage } from "../../pages/Blog";
import { AboutPage } from "../../pages/About";
import { ProjectsPage } from "../../pages/Projects";
import { WrapperBlogs } from "../Pag Blog/blogs/wrapper_Blogs";

export const Container = () => {
  return (
    <section className="w-full relative">
      <MenuMovil />
      <Routes>
        <Route path="/" element={<PagInicio />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />}>
          <Route path=":category" element={<WrapperBlogs />} />
        </Route>
        {/* <Route path="/blog/:category/:id" element={<WrapperBlogs />} /> */}
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </section>
  );
};
