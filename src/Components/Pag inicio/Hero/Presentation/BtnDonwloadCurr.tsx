import { HiOutlineDocumentDownload } from "react-icons/hi";
import { useCurriculum } from "../../../../Hooks/useCurriculum";

export const BtnDonwloadCurr = () => {
  const { downloadEngCurr } = useCurriculum();
  return (
    <button
      onClick={downloadEngCurr}
      className="flex justify-center items-center relative bg-secondary/70 font-medium border-2 border-secondary/50 px-2 py-1 shadow-lg shadow-secondary/10 lg:w-1/3 mt-4 text-xl z-10 hover:bg-secondary/80 hover:shadow-md hover:shadow-secondary/30 rounded-md hover:cursor-pointer transition-all"
    >
      <HiOutlineDocumentDownload className="text-3xl rounded-full p-1" />
      Descargar CV
    </button>
  );
};
