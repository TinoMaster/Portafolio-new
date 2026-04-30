import { useTranslation } from 'react-i18next'
import { features } from '../../data/feautures'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../../animation/framers'

export const Features = () => {
   const [t] = useTranslation('global')
   return (
      <section className="section bg-gradient-to-b from-transparent via-surface/30 to-transparent">
         <div className="container">
            <div className="section-heading">
               <h2>{t('features.title')}</h2>
               <p>{t('features.subtitle')}</p>
            </div>
            <motion.ul
               variants={staggerContainer}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
               {features.map((item) => (
                  <motion.li
                     key={item.i18}
                     variants={staggerItem}
                     className="glass glass-hover p-6 rounded-2xl text-center group"
                  >
                     <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                     </div>
                     <h4 className="text-lg font-semibold text-slate-200 mb-2">
                        {t(`features.${item.i18}.title`)}
                     </h4>
                     <p className="text-sm text-slate-400 leading-relaxed">
                        {t(`features.${item.i18}.description`)}
                     </p>
                  </motion.li>
               ))}
            </motion.ul>
         </div>
      </section>
   )
}
