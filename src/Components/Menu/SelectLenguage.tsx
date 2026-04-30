import { useEffect, useRef, useState } from 'react'
import { LuLanguages } from 'react-icons/lu'
import { en_icon, es_icon } from '../../utils/images'
import { motion } from 'framer-motion'
import i18next from 'i18next'

/* Bandera italiana con CSS (hasta que se agregue italia.png en src/assets/images/) */
const ItalianFlag = () => (
   <span className="w-4 h-4 rounded-sm overflow-hidden flex">
      <span className="w-1/3 bg-[#009246]" />
      <span className="w-1/3 bg-white" />
      <span className="w-1/3 bg-[#ce2b37]" />
   </span>
)

const languages = [
   {
      code: 'it',
      label: 'it',
      icon: <ItalianFlag />,
   },
   {
      code: 'en',
      label: 'en',
      icon: <img src={en_icon} alt="en flag" className="w-4 h-4 object-cover rounded-sm" />,
   },
   {
      code: 'es',
      label: 'es',
      icon: <img src={es_icon} alt="es flag" className="w-4 h-4 object-cover rounded-sm" />,
   },
] as const

export const SelectLanguage = () => {
   const [selectLang, setSelectLang] = useState(false)
   const [language, setLanguage] = useState(i18next.language || 'it')
   const containerRef = useRef<HTMLDivElement>(null)

   /* Sincronizar estado con i18next cuando el idioma cambia externamente */
   useEffect(() => {
      const handler = (lng: string) => setLanguage(lng)
      i18next.on('languageChanged', handler)
      return () => {
         i18next.off('languageChanged', handler)
      }
   }, [])

   /* Cerrar dropdown al hacer clic fuera */
   useEffect(() => {
      const handler = (e: MouseEvent) => {
         if (
            containerRef.current &&
            !containerRef.current.contains(e.target as Node)
         ) {
            setSelectLang(false)
         }
      }
      document.addEventListener('mousedown', handler)
      return () => document.removeEventListener('mousedown', handler)
   }, [])

   const selectedLang = languages.find((l) => l.code === language) || languages[0]

   const selectLanguage = (lang: string) => {
      setLanguage(lang)
      window.localStorage.setItem('lang', lang)
      i18next.changeLanguage(lang)
      setSelectLang(false)
   }

   return (
      <div ref={containerRef} className="flex items-center gap-1 relative select-none">
         <LuLanguages className="text-slate-300" />
         <p
            onClick={() => setSelectLang((s) => !s)}
            className="flex gap-1 items-center hover:cursor-pointer min-w-[40px]"
         >
            {selectedLang.icon}
            <span className="text-slate-300 uppercase text-sm">
               {selectedLang.label}
            </span>
         </p>
         {selectLang && (
<motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 bg-slate-900/95 backdrop-blur-sm border border-white/[0.08] rounded-lg flex flex-col justify-center items-center hover:cursor-pointer shadow-xl shadow-black/30 z-50 min-w-[80px]"
         >
               {languages
                  .filter((l) => l.code !== language)
                  .map((lang) => (
                     <li
                        key={lang.code}
                        onClick={() => selectLanguage(lang.code)}
                        className="list-none flex items-center justify-end w-[60px] gap-1 px-3 py-1.5 hover:bg-white/[0.06] transition-colors rounded-md"
                     >
                        {lang.icon}
                        <span className="uppercase text-sm text-slate-300">
                           {lang.label}
                        </span>
                     </li>
                  ))}
            </motion.ul>
         )}
      </div>
   )
}