import { Outlet } from "react-router-dom";
import { Categories } from "./categories";

export const BlogsSection = () => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <Categories />
      <Outlet />
    </div>
  );
};
