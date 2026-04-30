import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { architecturePatterns } from '../../data/architectures'
import { staggerContainer, staggerItem } from '../../animation/framers'

export const ArchitectureSection = () => {
   const [t] = useTranslation('global')

   return (
      <section className="section relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent pointer-events-none" />
         <div className="container relative">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="section-heading"
            >
               <h2>{t('architectures.title')}</h2>
               <p>{t('architectures.subtitle')}</p>
            </motion.div>

            <motion.div
               variants={staggerContainer}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
            >
               {architecturePatterns.map((pattern) => (
                  <motion.div
                     key={pattern.key}
                     variants={staggerItem}
                     className="glass glass-hover p-5 rounded-2xl flex flex-col items-center text-center gap-3 group"
                  >
                     <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                        style={{
                           backgroundColor: `${pattern.color}15`,
                           color: pattern.color,
                        }}
                     >
                        <pattern.Icon />
                     </div>
                     <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
                        {t(`architectures.patterns.${pattern.key}.title`)}
                     </span>
                     <span className="text-[10px] text-slate-600 leading-relaxed">
                        {t(`architectures.patterns.${pattern.key}.desc`)}
                     </span>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>
   )
}
