import { HiOutlineDocumentDownload } from "react-icons/hi";
import { useCurriculum } from "../Hooks/useCurriculum";

export const BtnDonwloadCurr = () => {
  const { downloadEspCurr } = useCurriculum();
  return (
    <button
      onClick={downloadEspCurr}
      className="flex w-full justify-center items-center relative bg-secondary/80 text-white gap-2 font-light p-1 shadow-lg shadow-black/10 lg:w-1/3 mt-4 z-10 hover:bg-secondary/80 hover:shadow-lg hover:shadow-secondary/20 rounded-md hover:cursor-pointer transition-all"
    >
      <HiOutlineDocumentDownload className="text-2xl rounded-full bg-slate-200 text-green-600/80 p-1 shadow border border-secondary" />
      Descargar CV
    </button>
  );
};
