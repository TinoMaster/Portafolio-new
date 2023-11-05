import { Link } from "react-router-dom";

export const ButtonVisitBlog = () => {
  return (
    <button className="bg-primary text-white font-semibold px-5 py-3 rounded-lg">
      <Link to={"/blog"}>Ir al Blog</Link>
    </button>
  );
};
