import { strengthsData } from "../../data/strengths";
import { Strength_Card } from "../Strength_Card";

const Strengths = () => {
  return (
    <div className="flex flex-wrap w-full justify-around items-start grow relative gap-10 lg:gap-0">
      {strengthsData.map((str) => (
        <Strength_Card
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

export default Strengths;
