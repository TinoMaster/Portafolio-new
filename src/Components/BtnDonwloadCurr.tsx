import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useCurriculum } from '../Hooks/useCurriculum'

export const BtnDonwloadCurr = () => {
   const [selectCurr, setSelectCurr] = useState(false)
   const { downloadEspCurr, downloadEngCurr } = useCurriculum()
   const [t] = useTranslation('global')

   return (
      <div className="flex w-full justify-center items-center rounded-md relative select-none">
         <div
            onClick={() => setSelectCurr((val) => !val)}
            className="relative w-full max-w-[350px] lg:max-w-[200px] inline-flex overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-sec-100"
         >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#05b9d5_0%,#6b01d6_50%,#05b9d5_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-darkMode/80 px-3 py-3 font-medium text-white backdrop-blur-3xl">
               {t('hero.cv')}
            </span>
         </div>
         <AnimatePresence>
            {selectCurr ? (
               <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute flex flex-col gap-2 -bottom-24"
               >
                  <motion.button
                     onClick={() => {
                        downloadEspCurr()
                     }}
                     initial={{ y: -10, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     whileHover={{ x: 10, color: '#a5f4fc' }}
                     exit={{ y: -10, opacity: 0 }}
                     key={1}
                     className="py-1 px-6 shadow-lg shadow-secondary/5 rounded-full border border-secondary/30"
                  >
                     Spanish
                  </motion.button>
                  <motion.button
                     onClick={() => {
                        downloadEngCurr()
                     }}
                     initial={{ y: -10, opacity: 0 }}
                     animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                           y: { delay: 0.1 },
                           opacity: { delay: 0.1 },
                        },
                     }}
                     whileHover={{ x: 10, color: '#a5f4fc' }}
                     exit={{ y: -10, opacity: 0 }}
                     key={2}
                     className="py-1 px-6 shadow-lg shadow-secondary/5 rounded-full border border-secondary/30"
                  >
                     English
                  </motion.button>
               </motion.div>
            ) : null}
         </AnimatePresence>
      </div>
   )
}
