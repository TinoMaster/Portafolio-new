import React from "react";
import { CgScreen } from "react-icons/cg";
import { GoDatabase, GoServer } from "react-icons/go";

export const Tegnologies = ({ tegnologiesF, tegnologiesB, dataBase }) => {
  return (
    <>
      {/* Seccion tegnologias que use */}
      <h3 className="pt-2 text-primary font-semibold">Tegnologies:</h3>
      {/* Frontend */}
      <div className="flex pt-3 items-baseline w-full text-sm">
        <p className="flex items-center">
          <CgScreen className="mr-1" /> Frontend:
        </p>
        {tegnologiesF?.map((tech) => (
          <h4
            key={tech}
            className="mx-2 px-2 shadow shadow-black/30 rounded-md"
          >
            {tech}
          </h4>
        ))}
      </div>
      {/* Backend */}
      <div className="flex pt-3 items-baseline w-full text-sm">
        <p className="flex items-center">
          <GoServer className="mr-1" /> Backend:
        </p>
        {tegnologiesB?.map((tech) => (
          <h4
            key={tech}
            className="mx-2 px-2 shadow shadow-black/30 rounded-md"
          >
            {tech}
          </h4>
        ))}
      </div>
      {/* Databases */}
      <div className="flex pt-3 items-baseline w-full text-sm">
        <p className="flex items-center">
          <GoDatabase className="mr-1" /> DataBase:
        </p>
        <h4 className="mx-2 px-2 shadow shadow-black/30 rounded-md">
          {dataBase}
        </h4>
      </div>
    </>
  );
};
