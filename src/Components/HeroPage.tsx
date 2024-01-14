import { banner_back, banner_backMovil, mi_foto2 } from '../utils/images'

interface HeroPageProps {
   ComponentMessage: React.FC
}

export const HeroPage = ({ ComponentMessage }: HeroPageProps) => {
   return (
      <section className="flex flex-wrap items-center w-full relative overflow-hidden">
         <div className="w-full h-full absolute bg-gradient-to-t lg:bg-gradient-to-r from-indigo-900/5 lg:via-orange-900/5 via-transparent to-green-800/5">
            <picture>
               <source media="(min-width: 768px)" srcSet={banner_back} />
               <img
                  loading="lazy"
                  className="w-full h-full object-cover scale-125 lg:scale-100 brightness-10"
                  src={banner_backMovil}
                  alt={`Imagen banner back`}
               />
            </picture>
         </div>
         <div className="w-full h-full absolute bg-gradient-to-br from-secondary/10 via-third/10 to-primary/10 z-10" />
         <div className="w-full h-full absolute bg-gradient-to-b from-secondary/10 to-darkMode z-20" />
         {/* Seccion principal */}
         <section className="container flex gap-5 flex-wrap relative flex-row-reverse w-full h-full px-2 justify-center pt-[100px] z-30">
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
