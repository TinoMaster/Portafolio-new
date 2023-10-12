import { Route, Routes } from "react-router-dom";
import { MenuMovil } from "../Menu/MenuMovil";
import { PagInicio } from "../Pag inicio";

export const Container = () => {
  return (
    <section className="w-full relative">
      <MenuMovil />
      <Routes>
        <Route path="/" element={<PagInicio />} />
        {/* <Route path="/*" element={<Error404 />} /> */}
      </Routes>
    </section>
  );
};
