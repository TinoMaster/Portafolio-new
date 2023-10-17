import { Resume } from "./Resume";
import { BoxCards } from "./BoxCards";

export const SectionAboutMe = () => {
  return (
    <div className="flex flex-wrap w-full gap-10">
      <p className="w-full font-semibold text-center lg:text-end lg:text-xl text-primary">
        ABOUT ME
      </p>
      <div className="w-full flex flex-wrap gap-10 lg:gap-0">
        <BoxCards />
        <Resume />
      </div>
    </div>
  );
};
