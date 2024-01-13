import { useTranslation } from 'react-i18next'
import { linksSocial } from '../../data/linksSocial'
import { BtnDonwloadCurr } from '../BtnDonwloadCurr'
import { LinksSocialRender } from '../LinksSocialRender'

export const Presentation = () => {
   const [t] = useTranslation('global')

   return (
      <div className="w-full h-full flex flex-col text-slate-400 items-center">
         <span className="flex items-center pb-1 text-3xl lg:text-4xl gap-1">
            {t('hero.greet')}
         </span>
         <div className="flex flex-wrap text-4xl text-center lg:text-6xl justify-center">
            <span className="block text-slate-200">{t('hero.charge')}</span>
         </div>
         <span className="text-3xl lg:text-4xl text-secondary/80">
            {t('hero.experience')}
         </span>
         <div className="space-y-4 text-xl rounded-md max-w-[600px] py-8">
            <p className="text-center max-w-[400px] md:container">
               {t('hero.about.first')}
            </p>
            <p className="text-center max-w-[400px] md:container">
               {t('hero.about.second')}
            </p>
         </div>
         <div className="flex flex-col w-full justify-center items-center gap-4">
            <LinksSocialRender linksSocial={linksSocial} />
            <BtnDonwloadCurr />
         </div>
         {/* <div className="container">
            <Tegnologies />
         </div> */}
      </div>
   )
}
