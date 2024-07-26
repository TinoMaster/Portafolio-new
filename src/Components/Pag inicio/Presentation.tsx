import { useTranslation } from 'react-i18next'
import { linksSocial } from '../../data/linksSocial'
import { BtnDonwloadCurr } from '../BtnDonwloadCurr'
import { LinksSocialRender } from '../LinksSocialRender'
import { Tegnologies } from './Tegnologies'

export const Presentation = () => {
   const [t] = useTranslation('global')
   /* C */
   return (
      <div className="w-full h-full flex flex-col text-slate-400 items-center">
         <span className="flex items-center pb-1 text-xl lg:text-4xl gap-1">
            {t('hero.greet')}
         </span>
         <div className="flex flex-wrap text-3xl text-center lg:text-6xl justify-center">
            <span className="block text-slate-200">{t('hero.charge')}</span>
         </div>
         <span className="text-2xl lg:text-4xl bg-gradient-to-r from-sec-600 to-pri-800/80 bg-clip-text text-transparent">
            {t('hero.experience')}
         </span>
         <div className="space-y-4 text-lg rounded-md leading-relaxed w-full max-w-[390px]  sm:max-w-[1100px] py-8 text-balance">
            <p className="text-center md:container">
               {t('hero.about.first')}
            </p>
            <p className="text-center md:container">
               {t('hero.about.second')}
            </p>
         </div>
         <div className="flex flex-col w-full justify-center items-center gap-4">
            <LinksSocialRender linksSocial={linksSocial} />
            <BtnDonwloadCurr />
         </div>
         <div className="container py-28">
            <Tegnologies />
         </div>
      </div>
   )
}
