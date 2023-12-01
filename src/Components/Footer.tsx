import { linksSocial } from "../data/linksSocial";
import { LinksSocialRender } from "./LinksSocialRender";

export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-primary/5">
      <div className="container px-5 py-8 mx-auto gap-4 flex justify-between items-center sm:flex-row flex-col">
        <div className="flex items-center">
          <a className="flex items-center">
            <span className="ml-3 text-lg text-slate-300 font-semibold">
              TinoMaster |{" "}
              <span className="text-sm text-gray-300">© 2023</span>
            </span>
          </a>
        </div>
        <LinksSocialRender linksSocial={linksSocial} />
      </div>
    </footer>
  );
};
