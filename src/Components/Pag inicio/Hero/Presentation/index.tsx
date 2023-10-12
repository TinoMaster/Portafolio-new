import { Text } from "./Text";
import { BtnDonwloadCurr } from "./BtnDonwloadCurr";
import { Links } from "./Links";

export const Presentation = () => {
  return (
    <div className="flex flex-col w-full text-2xl md:w-1/2 md:text-2xl xl:text-2xl mt-8 md:mt-0 justify-center items-center md:items-start">
      <Text />
      <BtnDonwloadCurr />
      <Links />
    </div>
  );
};
