import { ContactUs } from '../../Components/Pag inicio/ContactUs'
import { Features } from '../../Components/Features'
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
      <section className="w-full flex flex-col relative bg-gradient-to-br from-pri-900/5 via-transparent to-sec-900/5">
         <div className="">
            <HeroPage ComponentMessage={Presentation} />
            <div className='w-full bg-gradient-to-b from-darkMode to-transparent'>
               <Strengths />
            </div>
         </div>
         <Features />
         <SectionProjects />
         <ContactUs />
      </section>
   )
}

export default PagInicio
