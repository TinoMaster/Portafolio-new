import { Card1 } from "./Card1";
import { Card2 } from "./Card2";

export const BoxCards = () => {
  return (
    <div className="flex w-full h-full lg:w-1/2 lg:p-5 justify-center lg:justify-start">
      <div className="lg:w-1/2 flex gap-5">
        <Card1 />
        <Card2 />
      </div>
    </div>
  );
};
