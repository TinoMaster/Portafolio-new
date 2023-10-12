import React from "react";
import { FaGithub } from "react-icons/fa";
import { GiRapidshareArrow } from "react-icons/gi";

export const LinksProject = ({ links }) => {
  return (
    <>
      {/* Caja de links */}
      {links.length > 0 ? (
        <div className="w-full flex flex-wrap py-8 justify-center">
          <button
            onClick={() => {
              window.open(links[0], "_blank");
            }}
            className="flex items-center mx-2 my-2 text-green-500 hover:text-green-400 transition-colors"
          >
            <FaGithub className="mr-1 text-2xl" />{" "}
            <span className="">Code</span>
          </button>
          <button
            onClick={() => {
              window.open(links[1], "_blank");
            }}
            className="flex items-center mx-2 my-2 text-violet-500 hover:text-violet-400 transition-colors"
          >
            <FaGithub className="mr-1 text-2xl" />{" "}
            <span className="">Code API</span>
          </button>
          <button
            onClick={() => {
              window.open(links[2], "_blank");
            }}
            className="flex items-center mx-2 my-2 text-yellow-500 hover:text-yellow-400 transition-colors"
          >
            <GiRapidshareArrow className="mr-1 text-2xl" />{" "}
            <span className="">Demo</span>
          </button>
        </div>
      ) : (
        <div className="w-full flex gap-2 flex-wrap py-8 justify-center">
          <p className="">Links:</p>
          <p className="">Soon...</p>
        </div>
      )}
    </>
  );
};
