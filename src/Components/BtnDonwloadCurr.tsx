import { HiOutlineDocumentDownload } from "react-icons/hi";
import { useCurriculum } from "../Hooks/useCurriculum";

export const BtnDonwloadCurr = () => {
  const { downloadEspCurr } = useCurriculum();
  return (
    <button
      onClick={downloadEspCurr}
      className="flex w-full justify-center items-center rounded-full relative bg-gradient-to-tr max-w-[400px] lg:max-w-[500px] from-primary/80 via-primary/60 to-primary/80 text-white gap-2 font-light p-2 shadow-lg shadow-black/10 md:w-1/3 mt-4 z-10 hover:bg-primary/80 hover:shadow-lg hover:shadow-primbg-primary/20 hover:cursor-pointer transition-all"
    >
      <HiOutlineDocumentDownload className="text-3xl rounded-full bg-slate-200 text-slate-700/80 p-1 shadow border border-primary"/>
      Descargar cv
    </button>
  );
};
