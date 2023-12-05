import { useState } from "react";
import { LuLanguages } from "react-icons/lu";
import { en_icon, es_icon } from "../../utils/images";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const SelectLanguage = () => {
  const [language, setLanguage] = useState("en");
  const [selectLang, setSelectLang] = useState(false);
  const [t, i18n] = useTranslation("global");
  return (
    <div className="flex items-center gap-1 relative">
      <LuLanguages />
      <p
        onClick={() => setSelectLang(true)}
        className="flex gap-1 items-center hover:cursor-pointer min-w-[40px]"
      >
        <img
          src={language === "en" ? en_icon : es_icon}
          alt="logo language"
          className="w-4 h-4 object-cover"
        />
        <span>{language === "en" ? "en" : "es"}</span>
      </p>
      {selectLang ? (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute py-2 bg-gradient-to-tr from-primary/5 to-secondary/5 -bottom-12 -right-2 rounded-lg flex flex-col justify-center items-center hover:cursor-pointer"
        >
          {language === "es" ? (
            <li
              onClick={() => {
                setLanguage("en");
                i18n.changeLanguage("en");
                setSelectLang(false);
              }}
              className="list-none flex items-center justify-end w-[50px] gap-1 mx-3"
            >
              <LuLanguages />
              <img
                src={en_icon}
                alt="logo english language"
                className="w-4 h-4"
              />
              <span>en</span>
            </li>
          ) : (
            <li
              onClick={() => {
                setLanguage("es");
                i18n.changeLanguage("es");
                setSelectLang(false);
              }}
              className="list-none flex items-center justify-end w-[50px] gap-1 mx-3"
            >
              <LuLanguages />
              <img
                src={es_icon}
                alt="logo english language"
                className="w-4 h-4"
              />
              <p>es</p>
            </li>
          )}
        </motion.ul>
      ) : null}
    </div>
  );
};
