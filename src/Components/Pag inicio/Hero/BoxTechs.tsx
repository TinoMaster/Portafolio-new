import { imagesTechStack } from "../../../utils/images";
import { Tech } from "./Tech";

export const BoxTechs = () => {
  return (
    <div className="flex flex-col w-full">
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
