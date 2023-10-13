import { Link } from "./Link";
import { linksSocial } from "../../data/linksSocial";

export const Links = () => {
  return (
    <div className="w-full md:w-1/2 flex py-2 justify-center text-2xl">
      {linksSocial?.map((el) => (
        <Link key={el.title} Icon={el.icon} link={el.url} />
      ))}
    </div>
  );
};
