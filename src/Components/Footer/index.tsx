import { Links } from "./Links";
import { Copyright } from "./Copyright";

export const Footer = () => {
  return (
    <div className="w-full flex flex-wrap bg-primary/80 p-8 items-center text-lightMode font-semibold text-lg rounded-t-lg">
      <Copyright />
      <Links />
    </div>
  );
};
