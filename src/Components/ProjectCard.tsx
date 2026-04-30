import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface ProjectCardBigProps {
   image: string
   title: string
   brand?: string
   sections: string[]
   components?: JSX.Element[]
   inConstruction?: boolean
}

export const ProjectCard = ({
   image,
   sections,
   title,
   brand,
   components,
   inConstruction = false,
}: ProjectCardBigProps) => {
   const [section, setSection] = useState(sections[0])
   const [t] = useTranslation('projects')

   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         key={image}
         className="container px-4 py-8 mx-auto"
      >
         <div className="max-w-3xl mx-auto">
            <div className="glass rounded-2xl overflow-hidden">
               {/* Imagen del proyecto */}
               <div className="relative h-64 md:h-80 bg-surface/50 flex items-center justify-center overflow-hidden">
                  <img
                     alt={`imagen del proyecto ${title}`}
                     className="w-full h-full object-contain p-4"
                     src={image}
                  />
                  {inConstruction && (
                     <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full">
                        In Construction
                     </span>
                  )}
               </div>

               {/* Contenido */}
               <div className="p-6 md:p-8">
                  <p className="text-xs text-slate-500 tracking-widest uppercase mb-1">
                     {brand}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">
                     {t(`${title}.title`)}
                  </h2>

                  {/* Tabs */}
                  <div className="flex border-b border-white/[0.06] mb-6">
                     {sections.map((sect) => (
                        <button
                           key={sect}
                           onClick={() => setSection(sect)}
                           className={`relative px-4 py-3 text-sm font-medium capitalize transition-colors ${
                              section === sect
                                 ? 'text-secondary'
                                 : 'text-slate-500 hover:text-slate-300'
                           }`}
                        >
                           {t(`sections.${sect}`)}
                           {section === sect && (
                              <motion.div
                                 layoutId="activeTab"
                                 className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"
                              />
                           )}
                        </button>
                     ))}
                  </div>

                  {/* Contenido de tab */}
                  <motion.div
                     key={section}
                     initial={{ opacity: 0, y: 8 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.3 }}
                     className="min-h-[300px] text-slate-300"
                  >
                     {components &&
                        components[sections.indexOf(section)]}
                  </motion.div>
               </div>
            </div>
         </div>
      </motion.div>
   )
}
