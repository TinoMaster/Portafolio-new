import { GiHand } from "react-icons/gi";

export const Text = () => {
  return (
    <>
      <span className="flex items-center p-1 text-3xl">
        Hola <GiHand className="text-yellow-400 ml-1" />,
      </span>
      <h2 className=" text-4xl md:text-3xl xl:text-4xl font-semibold text-primary">
        Soy Oscar
      </h2>
      <span className="block p-1 text-3xl">Desarrollador Web.</span>
      <span className="flex items-center gap-2">
        <span className="text-3xl">Tecnologias</span>
        <span className="text-primary text-3xl">Full Stack</span>
      </span>
      <span className="text-primary text-3xl">Exp: 4 Años</span>
    </>
  );
};
