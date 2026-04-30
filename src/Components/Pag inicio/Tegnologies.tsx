import { useTranslation } from 'react-i18next'
import { myStacks } from '../../data/tegnologies'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../animation/framers'

export const Tegnologies = () => {
   const [t] = useTranslation('global')
   return (
      <div className="max-w-screen-xl mx-auto">
         <p className="text-center text-sm uppercase tracking-[0.2em] text-slate-500 font-medium mb-6">
            {t('hero.tegnologiesTitle')}
         </p>
         <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
         >
            {myStacks.map((stack) => (
               <motion.li
                  key={stack.name}
                  variants={staggerItem}
                  className="group flex items-center gap-2 px-3 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
                  title={stack.name}
               >
                  <stack.Icon
                     className="text-lg transition-transform duration-300 group-hover:scale-110"
                     style={{ color: stack.color }}
                  />
                  <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
                     {stack.name}
                  </span>
               </motion.li>
            ))}
         </motion.ul>
      </div>
   )
}
