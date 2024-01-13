import { Tegnologies } from './Pag inicio/Tegnologies'

interface HeroPageProps {
   principalImageMovil: string
   principalImageDesktop: string
   pageName: string
   ComponentMessage: React.FC
}

export const HeroPage = ({
   principalImageMovil,
   principalImageDesktop,
   ComponentMessage,
   pageName,
}: HeroPageProps) => {
   return (
      <section className="flex flex-wrap items-center w-full relative max-h-[900px] md:max-h-[750px] xl:max-h-[600px] px-3 mt-10 lg:py-0 md:mt-16 xl:px-0 bg-gradient-to-t lg:bg-gradient-to-r from-indigo-900/5 lg:via-orange-900/5 via-transparent to-green-800/5">
         {/* Seccion principal */}
         <section className="lg:container flex flex-wrap relative flex-row-reverse w-full h-full z-10 mt-5">
            {/* Imagen principal */}
            <div className="w-full lg:w-1/2 lg:flex justify-center lg:justify-end pt-4 md:pt-10 md:pr-5 md:-translate-y-5 hidden">
               <div className="w-56 h-56 md:w-60 md:h-60 rounded-full overflow-hidden relative">
                  <picture>
                     <source
                        media="(min-width: 768px)"
                        srcSet={principalImageDesktop}
                     />
                     <img
                        loading="lazy"
                        className="w-full h-full object-cover"
                        src={principalImageMovil}
                        alt={`Imagen banner ${pageName}`}
                     />
                  </picture>
               </div>
            </div>
            <ComponentMessage />
         </section>
         <div className="container">
            <Tegnologies />
         </div>
      </section>
   )
}
