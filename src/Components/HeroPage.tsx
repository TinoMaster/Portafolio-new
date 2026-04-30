import { mi_foto2 } from '../utils/images'
import { motion } from 'framer-motion'

interface HeroPageProps {
   ComponentMessage: React.FC
}

export const HeroPage = ({ ComponentMessage }: HeroPageProps) => {
   return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
         {/* Fondo con gradiente sutil */}
         <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent pointer-events-none" />
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/[0.03] rounded-full blur-3xl pointer-events-none" />

         <div className="container relative z-10 flex flex-col items-center pt-24 md:pt-32 pb-16">
            {/* Foto de perfil */}
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
               className="mb-10"
            >
               <div className="border-gradient rounded-full p-[3px]">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden bg-surface">
                     <img
                        className="w-full h-full object-cover"
                        src={mi_foto2}
                        alt="Oscar Mallón"
                     />
                  </div>
               </div>
            </motion.div>

            <ComponentMessage />
         </div>
      </section>
   )
}
