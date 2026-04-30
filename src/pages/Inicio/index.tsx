import { ContactUs } from '../../Components/Pag inicio/ContactUs'
import { Features } from '../../Components/Pag inicio/Features'
import { HeroPage } from '../../Components/HeroPage'
import { Presentation } from '../../Components/Pag inicio/Presentation'
import { SectionProjects } from '../../Components/Pag inicio/SectionProjects'
import Strengths from '../../Components/Pag inicio/Strengths'
import { useSEO } from '../../Hooks/UseSEO'

const PagInicio = () => {
   useSEO({
      title: 'TinoMaster | Inicio',
   })
   return (
      <div className="w-full flex flex-col">
         <HeroPage ComponentMessage={Presentation} />
         <Strengths />
         <Features />
         <SectionProjects />
         <ContactUs />
      </div>
   )
}

export default PagInicio
