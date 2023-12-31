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
      className="flex gap-2 items-center shadow bg-darkMode/80 px-2 py-1 rounded-md text-white/90 text-xs lg:text-sm hover:bg-slate-500 z-20"
    >
      <FaArrowLeft /> Atras
    </button>
  );
};
