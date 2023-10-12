import { imagesTechStack } from "../../../utils/images";
import { Tech } from "./Tech";

export const BoxTechs = () => {
  return (
    <div className="flex flex-col w-full left-14 top-10 lg:top-14 lg:left-20">
      <div className="w-full flex justify-around">
        {imagesTechStack.slice(0, 5).map((img) => (
          <Tech key={img} image={img} />
        ))}
      </div>
      <div className="w-full flex justify-around">
        {imagesTechStack.slice(5).map((img) => (
          <Tech key={img} image={img} />
        ))}
      </div>
    </div>
  );
};
