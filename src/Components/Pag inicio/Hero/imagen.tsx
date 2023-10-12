import { mi_foto2 } from "../../../utils/images";

export const Imagen = () => {
  return (
    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
      <div className="w-60 h-60 xl:w-80 xl:h-80 shadow-xl shadow-primary/20 rounded-full bg-primary/10 overflow-hidden border-2 border-primary/50">
        <img src={mi_foto2} alt="my_picture" className="" />
      </div>
    </div>
  );
};
