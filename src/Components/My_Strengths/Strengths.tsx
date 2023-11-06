import { strengthsData } from "../../data/strengths";
import { Strength_item } from "./Strength_item";

export const Strengths = () => {
  return (
    <div className="flex flex-wrap w-full justify-around items-start grow relative -top-10 lg:-top-20 gap-10 lg:gap-0">
      {strengthsData.map((str) => (
        <Strength_item
          key={str.title}
          Icon={str.icon}
          description={str.description}
          title={str.title}
          color={str.color}
        />
      ))}
    </div>
  );
};
