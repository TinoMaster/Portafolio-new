import { Link } from "react-router-dom";

export const ButtonVisitBlog = () => {
  return (
    <Link
      to={"/blog"}
      className="bg-primary/70 transition-colors text-center text-white font-semibold px-5 py-3 rounded-lg hover:bg-primary"
    >
      Ir al Blog
    </Link>
  );
};
