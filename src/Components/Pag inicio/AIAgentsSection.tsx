import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { aiAgentSkills } from '../../data/aiAgents'
import { staggerContainer, staggerItem } from '../../animation/framers'

export const AIAgentsSection = () => {
   const [t] = useTranslation('global')

   return (
      <section className="section">
         <div className="container">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="section-heading"
            >
               <h2>{t('aiAgents.title')}</h2>
               <p>{t('aiAgents.subtitle')}</p>
            </motion.div>

            <motion.div
               variants={staggerContainer}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               className="grid gap-6 md:grid-cols-3"
            >
               {aiAgentSkills.map((skill) => (
                  <motion.div
                     key={skill.key}
                     variants={staggerItem}
                     className="glass p-6 rounded-2xl border-t-2"
                     style={{ borderTopColor: skill.color }}
                  >
                     <div className="flex items-center gap-3 mb-4">
                        <div
                           className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                           style={{
                              backgroundColor: `${skill.color}15`,
                              color: skill.color,
                           }}
                        >
                           <skill.Icon />
                        </div>
                        <h3 className="text-lg font-bold text-slate-200">
                           {skill.title}
                        </h3>
                     </div>
                     <ul className="space-y-2">
                        {skill.items.map((item, idx) => (
                           <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-slate-400"
                           >
                              <span
                                 className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                 style={{ backgroundColor: skill.color }}
                              />
                              {t(item)}
                           </li>
                        ))}
                     </ul>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>
   )
}
