import { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import AppContext from "../../context/appContext";

export const BtnMenuMovil = () => {
  const context = useContext(AppContext);

  return (
    <small
      onClick={context?.handlerMenuMovile}
      className="md:hidden shadow shadow-primary/40 p-2 mr-6 rounded-full"
    >
      <AiOutlineMenu className="text-2xl" />
    </small>
  );
};
