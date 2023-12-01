import { strengthsData } from "../../data/strengths";
import { Strength_Card } from "../Strength_Card";

const Strengths = () => {
  return (
    <div className="container w-full pb-10">
      <div className="flex flex-wrap w-full relative lg:-translate-y-20 gap-10 lg:gap-0">
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
    </div>
  );
};

export default Strengths;
