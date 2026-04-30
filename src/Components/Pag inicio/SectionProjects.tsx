import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export const SectionProjects = () => {
   const [t] = useTranslation('global')
   return (
      <section className="section relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
         <div className="container relative">
            <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="text-center max-w-2xl mx-auto"
            >
               <h2 className="text-3xl md:text-5xl font-bold font-lora text-gradient mb-4">
                  {t('projectsHome.title')}
               </h2>
               <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  {t('projectsHome.subtitle')}
               </p>
               <Link to="/projects">
                  <motion.span
                     whileHover={{ gap: '12px' }}
                     className="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.04] border border-white/[0.08] rounded-full text-secondary font-medium hover:bg-white/[0.08] hover:border-secondary/30 transition-all duration-300 cursor-pointer"
                  >
                     {t('projectsHome.buttom')}
                     <FaArrowRight className="text-sm" />
                  </motion.span>
               </Link>
            </motion.div>
         </div>
      </section>
   )
}
