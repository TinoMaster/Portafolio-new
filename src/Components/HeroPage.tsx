import { banner_back, mi_foto2 } from '../utils/images'

interface HeroPageProps {
   ComponentMessage: React.FC
}

export const HeroPage = ({ ComponentMessage }: HeroPageProps) => {
   return (
      <section className="flex flex-wrap items-center w-full relative h-screen max-h-[850px]">
         <div className="w-full h-full absolute bg-gradient-to-t lg:bg-gradient-to-r from-indigo-900/5 lg:via-orange-900/5 via-transparent to-green-800/5">
            <img
               src={banner_back}
               alt=""
               className="w-full h-full object-cover brightness-25"
            />
         </div>
         <div className="w-full h-full absolute bg-gradient-to-r from-secondary/20 to-darkMode/20 z-10" />
         <div className="w-full h-full absolute bg-gradient-to-b from-secondary/10 to-darkMode z-20" />
         {/* Seccion principal */}
         <section className="lg:container flex gap-5 flex-wrap relative flex-row-reverse w-full h-full justify-center pt-[150px] z-30">
            <div className="w-16 h-16 rounded-full overflow-hidden relative border">
               <picture>
                  <img
                     loading="lazy"
                     className="w-full h-full object-cover"
                     src={mi_foto2}
                     alt={`Imagen banner`}
                  />
               </picture>
            </div>
            <ComponentMessage />
         </section>
      </section>
   )
}
