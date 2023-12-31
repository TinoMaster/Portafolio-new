import { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import AppContext from "../../context/appContext";

export const BtnMenuMovil = () => {
  const context = useContext(AppContext);

  return (
    <small
      onClick={context?.handlerMenuMovile}
      className="md:hidden p-2 mr-6 "
    >
      <AiOutlineMenu className="text-3xl" />
    </small>
  );
};
