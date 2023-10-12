import { mi_logo } from "../../utils/images";

export const Logo = () => {
  return (
    <div className="w-12 h-12 relative rounded-full ml-5 lg:ml-10 overflow-hidden">
      <img
        src={mi_logo}
        alt="mi logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};
