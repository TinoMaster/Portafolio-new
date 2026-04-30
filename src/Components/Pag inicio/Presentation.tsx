import { useTranslation } from 'react-i18next'
import { linksSocial } from '../../data/linksSocial'
import { BtnDonwloadCurr } from '../BtnDonwloadCurr'
import { LinksSocialRender } from '../LinksSocialRender'
import { Tegnologies } from './Tegnologies'
import { useTypewriter } from '../../Hooks/useTypewriter'
import { motion } from 'framer-motion'
import { fadeUp } from '../../animation/framers'

const rolesEn = [
   'Full Stack Developer',
   'Backend Engineer',
   'Mobile Developer',
   'AI Agent Engineer',
   'React & Next.js',
   'Java & Spring Boot',
]
const rolesEs = [
   'Desarrollador Full Stack',
   'Ingeniero Backend',
   'Desarrollador Mobile',
   'Ingeniero AI Agents',
   'React & Next.js',
   'Java & Spring Boot',
]

export const Presentation = () => {
   const [t, i18n] = useTranslation('global')
   const isEs = i18n.language?.startsWith('es')
   const typedRole = useTypewriter({
      words: isEs ? rolesEs : rolesEn,
      typeSpeed: 70,
      deleteSpeed: 35,
      delayBetweenWords: 2000,
   })

   return (
      <motion.div
         variants={fadeUp}
         initial="hidden"
         animate="visible"
         className="w-full flex flex-col items-center px-4"
      >
         <span className="text-slate-400 text-lg md:text-xl mb-3 tracking-wide">
            {t('hero.greet')}
         </span>
         <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-lora text-gradient text-center mb-3">
            {t('hero.charge')}
         </h1>
         <div className="h-10 flex items-center mb-8">
            <span className="text-xl md:text-2xl text-secondary font-medium">
               {typedRole}
               <span className="animate-pulse ml-0.5 text-secondary">|</span>
            </span>
         </div>
         <div className="max-w-2xl space-y-3 text-slate-400 text-base md:text-lg leading-relaxed text-center mb-8">
            <p>{t('hero.about.first')}</p>
            <p>{t('hero.about.second')}</p>
         </div>
         <div className="flex flex-col items-center gap-6 mb-16">
            <LinksSocialRender linksSocial={linksSocial} />
            <BtnDonwloadCurr />
         </div>
         <Tegnologies />
      </motion.div>
   )
}
