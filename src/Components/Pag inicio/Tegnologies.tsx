import { useTranslation } from 'react-i18next'
import { myStacks } from '../../data/tegnologies'

export const Tegnologies = () => {
   const [t] = useTranslation('global')
   return (
      <div className="w-full max-w-[600px] mb-4 lg:my-4 text-center text-sm lg:text-start flex flex-wrap justify-center gap-x-2 gap-y-3">
         <p className="w-full text-[10px] uppercase text-gray-400 font-roboto">
            {t('hero.tegnologiesTitle')}
         </p>
         {myStacks.map((stack) => (
            <img className='lg:h-5' key={stack.name} alt={stack.name} src={stack.img} />
         ))}
      </div>
   )
}
