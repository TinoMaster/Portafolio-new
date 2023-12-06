import { useEffect, useState } from "react";
import { LuLanguages } from "react-icons/lu";
import { en_icon, es_icon } from "../../utils/images";
import { motion } from "framer-motion";
import i18next from "i18next";

export const SelectLanguage = () => {
  const [language, setLanguage] = useState(window.localStorage.getItem("lang"));
  const [selectLang, setSelectLang] = useState(false);

  const selectLanguage = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    setLanguage(event.currentTarget.getAttribute("data-lang"));
    window.localStorage.setItem(
      "lang",
      event.currentTarget.getAttribute("data-lang") || ""
    );
    i18next.changeLanguage(event.currentTarget.getAttribute("data-lang") || "en");
    setSelectLang((select) => !select);
  };
  useEffect(() => {
    if (!window.localStorage.getItem("lang")) {
      window.localStorage.setItem("lang", "en");
    }
  }, []);

  return (
    <div className="flex items-center gap-1 relative select-none">
      <LuLanguages />
      <p
        onClick={() => setSelectLang((select) => !select)}
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
              onClick={(e) => selectLanguage(e)}
              data-lang="en"
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
              onClick={(e) => selectLanguage(e)}
              data-lang="es"
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
