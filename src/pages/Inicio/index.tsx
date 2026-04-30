import { AIAgentsSection } from '../../Components/Pag inicio/AIAgentsSection'
import { ArchitectureSection } from '../../Components/Pag inicio/ArchitectureSection'
import { ContactUs } from '../../Components/Pag inicio/ContactUs'
import { Features } from '../../Components/Pag inicio/Features'
import { HeroPage } from '../../Components/HeroPage'
import { Presentation } from '../../Components/Pag inicio/Presentation'
import { SectionProjects } from '../../Components/Pag inicio/SectionProjects'
import { SkillsSection } from '../../Components/Pag inicio/SkillsSection'
import Strengths from '../../Components/Pag inicio/Strengths'
import { TimelineSection } from '../../Components/Pag inicio/TimelineSection'
import { useSEO } from '../../Hooks/UseSEO'

const PagInicio = () => {
   useSEO({
      title: 'TinoMaster | Inicio',
   })
   return (
      <div className="w-full flex flex-col">
         <HeroPage ComponentMessage={Presentation} />
         <Strengths />
         <TimelineSection />
         <SkillsSection />
         <ArchitectureSection />
         <AIAgentsSection />
         <Features />
         <SectionProjects />
         <ContactUs />
      </div>
   )
}

export default PagInicio
