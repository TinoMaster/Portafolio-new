import React from "react";

export const Section = ({ Component }: { Component: React.FC }) => {
  return (
    <section className="w-full relative my-5 px-4 max-w-720p z-10 m-auto overflow-hidden">
      <Component />
    </section>
  );
};
