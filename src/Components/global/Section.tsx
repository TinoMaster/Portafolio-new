import React from "react";

export const Section = ({ Component }: { Component: React.FC }) => {
  return (
    <div className="w-full relative px-4 py-16 max-w-720p m-auto overflow-hidden">
      <Component />
    </div>
  );
};
