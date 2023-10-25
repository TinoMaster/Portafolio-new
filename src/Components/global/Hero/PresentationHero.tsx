import React from "react";

export const PresentationHero = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col w-full text-2xl md:w-1/2 md:text-2xl xl:text-2xl mt-8 md:mt-0 justify-center items-center md:items-start p-2 lg:p-0">
      {children}
    </div>
  );
};
