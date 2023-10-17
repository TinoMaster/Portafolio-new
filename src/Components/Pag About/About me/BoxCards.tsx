import { Card1 } from "./Card1";
import { Card2 } from "./Card2";

export const BoxCards = () => {
  return (
    <div className="flex w-full lg:w-1/2 lg:p-5 relative justify-center items-center">
      <Card1 />
      <Card2 />
    </div>
  );
};
