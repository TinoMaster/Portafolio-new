import React from "react";

export const DescripProject = ({ description }) => {
  return (
    <p className="w-full text-justify text-sm border-b font-normal font-roboto pb-2">
      {description}
    </p>
  );
};
