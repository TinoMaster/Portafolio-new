import { Link } from "react-router-dom";

export const ButtonVisitBlog = () => {
  return (
    <Link
      to={"/blog"}
      className="bg-primary text-center text-white font-semibold px-5 py-3 rounded-lg"
    >
      Ir al Blog
    </Link>
  );
};
