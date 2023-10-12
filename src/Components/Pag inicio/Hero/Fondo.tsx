import { mi_fondo1 } from "../../../utils/images";

export const Fondo = () => {
  return (
    <>
      <div className="absolute w-full h-full overflow-hidden">
        <img
          className="w-full object-cover h-full bg-transparent blur-md"
          src={mi_fondo1}
          alt=""
        />
      </div>
      <div className="absolute bg-gradient-to-b from-darkMode/60 to-darkMode w-full h-full"></div>
    </>
  );
};
