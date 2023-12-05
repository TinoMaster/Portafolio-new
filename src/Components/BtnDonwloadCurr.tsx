import { HiOutlineDocumentDownload } from "react-icons/hi";
import { useCurriculum } from "../Hooks/useCurriculum";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion } from "framer-motion";

export const BtnDonwloadCurr = () => {
  const [selectCurr, setSelectCurr] = useState(false);
  const { downloadEspCurr, downloadEngCurr } = useCurriculum();
  const [t] = useTranslation("global");
  return (
    <div
      onClick={() => setSelectCurr((val) => !val)}
      className="flex w-full justify-center items-center rounded-full relative bg-gradient-to-tr max-w-[400px] lg:max-w-[500px] from-primary/80 via-primary/60 to-primary/80 text-white gap-2 font-light p-2 shadow-lg shadow-black/10 md:w-1/3 lg:mt-4 z-10 hover:bg-primary/80 hover:shadow-lg hover:shadow-primbg-primary/20 hover:cursor-pointer transition-all select-none"
    >
      <HiOutlineDocumentDownload className="text-3xl rounded-full bg-slate-200 text-slate-700/80 p-1 shadow border border-primary" />
      {t("hero.cv")}
      {selectCurr ? (
        <div className="absolute flex flex-col gap-2 -bottom-24">
          <motion.button
            onClick={() => {
              downloadEspCurr();
            }}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ x: 10 }}
            className="py-1 px-6 shadow-lg shadow-primary/30 rounded-full border border-primary"
          >
            Spanish
          </motion.button>
          <motion.button
            onClick={() => {
              downloadEngCurr();
            }}
            initial={{ y: -10, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { y: { delay: 0.1 }, opacity: { delay: 0.1 } },
            }}
            whileHover={{ x: 10 }}
            className="py-1 px-6 shadow-lg shadow-primary/30 rounded-full border border-primary"
          >
            English
          </motion.button>
        </div>
      ) : null}
    </div>
  );
};
