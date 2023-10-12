import React from "react";

export const Link = ({ Icon, link }) => {
  return (
    <p className="m-2">
      <Icon
        onClick={() => {
          window.open(link, "_blank");
        }}
        className="hover:cursor-pointer hover:shadow-md hover:text-primary/90 transition-all rounded-full"
      />{" "}
    </p>
  );
};
