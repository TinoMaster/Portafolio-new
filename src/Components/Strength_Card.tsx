import { useTranslation } from 'react-i18next'
import { IconType } from 'react-icons'
import { Colors } from '../models/types/Color'
import { motion } from 'framer-motion'

interface Strength_CardProps {
   translate: string
   Icon: IconType
   color: Colors
   index: number
}

const colorMap = {
   primary: {
      glow: 'shadow-primary/20',
      bg: 'bg-primary/5',
      border: 'border-primary/20',
      text: 'text-primary',
   },
   secondary: {
      glow: 'shadow-secondary/20',
      bg: 'bg-secondary/5',
      border: 'border-secondary/20',
      text: 'text-secondary',
   },
   third: {
      glow: 'shadow-third/20',
      bg: 'bg-third/5',
      border: 'border-third/20',
      text: 'text-third',
   },
}

export const Strength_Card = ({
   Icon,
   color,
   translate,
   index,
}: Strength_CardProps) => {
   const [t] = useTranslation('global')
   const c = colorMap[color]

   return (
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5, delay: index * 0.1 }}
         className="w-full sm:w-[280px] lg:w-[230px] xl:w-[260px]"
      >
         <div
            className={`glass glass-hover flex flex-col items-center gap-4 p-6 rounded-2xl h-full ${c.glow} shadow-lg`}
         >
            <div
               className={`w-14 h-14 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center text-2xl ${c.text}`}
            >
               <Icon />
            </div>
            <h3 className="text-sm font-bold tracking-widest text-slate-200">
               {t(`strengths.${translate}.title`)}
            </h3>
            <p className="text-center text-xs text-slate-400 leading-relaxed">
               {t(`strengths.${translate}.description`)}
            </p>
         </div>
      </motion.div>
   )
}
