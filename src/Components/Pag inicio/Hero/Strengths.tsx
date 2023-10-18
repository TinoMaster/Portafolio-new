import { MdSmartToy } from "react-icons/md";
import { strengthsData } from "../../../data/strengths";

export const Strengths = () => {
  return (
    <div className="flex flex-wrap w-full justify-around items-start grow relative lg:-top-20 gap-10 py-20 lg:gap-0">
      {strengthsData.map((str) => (
        <div key={str.title} className="flex w-10/12 m-auto lg:w-1/3 flex-col justify-center items-center gap-2 p-3 lg:top-10 relative shadow-2xl shadow-third/10 rounded-md">
          <MdSmartToy className="text-7xl p-1 shadow-lg shadow-third/30 rounded-full" />
          <h3>{str.title}</h3>
          <p className="text-xs text-center">{str.description}</p>
        </div>
      ))}
    </div>
  );
};
