import { ParagraphsWithPoints } from '../../Components/Helpers/ParagraphsWithPoints'
import { RenderTegnologies } from '../../Components/Helpers/RenderTegnologies'
import { LinksSocialRender } from '../../Components/LinksSocialRender'
import { MenuLinksWithFollowMotion } from '../../Components/MenuLinksWithFollowMotion'
import { usePagProject } from '../../Hooks/usePagProject.hook'
import { ProjectCard } from '../../Components/ProjectCard'
import { useSEO } from '../../Hooks/UseSEO'
import { myProjects } from '../../data/myProjects'
import { useTranslation } from 'react-i18next'
import { banner_back, banner_backMovil } from '../../utils/images'

const ProjectsPage = () => {
   const { projectSelected, onChangeProject } = usePagProject()
   const { links, image, name, tegnologies } = projectSelected
   useSEO({
      title: 'TinoMaster | Proyectos',
   })
   const [t] = useTranslation('global')

   return (
      <div className="flex flex-col min-h-screen overflow-hidden">
         <div className="w-full h-full absolute">
            <picture>
               <source media="(min-width: 768px)" srcSet={banner_back} />
               <img
                  loading="lazy"
                  className="w-full h-full object-cover brightness-5"
                  src={banner_backMovil}
                  alt={`Imagen banner back`}
               />
            </picture>
         </div>
         <div className="w-full h-full absolute bg-gradient-to-br from-darkMode/5 via-third/5 to-primary/5 z-10" />
         <div className="w-full h-full absolute bg-gradient-to-b from-secondary/10 to-darkMode z-20" />
         <section className="container z-20">
            <section className="flex flex-col gap-2 justify-center w-full min-h-screen">
               <h2 className="w-full text-center text-2xl font-semibold font-serif text-slate-200 pt-24">
                  {t('pageProjects.title')}
               </h2>
               <ul className="flex gap-2 justify-center py-5 px-2">
                  <MenuLinksWithFollowMotion
                     links={myProjects.map((el) => {
                        return {
                           title: el.name,
                           image: el.image,
                        }
                     })}
                     selectedLink={projectSelected.name}
                     onChangeLink={onChangeProject}
                  />
               </ul>
               <div className="grow">
                  <ProjectCard
                     inConstruction={
                        projectSelected?.inConstruction ? true : false
                     }
                     image={image}
                     title={name}
                     sections={['description', 'technologies', 'links']}
                     components={[
                        <ParagraphsWithPoints project={name} />,
                        <RenderTegnologies tegnologies={tegnologies} />,
                        <LinksSocialRender linksSocial={links} showTitle />,
                     ]}
                     brand="TinoMaster"
                  />
               </div>
            </section>
         </section>
      </div>
   )
}

export default ProjectsPage
