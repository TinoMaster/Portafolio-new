import { ParagraphsWithPoints } from '../../Components/Helpers/ParagraphsWithPoints'
import { RenderTegnologies } from '../../Components/Helpers/RenderTegnologies'
import { LinksSocialRender } from '../../Components/LinksSocialRender'
import { MenuLinksWithFollowMotion } from '../../Components/MenuLinksWithFollowMotion'
import { usePagProject } from '../../Hooks/usePagProject.hook'
import { ProjectCard } from '../../Components/ProjectCard'
import { useSEO } from '../../Hooks/UseSEO'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const ProjectsPage = () => {
   const {
      projectSelected,
      filteredProjects,
      allTechs,
      activeFilter,
      onChangeProject,
      onToggleFilter,
   } = usePagProject()
   const { links, image, name, tegnologies } = projectSelected
   const [t] = useTranslation('global')
   useSEO({
      title: 'TinoMaster | Proyectos',
   })

   return (
      <div className="min-h-screen pt-24 pb-16">
         <div className="container">
            {/* Header */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-center mb-8"
            >
               <h2 className="text-3xl md:text-4xl font-bold font-lora text-gradient mb-2">
                  {t('pageProjects.title')}
               </h2>
               <p className="text-slate-400 text-sm">
                  {filteredProjects.length}{' '}
                  {filteredProjects.length === 1 ? 'proyecto' : 'proyectos'}
                  {activeFilter && (
                     <span>
                        {' '}
                        con{' '}
                        <span className="text-secondary">{activeFilter}</span>
                     </span>
                  )}
               </p>
            </motion.div>

            {/* Filtros de tecnología */}
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="flex flex-wrap justify-center gap-2 mb-8"
            >
               {allTechs.map((tech) => (
                  <button
                     key={tech}
                     onClick={() => onToggleFilter(tech)}
                     className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                        activeFilter === tech
                           ? 'bg-secondary/15 text-secondary border border-secondary/30'
                           : 'text-slate-500 border border-white/[0.04] hover:text-slate-300 hover:border-white/[0.1]'
                     }`}
                  >
                     {tech}
                  </button>
               ))}
            </motion.div>

            {/* Tabs de proyectos */}
            <div className="mb-10">
               <MenuLinksWithFollowMotion
                  links={filteredProjects.map((el) => ({
                     title: el.name,
                     image: el.image,
                  }))}
                  selectedLink={projectSelected.name}
                  onChangeLink={onChangeProject}
               />
            </div>
         </div>

         {/* Project Card */}
         <ProjectCard
            inConstruction={
               projectSelected?.inConstruction ? true : false
            }
            image={image}
            title={name}
            sections={['description', 'technologies', 'links']}
            components={[
               <ParagraphsWithPoints project={name} key="desc" />,
               <RenderTegnologies
                  tegnologies={tegnologies}
                  key="tech"
               />,
               projectSelected.links.length > 0 ? (
                  <LinksSocialRender
                     linksSocial={links}
                     showTitle
                     key="links"
                  />
               ) : (
                  <p
                     className="text-slate-500 text-center py-12"
                     key="links"
                  >
                     —
                  </p>
               ),
            ]}
            brand="TinoMaster"
         />
      </div>
   )
}

export default ProjectsPage
