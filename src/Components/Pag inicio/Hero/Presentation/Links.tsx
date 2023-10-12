import { linksSocial } from "../../../../data/linksSocial";
import { Link } from "../../../Footer/Link";

export const Links = () => {
  return (
    <div className="flex px-6">
      {linksSocial?.map((el) => (
        <Link key={el.title} Icon={el.icon} link={el.url} />
      ))}
    </div>
  );
};
