import { strengthsData } from "../../data/strengths";
import { Strength_Card } from "../Strength_Card";

const Strengths = () => {
  return (
    <div className="container w-full pb-10">
      <div className="flex flex-wrap w-full relative py-5 gap-10 lg:gap-0">
        {strengthsData.map((str) => (
          <Strength_Card
            key={str.translate}
            translate={str.translate}
            Icon={str.icon}
            color={str.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Strengths;
