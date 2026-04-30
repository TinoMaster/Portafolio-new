import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { skillCategories } from '../../data/skills'
import { staggerContainer, staggerItem } from '../../animation/framers'

export const SkillsSection = () => {
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
               <h2>{t('skills.title')}</h2>
               <p>{t('skills.subtitle')}</p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
               {skillCategories.map((category) => (
                  <motion.div
                     key={category.key}
                     variants={staggerContainer}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true }}
                     className="glass p-6 rounded-2xl"
                  >
                     <h3 className="text-lg font-bold text-slate-200 mb-5 capitalize">
                        {t(`skills.categories.${category.key}`)}
                     </h3>
                     <div className="space-y-4">
                        {category.skills.map((skill) => (
                           <motion.div
                              key={skill.name}
                              variants={staggerItem}
                           >
                              <div className="flex items-center justify-between mb-1.5">
                                 <span className="flex items-center gap-2 text-sm text-slate-400">
                                    <skill.Icon
                                       style={{ color: skill.color }}
                                       className="text-base"
                                    />
                                    {skill.name}
                                 </span>
                                 <span className="text-[10px] text-slate-600">
                                    {skill.level}/5
                                 </span>
                              </div>
                              <div className="h-1 bg-white/[0.04] rounded-full overflow-hidden">
                                 <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{
                                       width: `${skill.level * 20}%`,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                       duration: 0.8,
                                       ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="h-full rounded-full"
                                    style={{
                                       backgroundColor: skill.color,
                                    }}
                                 />
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   )
}
