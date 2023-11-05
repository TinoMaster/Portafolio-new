import { Link_Social } from "./LinkSocial";
import { linksSocial } from "../../../data/linksSocial";

export const LinksSocial = () => {
  return (
    <div className="w-full md:w-1/2 flex py-2 justify-center text-2xl">
      {linksSocial?.map((el) => (
        <Link_Social key={el.title} Icon={el.icon} link={el.url} />
      ))}
    </div>
  );
};
