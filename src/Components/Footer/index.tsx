import { Links } from "./Links";
import { Copyright } from "./Copyright";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-wrap p-8 items-center text-lightMode font-semibold text-lg rounded-t-lg">
      <Copyright />
      <Links />
    </footer>
  );
};
