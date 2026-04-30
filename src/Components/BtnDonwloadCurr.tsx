import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useCurriculum } from '../Hooks/useCurriculum'

const cvOptions = [
   { lang: 'IT', label: 'Italiano', download: 'downloadItaCurr' as const },
   { lang: 'EN', label: 'English', download: 'downloadEngCurr' as const },
   { lang: 'ES', label: 'Spanish', download: 'downloadEspCurr' as const },
]

export const BtnDonwloadCurr = () => {
   const [selectCurr, setSelectCurr] = useState(false)
   const { downloadEspCurr, downloadEngCurr, downloadItaCurr } = useCurriculum()
   const [t] = useTranslation('global')

   const handleDownload = (type: 'downloadItaCurr' | 'downloadEngCurr' | 'downloadEspCurr') => {
      const downloads = {
         downloadItaCurr,
         downloadEngCurr,
         downloadEspCurr,
      }
      downloads[type]()
      setSelectCurr(false)
   }

   return (
      <div className="flex w-full justify-center items-center relative select-none z-30">
         <div
            onClick={() => setSelectCurr((val) => !val)}
            className="relative w-full max-w-[350px] lg:max-w-[200px] inline-flex overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-sec-100 cursor-pointer"
         >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#05b9d5_0%,#6b01d6_50%,#05b9d5_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-md bg-[#0a0f0e]/90 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-3xl">
               {t('hero.cv')}
            </span>
         </div>
         <AnimatePresence>
            {selectCurr && (
               <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-1/2 -translate-x-1/2 flex flex-col gap-1.5"
                  style={{ top: 'calc(100% + 12px)' }}
               >
                  {cvOptions.map((opt, i) => (
                     <motion.button
                        key={opt.lang}
                        onClick={() => handleDownload(opt.download)}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{
                           y: 0,
                           opacity: 1,
                           transition: {
                              y: { delay: i * 0.05 },
                              opacity: { delay: i * 0.05 },
                           },
                        }}
                        exit={{ y: -10, opacity: 0 }}
                        whileHover={{ x: 8, backgroundColor: 'rgba(33,214,239,0.12)' }}
                        className="py-2 px-6 bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/30 rounded-full border border-white/[0.08] text-slate-300 hover:text-white transition-all duration-200 text-sm whitespace-nowrap"
                     >
                        <span className="text-secondary/70 mr-2 text-xs font-semibold">
                           [{opt.lang}]
                        </span>
                        {opt.label}
                     </motion.button>
                  ))}
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   )
}