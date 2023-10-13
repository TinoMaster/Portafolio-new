import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <p className="mt-5">Page not found.</p>
      <Link
        to={"/"}
        className="bg-secondary p-2 rounded-md shadow-md text-white"
      >
        Go back to home page{" "}
      </Link>
    </div>
  );
};
