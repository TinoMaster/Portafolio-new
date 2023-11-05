import { AiOutlineGlobal } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
interface LinksProjectProps {
  links: string[];
  onlyIcon: boolean;
}

export const LinksProject = ({ links, onlyIcon }: LinksProjectProps) => {
  return (
    <>
      {links.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              window.open(links[0], "_blank");
            }}
            className="flex items-center text-secondary/50 hover:text-secondary transition-colors"
          >
            <FaGithub className="mr-1 text-2xl" />{" "}
            <span className={`${onlyIcon ? "hidden" : ""}`}>Code</span>
          </button>
          <button
            onClick={() => {
              window.open(links[1], "_blank");
            }}
            className="flex items-center text-primary/50 hover:text-primary transition-colors"
          >
            <FaGithub className="mr-1 text-2xl" />{" "}
            <span className={`${onlyIcon ? "hidden" : ""}`}>Code API</span>
          </button>
          <button
            onClick={() => {
              window.open(links[2], "_blank");
            }}
            className="flex items-center text-third/50 hover:text-third transition-colors"
          >
            <AiOutlineGlobal className="mr-1 text-2xl" />{" "}
            <span className={`${onlyIcon ? "hidden" : ""}`}>Demo</span>
          </button>
        </div>
      ) : (
        <div className="w-full text-center text-slate-500">
          <p className="">proximamente...</p>
        </div>
      )}
    </>
  );
};
