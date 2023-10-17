import React from "react";

export const Section = ({ Component }: { Component: React.FC }) => {
  return (
    <div className="w-full relative my-5 px-4 max-w-720p m-auto overflow-hidden">
      <Component />
    </div>
  );
};
