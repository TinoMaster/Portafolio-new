import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { timeline } from '../../data/timeline'

export const TimelineSection = () => {
   const [t] = useTranslation('global')

   return (
      <section className="section relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-surface/50 to-transparent pointer-events-none" />
         <div className="container relative">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="section-heading"
            >
               <h2>{t('timeline.title')}</h2>
               <p>{t('timeline.subtitle')}</p>
            </motion.div>

            <div className="relative max-w-3xl mx-auto">
               {/* Línea central */}
               <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent md:-translate-x-px" />

               <div className="space-y-12">
                  {timeline.map((entry, i) => (
                     <motion.div
                        key={entry.year}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={`relative flex gap-6 ${
                           i % 2 === 0
                              ? 'md:flex-row'
                              : 'md:flex-row-reverse'
                        }`}
                     >
                        {/* Punto en la línea */}
                        <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full border-2 border-secondary bg-surface -translate-x-1/2 mt-6 z-10" />

                        {/* Contenido */}
                        <div
                           className={`ml-12 md:ml-0 md:w-1/2 ${
                              i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                           }`}
                        >
                           <div className="glass p-5 rounded-2xl">
                              <span className="text-xs text-secondary font-mono tracking-wider">
                                 {entry.year}
                              </span>
                              <h3 className="text-lg font-bold text-slate-200 mt-1">
                                 {t(entry.role)}
                              </h3>
                              <p className="text-sm text-slate-500 mb-3">
                                 {entry.company}
                              </p>
                              <p className="text-sm text-slate-400 leading-relaxed mb-3">
                                 {t(entry.description)}
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                 {entry.tags.map((tag) => (
                                    <span
                                       key={tag}
                                       className="px-2 py-0.5 text-[10px] rounded-full bg-white/[0.03] border border-white/[0.06] text-slate-500"
                                    >
                                       {tag}
                                    </span>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}
