import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

export const ButtonBack = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (location.state && location.state.from) {
      navigate(location.state.from);
    } else {
      window.history.back();
    }
  };

  return (
    <button
      onClick={handleGoBack}
      className="flex gap-2 items-center shadow-xl bg-darkMode/80 p-2 rounded-md text-white/90 fixed top-[75px] hover:bg-slate-500"
    >
      <FaArrowLeft /> Volver
    </button>
  );
};
