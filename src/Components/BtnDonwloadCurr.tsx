import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useCurriculum } from '../Hooks/useCurriculum'

export const BtnDonwloadCurr = () => {
   const [selectCurr, setSelectCurr] = useState(false)
   const { downloadEspCurr, downloadEngCurr } = useCurriculum()
   const [t] = useTranslation('global')
   return (
      <div
         onClick={() => setSelectCurr((val) => !val)}
         className="flex w-full justify-center items-center rounded-md relative text-lg bg-gradient-to-tr max-w-[380px] lg:max-w-[500px] from-secondary/80 via-secondary/60 to-secondary/80 text-white gap-2 font-semibold font-inter px-2 py-3 shadow-lg shadow-black/10 md:w-[150px] z-10 hover:bg-secondary/80 hover:shadow-lg hover:shadow-primbg-primary/20 hover:cursor-pointer transition-all select-none"
      >
         {t('hero.cv')}
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
                     whileHover={{ x: 10 }}
                     exit={{ y: -10, opacity: 0 }}
                     key={1}
                     className="py-1 px-6 shadow-lg shadow-secondary/30 rounded-full border border-secondary"
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
                     whileHover={{ x: 10 }}
                     exit={{ y: -10, opacity: 0 }}
                     key={2}
                     className="py-1 px-6 shadow-lg shadow-secondary/30 rounded-full border border-secondary"
                  >
                     English
                  </motion.button>
               </motion.div>
            ) : null}
         </AnimatePresence>
      </div>
   )
}
