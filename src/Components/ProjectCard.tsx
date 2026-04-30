import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface ProjectCardBigProps {
   title: string
   brand?: string
   sections: string[]
   components?: JSX.Element[]
   inConstruction?: boolean
}

const categoryGradients: Record<string, string> = {
   enterprise: 'from-primary/20 via-sec-900/20 to-primary/10',
   fullstack: 'from-sec-900/20 via-primary/20 to-sec-900/10',
   mobile: 'from-third/20 via-sec-900/20 to-third/10',
   frontend: 'from-sec-900/20 via-third/20 to-sec-900/10',
}

const categoryBorderColors: Record<string, string> = {
   enterprise: 'border-primary/20',
   fullstack: 'border-secondary/20',
   mobile: 'border-third/20',
   frontend: 'border-secondary/20',
}

export const ProjectCard = ({
   title,
   brand,
   sections,
   components,
   inConstruction = false,
}: ProjectCardBigProps) => {
   const [section, setSection] = useState(sections[0])
   const [t] = useTranslation('projects')

   const gradient = categoryGradients[brand || 'fullstack'] || categoryGradients.fullstack
   const borderColor = categoryBorderColors[brand || 'fullstack'] || categoryBorderColors.fullstack

   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         className="container px-4 mx-auto"
      >
         <div className={`max-w-3xl mx-auto glass rounded-2xl overflow-hidden border ${borderColor}`}>
            <div className="relative overflow-hidden">
               <div className={`h-48 md:h-56 bg-gradient-to-br ${gradient} flex items-center justify-center relative`}>
                  <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center backdrop-blur-sm">
                     <span className="text-3xl font-inter font-bold text-slate-200">
                        {title.slice(0, 2).toUpperCase()}
                     </span>
                  </div>

                  {inConstruction && (
                     <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full backdrop-blur-sm">
                        In Construction
                     </span>
                  )}
               </div>

               <div className="h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
            </div>

            <div className="p-6 md:p-8">
               <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] text-slate-500 tracking-[0.2em] uppercase font-inter">
                     {brand}
                  </span>
                  <span className="text-slate-700">·</span>
                  <span className="text-[10px] text-slate-500 tracking-widest uppercase font-inter">
                     TinoMaster
                  </span>
               </div>
               <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6 font-lora">
                  {t(`${title}.title`)}
               </h2>

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

               <motion.div
                  key={section}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[250px] text-slate-300"
               >
                  {components && components[sections.indexOf(section)]}
               </motion.div>
            </div>
         </div>
      </motion.div>
   )
}