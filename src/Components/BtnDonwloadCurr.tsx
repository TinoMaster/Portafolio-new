import { HiOutlineDocumentDownload } from "react-icons/hi";
import { useCurriculum } from "../Hooks/useCurriculum";

export const BtnDonwloadCurr = () => {
  const { downloadEspCurr } = useCurriculum();
  return (
    <button
      onClick={downloadEspCurr}
      className="flex w-full text-lg justify-center items-center relative bg-gradient-to-tr max-w-[500px] from-secondary/80 via-secondary/40 to-secondary/80 text-white gap-2 font-light p-2 shadow-lg shadow-black/10 md:w-1/3 mt-4 z-10 hover:bg-secondary/80 hover:shadow-lg hover:shadow-secondary/20 rounded-md hover:cursor-pointer transition-all"
    >
      <HiOutlineDocumentDownload className="text-3xl rounded-full bg-slate-200 text-green-600/80 p-1 shadow border border-secondary" />
      DESCARGAR CV
    </button>
  );
};
